import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

function Contact() {
  return (
    <main className="pb-16">
      <Navbar />
      <div className="container mx-auto text-sm">
      <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full mt-24 mb-5">
          <div className="px-6 py-4">
            <p className="font-bold text-xl mb-2">CONTACT INFORMATION UPDATE</p>
            <div className="pt-5 px-24">
              <form action="">
                    <div className="mb-5">
                        <p>ADDRESS</p>
                        <input className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 w-full" type="text" />
                    </div>
                    <div className="flex space-x-12 justify-between mb-5">
                        <div className="w-full">
                            <p>SUB DISTRICT</p>
                            <select className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 focus:outline-none focus:ring-cyan-400 focus:border-cyan-400 w-full">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <p>DISTRICT</p>
                            <select className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 focus:outline-none focus:ring-cyan-400 focus:border-cyan-400 w-full">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <p>PROVINCE</p>
                            <select className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 focus:outline-none focus:ring-cyan-400 focus:border-cyan-400 w-full">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <p>PORTAL CODE</p>
                            <select className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 focus:outline-none focus:ring-cyan-400 focus:border-cyan-400 w-full">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-between mb-5">
                        <div className="w-[300px]">
                            <p>FACEBOOK</p>
                            <input className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 w-full" type="text"/>
                        </div>
                        <div className="w-[300px]">
                            <p>LINE ID</p>
                            <input className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 w-full" type="text"/>
                        </div>
                        <div className="w-[300px]">
                            <p>INSTAGRAM</p>
                            <input className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 w-full" type="text"/>
                        </div>
                    </div>
              </form>
            </div>
            <div className='flex justify-end pr-4'>
                <button className='bg-blue-400 text-white border py-2 px-3 rounded-md text-lg my-2'>Update</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Contact