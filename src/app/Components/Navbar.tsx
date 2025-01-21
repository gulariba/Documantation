"use client";
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai"; 
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      <nav className="relative z-50 w-full h-[100px] bg-[#FBEBB5] flex flex-row justify-between items-center px-4 sm:px-8 py-4">
        {/* Hamburger Menu for Mobile */}
        <button
          className="text-black text-xl sm:hidden mr-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <TiThMenu />
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute sm:static top-20 right-0 w-full sm:w-auto bg-[#FBEBB5] sm:flex sm:flex-1 flex-col sm:flex-row items-center text-black text-[16px] font-[500] leading-[24px] z-50`}
        >
          {/* Links Section */}
          <div className="flex flex-col sm:flex-1 sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
            <Link
              href="/"
              className="text-black text-[14px] sm:text-[16px] font-[500] leading-[24px]"
            >
              Home
            </Link>
            <Link
              href="/Shop"
              className="text-black text-[14px] sm:text-[16px] font-[500] leading-[24px]"
            >
              Shop
            </Link>
            <Link
              href="/About"
              className="text-black text-[14px] sm:text-[16px] font-[500] leading-[24px]"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="text-black text-[14px] sm:text-[16px] font-[500] leading-[24px]"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex justify-center space-x-4 sm:space-x-6 text-[18px] sm:text-[20px] sm:mt-0 pr-4">
          <Link href="/Accounts">
            <div className="relative">
              <AiOutlineUser className="cursor-pointer text-lg sm:text-xl text-gray-700" />
              <span className="absolute top-0 right-0 text-gray-600 text-[10px] sm:text-xs font-semibold">!</span>
            </div>
          </Link>
          <FiSearch className="cursor-pointer text-lg sm:text-xl text-gray-700" />
          <FaRegHeart className="cursor-pointer text-lg sm:text-xl text-gray-700" />
          <IoCartOutline
            className="cursor-pointer text-lg sm:text-xl text-gray-700"
            onClick={() => setCartOpen(!cartOpen)}
          />
        </div>
      </nav>

      {/* Shopping Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[350px] bg-white shadow-lg transition-transform transform ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        {/* Cart Header */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="text-xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Cart Items */}
        <div className="w-full h-[406px] p-4 space-y-4 mt-5">
          {/* Example Product */}
          <div className="flex space-x-4 border-b pb-4 w-full">
            <div className="bg-[#FBEBB5] w-20 h-20 flex justify-center items-center rounded-lg sm:w-24 sm:h-24">
              <Image
                src="/pic8.png"
                alt="Product"
                width={300}
                height={300}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover"
              />
            </div>

            <div className="flex-1 px-4 py-2 space-y-2 h-20 flex flex-col justify-center items-start rounded-lg">
              <div className="w-full text-left">
                <h3 className="text-sm font-bold text-black sm:text-lg">
                  Asgaard Sofa
                </h3>
              </div>
              <div className="flex items-center justify-between w-full text-xs sm:text-sm text-gray-700 px-2 py-1 rounded-md gap-4">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">1 ×</span>
                  <span className="font-semibold text-[#B88E2F]">
                    Rs. 250,000
                  </span>
                </div>
                <button className="text-black bg-[#D9D9D9] hover:text-red-600 rounded-full px-3 py-1 text-sm">
                  &times;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Subtotal */}
        <div className="p-4">
          <div className="flex justify-between items-center text-sm font-medium">
            <span>Subtotal</span>
            <span className="text-[#B88E2F]">Rs. 250,000</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="p-4 flex justify-between space-x-2 border-t-[1px] border-[#D9D9D9]">
          <button className="w-1/2 py-2 bg-white text-sm font-medium border-[1px] border-black rounded-full hover:bg-black hover:text-white">
            View Cart
          </button>
          <Link href="/CheckOut">
            <button className="px-9 py-2 bg-white text-black border-[1px] border-black text-sm font-medium rounded-full hover:bg-black hover:text-white">
              Checkout
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setCartOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;