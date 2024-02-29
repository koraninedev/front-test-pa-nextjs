import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

function Experience() {
  return (
    <main className="pb-16">
        <Navbar />
        <div className="container mx-auto text-sm">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full mt-24 mb-5">
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">EXPERIENCE INFORMATION UPDATE</div>
                    <div className="pt-5 text-center">
                        <button className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white text-cyan-400 font-bold py-2 px-4 rounded-full">
                            ADD EXPERIENCE
                        </button>
                        <div className="flex flex-col mt-4 items-center">
                            <div className="relative flex flex-col items-center">
                                <div className="absolute h-full w-0.5 bg-gray-500" style={{ left: '25%' }}></div>
                                <div className="flex items-center w-full">
                                    <div className="bg-white px-2">
                                        <div className="text-sm pl-24">UNIVERSITY NAME</div>
                                    </div>
                                    <div className="absolute bg-cyan-400 rounded-full" style={{ width: '10px', height: '10px', left: 'calc(25% - 4px)' }}></div>
                                </div>
                                <div className="flex items-center w-full">
                                    <div className="bg-white px-2">
                                        <div className="text-sm pl-24">UNIVERSITY NAME</div>
                                    </div>
                                    <div className="absolute bg-cyan-400 rounded-full" style={{ width: '10px', height: '10px', left: 'calc(25% - 4px)' }}></div>
                                </div>
                            </div>
                        </div>
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

export default Experience