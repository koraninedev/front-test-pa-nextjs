import React from "react";
import Link from "next/link";
import Logo from "../../../public/next.svg";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-4">
          <div>
            <Link href="/">
              <Image src={Logo} width={100} height={100} alt="NestJS Logo" />
            </Link>
          </div>
          <ul className="flex">
            <li className="mx-3"><Link href="/">Home</Link></li>
            <li className="mx-3"><Link href="/information/user">User</Link></li>
            <li className="mx-3"><Link href="/information/contact">Contact</Link></li>
            <li className="mx-3"><Link href="/information/education">Education</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
