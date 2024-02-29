import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CoverImg from "../../assets/images/background-cover.png";

async function getUsers() {
    const res = await fetch('http://localhost:3333/api/user/1')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

async function getContacts() {
    const res = await fetch('http://localhost:3333/api/contact/1')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

async function getEducations() {
    const res = await fetch('http://localhost:3333/api/education/getbyuser/1')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

async function getExperience() {
    const res = await fetch('http://localhost:3333/api/experience/getbyuser/1')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

async function getSkill() {
    const res = await fetch('http://localhost:3333/api/skill/getbyuser/1')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

async function getInterests() {
    const res = await fetch('http://localhost:3333/api/interests/getbyuser/1')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

async function getGuild() {
    const res = await fetch('http://localhost:3333/api/guild/getbyuser/1')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}


export default async function Home() {

    const userData = await getUsers();
    const contactData = await getContacts();
    const EducationData = await getEducations();
    const ExperienceData = await getExperience();
    const SkillData = await getSkill();
    const InterestsData = await getInterests();
    const GuildData = await getGuild();

    return (
        <main className="pb-16">
        <Navbar />
        <div className="container mx-auto text-sm">
            <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full mt-24 mb-5">
            <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">USER INFORMATION</p>
                <div className="p-7">
                <form className="rounded-lg overflow-hidden shadow-lg bg-white w-full" action="">
                    <Image className="relative object-cover w-full" src={CoverImg} alt="Cover Image" height={300}/>
                    <div className="flex flex-wrap p-5">
                        <div className="absolute top-[380px] left-[320px]">
                            <div className="w-[300px] h-[300px] relative">
                                <div className="absolute inset-0 rounded-full bg-gray-400 border-solid border-8 border-white"></div>
                            </div>
                        </div>
                    <div className="w-[500px]"></div>
                        <div className="flex-1">
                            <div className="mb-5">
                                <p>USERNAME</p>
                                <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full bg-gray-200" type="text" value={userData.username} disabled/>
                            </div>
                            <div className="mb-5">
                            <p>FIRST NAME</p>
                            <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full bg-gray-200" type="text" value={userData.firstname} disabled/>
                            </div>
                            <div className="mb-5">
                            <p>POSITION</p>
                            <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full bg-gray-200" type="text" value={userData.position}  disabled/>
                            </div>
                            <div className="mb-5">
                            <p>TELEPHONE NUMBER</p>
                            <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full bg-gray-200" type="text" value={`+66${userData.telephonenumber}`} disabled/>
                            </div>
                        </div>
                        <div className="flex-1 ml-4">
                            <div className="mb-5">
                            <p>NICK NAME</p>
                            <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full bg-gray-200" type="text" value={userData.nickname}  disabled/>
                            </div>
                            <div className="mb-5">
                            <p>LAST NAME</p>
                            <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full bg-gray-200" type="text" value={userData.lastname} disabled/>
                            </div>
                            <div className="mb-5">
                            <p>NATIONALITY</p>
                            <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full bg-gray-200" type="text" value={userData.nationality}  disabled/>
                            </div>
                            <div className="mb-5">
                            <p>STARTING DATE</p>
                            <input className="border-solid border-2 border-gray-400 rounded-md py-1 px-3 w-full bg-gray-200" type="date" value={new Date(userData.startingdate).toISOString().split('T')[0]} disabled/>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
                
            <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full my-12">
            <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">CONTACT INFORMATION</p>
                <div className="pt-5 px-24">
                <form action="">
                        <div className="mb-5">
                            <p>ADDRESS</p>
                            <input className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 w-full bg-gray-200" type="text" value={contactData.address} disabled/>
                        </div>
                        <div className="flex space-x-12 justify-between mb-5">
                            <div className="w-full">
                                <p>SUB DISTRICT</p>
                                <select className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 w-full bg-gray-200" disabled>
                                    <option value="option1">{contactData.subdistrict}</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <p>DISTRICT</p>
                                <select className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 w-full bg-gray-200" disabled>
                                    <option value="option1">{contactData.district}</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <p>PROVINCE</p>
                                <select className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 w-full bg-gray-200" disabled>
                                    <option value="option1">{contactData.province}</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <p>PORTAL CODE</p>
                                <select className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 w-full bg-gray-200" disabled>
                                    <option value="option1">{contactData.portalcode}</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-between mb-5">
                            <div className="w-[300px]">
                                <p>FACEBOOK</p>
                                <input className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 w-full bg-gray-200" type="text" value={contactData.facebook} disabled/>
                            </div>
                            <div className="w-[300px]">
                                <p>LINE ID</p>
                                <input className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 w-full bg-gray-200" type="text" value={contactData.lineid} disabled/>
                            </div>
                            <div className="w-[300px]">
                                <p>INSTAGRAM</p>
                                <input className="border-solid border-2 border-gray-400 rounded-md my-2 py-1 px-3 w-full bg-gray-200" type="text" value={contactData.instagram} disabled/>
                            </div>
                        </div>
                </form>
                </div>
            </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full my-12">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">EDUCATIONAL INFORMATION</div>
                    <div className="pt-5 text-center">
                        {/* <button className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white text-cyan-400 font-bold py-2 px-4 rounded-full">
                            ADD EDUCATION
                        </button> */}
                    {EducationData.map((education: any) => (
                        <div className="flex flex-col mt-4 items-center">
                            <div className="relative flex flex-col items-center">
                                <div className="absolute h-full w-0.5 bg-gray-500" style={{ left: '28%' }}></div>
                                <div className="flex items-center w-full">
                                    <div className="bg-white px-2">
                                        <div className="text-sm font-semibold mr-2">{education.year}</div>
                                    </div>
                                    <div className="bg-white px-2">
                                        <div className="text-sm pl-10">{education.university}</div>
                                    </div>
                                    <div className="absolute bg-cyan-400 rounded-full" style={{ width: '10px', height: '10px', left: 'calc(28% - 4px)' }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full my-12">
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">EXPERIENCE INFORMATION</div>
                    <div className="pt-5 text-center">
                        {/* <button className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white text-cyan-400 font-bold py-2 px-4 rounded-full">
                            ADD EXPERIENCE
                        </button> */}
                        {ExperienceData.map((experience: any) => (
                            <div className="flex flex-col mt-4 items-center">
                                <div className="relative flex flex-col items-center">
                                    <div className="absolute h-full w-0.5 bg-gray-500" style={{ left: '25%' }}></div>
                                    <div className="flex items-center w-full">
                                        <div className="bg-white px-2">
                                            <div className="text-sm pl-24">{experience.experience}</div>
                                        </div>
                                        <div className="absolute bg-cyan-400 rounded-full" style={{ width: '10px', height: '10px', left: 'calc(25% - 4px)' }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full my-12">
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">SKILL INFORMATION</div>
                    <div className="pt-5 text-center">
                        {/* <button className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white text-cyan-400 font-bold py-2 px-4 rounded-full">
                            ADD SKILL
                        </button> */}
                        <div className="flex flex-col  mt-4 items-center">
                        {SkillData.map((skill: any) => (
                            <div className="flex items-center justify-between w-full px-[300px]">
                                <div className="w-[100%] text-right">
                                    <p className="text-sm">{skill.skill}</p>
                                </div>
                                <div className="w-[100%]">
                                    <p className="text-sm">{skill.percent}%</p>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                                    <div className="bg-cyan-400 h-4 rounded-full" style={{ width: `${skill.percent}%` }}></div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full my-12">
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">INTERESTS INFORMATION</div>
                    <div className="text-center mb-4">
                        {/* <button className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white text-cyan-400 font-bold py-2 px-4 rounded-full">
                            ADD INTERESTS
                        </button> */}
                        <div className="mt-10 grid grid-cols-5 gap-5 px-48">
                        {InterestsData.map((interest: any) => (
                            <div className="flex">
                                <button className="flex w-full justify-between items-center bg-cyan-400 border-2 border-cyan-400 text-white hover:bg-white hover:text-cyan-400 hover:border-cyan-400 py-0.5 px-3 rounded-full">
                                    <span className="mx-auto text-sm font-semibold">{interest.interest}</span>
                                    {/* <RxCrossCircled className="ml-auto" /> */}
                                </button>
                            </div>
                        ))} 
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full my-12">
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">GUILD INFORMATION</div>
                    <div className="text-center nb-4">
                        {/* <button className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white text-cyan-400 font-bold py-2 px-4 rounded-full">
                            ADD GUILD
                        </button> */}
                        <div className="mt-10 grid grid-cols-5 gap-5 px-48">
                        {GuildData.map((guild: any) => (
                            <div className="flex">
                                <button className="flex w-full justify-between items-center bg-cyan-400 border-2 border-cyan-400 text-white hover:bg-white hover:text-cyan-400 hover:border-cyan-400 py-0.5 px-3 rounded-full">
                                    <span className="mx-auto text-sm font-semibold">{guild.guild}</span>
                                    {/* <RxCrossCircled className="ml-auto" /> */}
                                </button>
                            </div>
                        ))} 
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Footer />
        </main>
    );
}
