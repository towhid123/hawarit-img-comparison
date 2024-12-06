import React from 'react';


import Image from 'next/image';
import logo from "../data/logo1.png";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className=" mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-lg font-bold" >

          <Image
            slot="first"
            src={logo}
            alt="Before Image"
            // layout="responsive"
            // layout="intrinsic"
            width={120}
            height={40}
            className="object-contain"
          // layout="fill" // Use 'fill' for full coverage of the parent
          // className="rounded-lg object-cover"
          />

        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center ">
          AI Cloud Shadow Removal: Input & Output Comparison
        </nav>

        {/* User Icon */}
        <div className="hidden md:flex items-center">

        </div>


        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center text-white hover:text-gray-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}