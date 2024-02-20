import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Vercel from "../../public/vercel.svg";
import CoverImg from "../../assets/images/background-cover.png";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto">
        <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full my-5">
          <div className="px-6 py-4">
            <p className="font-bold text-xl mb-2">USER INFORMATION</p>
            <div className="p-7">
              <form className="rounded-lg overflow-hidden shadow-lg bg-white w-full" action="">
                <Image className="relative object-cover w-full" src={CoverImg} alt="Cover Image" height={300}/>
                <div className="flex flex-wrap p-5">
                    <div className="absolute top-[380px] left-[320px]">
                        <div className="w-[300px] h-[300px] relative">
                        <div className="absolute inset-0 rounded-full bg-gray-400 border-solid border-8 border-white"></div>
                        <button className="absolute bottom-10 right-6 bg-blue-500 text-white rounded-full p-2">Edit</button>
                        </div>
                    </div>
                  <div className="w-[500px]">
                    
                  </div>
                    <div className="flex-1">
                        <div>
                            <p>USERNAME</p>
                            <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full" type="text" />
                        </div>
                        <p>FIRST NAME</p>
                        <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full" type="text"/>
                        <p>POSITION</p>
                        <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full" type="text" />
                        <p>TELEPHONE NUMBER</p>
                        <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full" type="text"/>
                    </div>
                    <div className="flex-1 ml-4">
                        <p>NICK NAME</p>
                        <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full" type="text" />
                        <p>LAST NAME</p>
                        <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full" type="text" />
                        <p>NATIONALITY</p>
                        <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full" type="text" />
                        <p>STARTING DATE</p>
                        <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full" type="date" />
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full my-5">
          <div className="px-6 py-4">
            <p className="font-bold text-xl mb-2">CONTACT INFORMATION</p>
            <div className="pt-5 px-24">
              <form className="rounded-lg overflow-hidden shadow-lg bg-white w-full" action="">
                    <p>ADDRESS</p>
                    <input className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 w-full" type="text" />
                    <p>FIRST NAME</p>
                    <input className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 w-full" type="text"/>
                    <p>POSITION</p>
                    <input className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 w-full" type="text" />
                    <p>TELEPHONE NUMBER</p>
                    <input className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 w-full" type="text"/>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
