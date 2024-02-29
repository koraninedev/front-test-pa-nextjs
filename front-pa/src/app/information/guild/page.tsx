import React from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer';
import { RxCrossCircled } from "react-icons/rx";

function Guild() {
  return (
    <main className="pb-16">
        <Navbar />
        <div className="container mx-auto text-sm">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full my-12">
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">GUILD INFORMATION UPDATE</div>
                    <div className="pt-5 text-center">
                        <button className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white text-cyan-400 font-bold py-2 px-4 rounded-full">
                            ADD GUILD
                        </button>
                        <div className="mt-10 grid grid-cols-5 gap-5 px-48">
                            <div className="flex">
                                <button className="flex w-full justify-between items-center bg-cyan-400 border-2 border-cyan-400 text-white hover:bg-white hover:text-cyan-400 hover:border-cyan-400 py-0.5 px-3 rounded-full">
                                    <span className="mx-auto text-sm">K-POP</span>
                                    <RxCrossCircled className="ml-auto" />
                                </button>
                            </div>
                            <div className="flex">
                                <button className="flex w-full justify-between items-center bg-cyan-400 border-2 border-cyan-400 text-white hover:bg-white hover:text-cyan-400 hover:border-cyan-400 py-0.5 px-3 rounded-full">
                                    <span className="mx-auto text-sm">K-POP</span>
                                    <RxCrossCircled className="ml-auto" />
                                </button>
                            </div>
                            <div className="flex">
                                <button className="flex w-full justify-between items-center bg-cyan-400 border-2 border-cyan-400 text-white hover:bg-white hover:text-cyan-400 hover:border-cyan-400 py-0.5 px-3 rounded-full">
                                    <span className="mx-auto text-sm">K-POP</span>
                                    <RxCrossCircled className="ml-auto" />
                                </button>
                            </div>
                            <div className="flex">
                                <button className="flex w-full justify-between items-center bg-cyan-400 border-2 border-cyan-400 text-white hover:bg-white hover:text-cyan-400 hover:border-cyan-400 py-0.5 px-3 rounded-full">
                                    <span className="mx-auto text-sm">K-POP</span>
                                    <RxCrossCircled className="ml-auto" />
                                </button>
                            </div>
                            <div className="flex">
                                <button className="flex w-full justify-between items-center bg-cyan-400 border-2 border-cyan-400 text-white hover:bg-white hover:text-cyan-400 hover:border-cyan-400 py-0.5 px-3 rounded-full">
                                    <span className="mx-auto text-sm">K-POP</span>
                                    <RxCrossCircled className="ml-auto" />
                                </button>
                            </div>
                            <div className="flex">
                                <button className="flex w-full justify-between items-center bg-cyan-400 border-2 border-cyan-400 text-white hover:bg-white hover:text-cyan-400 hover:border-cyan-400 py-0.5 px-3 rounded-full">
                                    <span className="mx-auto text-sm">K-POP</span>
                                    <RxCrossCircled className="ml-auto" />
                                </button>
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

export default Guild