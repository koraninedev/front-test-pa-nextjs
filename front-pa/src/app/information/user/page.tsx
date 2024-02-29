'use client'
import React, { useState, useEffect } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer';
import Image from 'next/image'
import CoverImg from "../../../../assets/images/background-cover.png";
import { FaCamera } from "react-icons/fa";
import Swal from 'sweetalert2';

interface UserData {
  username?: string;
  firstname?: string;
  position?: string;
  telephonenumber?: string;
  nickname?: string;
  lastname?: string;
  nationality?: string;
  startingdate?: string;
}

function User() {

  const [username, setUsername] = useState('');
  const [firstname, setFirstName] = useState('');
  const [position, setPosition] = useState('');
  const [telephonenumber, setTelephoneNumber] = useState();
  const [nickname, setNickName] = useState('');
  const [lastname, setLastName] = useState('');
  const [nationality, setNationality] = useState('');
  const [startingdate, setStartingDate] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const updatedFields: UserData = {};
    if (username) updatedFields.username = username;
    if (firstname) updatedFields.firstname = firstname;
    if (position) updatedFields.position = lastname;
    if (telephonenumber) updatedFields.telephonenumber = telephonenumber;
    if (nickname) updatedFields.nickname = nickname;
    if (lastname) updatedFields.lastname = lastname;
    if (nationality) updatedFields.nationality = nationality;
    if (startingdate) updatedFields.startingdate = startingdate;

    if (Object.keys(updatedFields).length === 0) {
      Swal.fire({
        title: 'Error!',
        text: `No information to update.`,
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:3333/api/user/update/1', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFields),
      });

      if (!response.ok) {
        throw new Error('Failed to update user information');
      }
      Swal.fire({
        title: 'Success',
        text: 'User information updated successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '../';
        }
      });
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: `Error updating user information`,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <main className="pb-16">
      <Navbar />
      <div className="container mx-auto text-sm">
      <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full mt-24 mb-5">
          <div className="px-6 py-4">
            <p className="font-bold text-xl mb-2">USER INFORMATION UPDATE</p>
            <div className="p-7">
              <form className="rounded-lg overflow-hidden shadow-lg bg-white w-full">
                <Image className="relative object-cover w-full" src={CoverImg} alt="Cover Image" height={300}/>
                <div className="flex flex-wrap p-5">
                    <div className="absolute top-[380px] left-[320px]">
                        <div className="w-[300px] h-[300px] relative">
                        <div className="absolute inset-0 rounded-full bg-gray-400 border-solid border-8 border-white"></div>
                        <button className="w-12 h-12 items-center justify-center flex absolute bottom-10 right-6 bg-gray-300 text-black rounded-full">
                            <FaCamera className="w-5 h-5" />
                        </button>
                        </div>
                    </div>
                  <div className="w-[500px]"></div>
                    <div className="flex-1">
                        <div className="mb-5">
                            <p>USERNAME</p>
                            <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-5">
                          <p>FIRST NAME</p>
                          <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full" type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className="mb-5">
                          <p>POSITION</p>
                          <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full" type="text" value={position} onChange={(e) => setPosition(e.target.value)}/>
                        </div>
                        <div className="mb-5">
                          <p>TELEPHONE NUMBER</p>
                          <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full" type="number" value={telephonenumber} onChange={(e) => setTelephoneNumber(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex-1 ml-4">
                        <div className="mb-5">
                          <p>NICK NAME</p>
                          <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full" type="text" value={nickname} onChange={(e) => setNickName(e.target.value)} />
                        </div>
                        <div className="mb-5">
                          <p>LAST NAME</p>
                          <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full" type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="mb-5">
                          <p>NATIONALITY</p>
                          <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full" type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} />
                        </div>
                        <div className="mb-5">
                          <p>STARTING DATE</p>
                          <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full" type="date" value={startingdate} onChange={(e) => setStartingDate(e.target.value)}/>
                        </div>
                    </div>
                </div>
              </form>
            </div>
            <div className='flex justify-end pr-4'>
              <button className='bg-blue-400 text-white border py-2 px-3 rounded-md text-lg my-2' onClick={handleSubmit}>Update</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default User