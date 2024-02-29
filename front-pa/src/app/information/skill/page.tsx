import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

function Skill() {
  return (
    <main className="pb-16">
        <Navbar />
        <div className="container mx-auto text-sm">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full mt-24 mb-5">
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">SKILL INFORMATION UPDATE</div>
                    <div className="pt-5 text-center">
                        <button className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white text-cyan-400 font-bold py-2 px-4 rounded-full">
                            ADD SKILL
                        </button>
                        <div className="flex flex-col  mt-4 items-center">
                            <div className="flex items-center justify-between w-full px-[300px]">
                                <div className="w-[100%] text-right">
                                    <p className="text-sm">python</p>
                                </div>
                                <div className="w-[70%] text-center">
                                    <p className="text-sm">70%</p>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                                    <div className="bg-cyan-400 h-4 rounded-full" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between w-full px-[300px] mt-2">
                                <div className="w-[100%] text-right">
                                    <p className="text-sm">react</p>
                                </div>
                                <div className="w-[70%] text-center">
                                    <p className="text-sm">50%</p>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                                    <div className="bg-cyan-400 h-4 rounded-full" style={{ width: '50%' }}></div>
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

export default Skill