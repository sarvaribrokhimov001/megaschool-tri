"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { title: "Home", href: "#" },
    { title: "About", href: "#about" },
    { title: "Courses", href: "#courses" },
    { title: "Teachers", href: "#teachers" },
    { title: "Results", href: "#results" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 border-3 border-secondary shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex justify-center items-center gap-5">
          <Image src="/images/megaschool_logo.png" alt="Mega School" width={60} height={60} />
          <h1 className="text-3xl font-bold text-secondary cursor-pointer"> MegaSchool </h1>
        </div>
      
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="hover:text-gray-700 w-25 font-bold duration-300 text-secondary text-2xl transition"> {item.title} </Link>
            </li>
          ))}
        </ul>

        <button className="hidden md:block bg-secondary text-gray-900 font-bold px-5 py-2 rounded-lg hover:bg-gray-700 hover:text-secondary duration-300"> Register </button>
        <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}> ☰ </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col p-5 gap-4">
            {links.map((item) => (
              <li key={item.title}>
                <a href={item.href} onClick={() => setMenuOpen(false)} className="block hover:text-blue-600"> {item.title} </a>
              </li>
            ))}

            <button className="bg-secondary font-bold text-primary py-2 rounded-lg"> Register </button>
          </ul>
        </div>
      )}
    </nav>
  );
}