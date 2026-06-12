import React, { useState } from "react";
import logo from "../assets/world-beauty-logo.png";

import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 relative bg-[#fce8e8] border-b border-[#F0D9D5]">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* Logo */}
        <img src={logo} alt="World Beauty" className="h-28 object-contain" />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 font-semibold">
          <a href="#" className="text-[#6B4F43] underline underline-offset-8">New Arrivals</a>
          <a href="#" className="text-[#4B3A3A]">Collections</a>
          <a href="#" className="text-[#4B3A3A]">About</a>
          <a href="#" className="text-[#4B3A3A]">Blogs</a>
          <a href="#" className="text-[#4B3A3A]">Contact</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Desktop icons */}
          <IoIosSearch size={24} className="hidden lg:block text-[#4B3A3A] cursor-pointer" />
          <button className="relative hidden lg:flex">
            <MdOutlineShoppingBag size={24} className="text-[#4B3A3A]" />
            <span className="absolute -top-2 -right-2 bg-[#6B4F43] text-white text-[10px] h-4 w-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          {/* Mobile icons — visible only below lg */}
          <div className="flex lg:hidden items-center gap-4">
            <IoIosSearch size={22} className="text-[#4B3A3A] cursor-pointer" />
            <div className="relative">
              <MdOutlineShoppingBag size={22} className="text-[#4B3A3A]" />
              <span className="absolute -top-2 -right-2 bg-[#6B4F43] text-white text-[10px] h-4 w-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
          </div>

          {/* Hamburger toggle */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen
              ? <HiX size={28} className="text-[#4B3A3A]" />
              : <HiOutlineMenuAlt3 size={28} className="text-[#4B3A3A]" />
            }
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#FFF8F8] border-t border-[#F0D9D5]">
          <div className="flex flex-col py-4">
            <a href="#" className="px-6 py-3 text-[#D18B8B] font-semibold">New Arrivals</a>
            <a href="#" className="px-6 py-3 text-[#4B3A3A]">Collections</a>
            <a href="#" className="px-6 py-3 text-[#4B3A3A]">About</a>
            <a href="#" className="px-6 py-3 text-[#4B3A3A]">Blogs</a>
            <a href="#" className="px-6 py-3 text-[#4B3A3A]">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;