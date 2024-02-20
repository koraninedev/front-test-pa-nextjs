'use client'
import React, { useState, useEffect } from "react";
//import Link from "next/link";
import Logo from "../../../public/next.svg";
import Image from "next/image";

function Navbar() {

    const [hideOnScroll, setHideOnScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setHideOnScroll(window.pageYOffset > 250);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`bg-white shadow-md fixed w-full z-10 ${hideOnScroll ? "opacity-0" : "opacity-100"} transition-opacity duration-250 top-0`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center p-4">
                    <div>
                        <a href="/">
                            <Image src={Logo} width={100} height={100} alt="NestJS Logo" />
                        </a>
                    </div>
                    <ul className="flex">
                        <li className="mx-3"><a href="/">Home</a></li>
                        <li className="mx-3"><a href="/information/user">User</a></li>
                        <li className="mx-3"><a href="/information/contact">Contact</a></li>
                        <li className="mx-3"><a href="/information/education">Education</a></li>
                    </ul>
                    </div>
            </div>
        </nav>
    );
}

export default Navbar;
