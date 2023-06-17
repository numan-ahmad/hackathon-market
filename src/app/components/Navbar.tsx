"use client";
import { RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const count = useSelector((state: RootState) => state.cart.totalCount)

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto pt-7 px-5">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  width={150}
                  height={150}
                  className="h-8"
                  src="https://hackathon-with-shadcn-ui.vercel.app/_next/image?url=%2FLogo.webp&w=256&q=75"
                  alt="Logo"
                  unoptimized={true} 
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/female"
                  className="pr-3 py-2 rounded-md text-sm font-medium"
                >
                  Female
                </Link>
                <Link
                  href="/male"
                  className="pr-3 py-2 rounded-md text-sm font-medium"
                >
                  Male
                </Link>
                <Link
                  href="/kids"
                  className="pr-3 py-2 rounded-md text-sm font-medium"
                >
                  Kids
                </Link>
                <Link
                  href="/products"
                  className="pr-3 py-2 rounded-md text-sm font-medium"
                >
                  All Products
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end hidden md:block">
            <div className="max-w-md w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                  defaultValue=""
                />
              </div>
            </div>
          </div>
          <Link
            className="relative hidden cursor-pointer rounded-full bg-gray-100 p-3 lg:flex"
            href="/cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
            <span className="absolute right-1 top-0 rounded-full bg-red-500 px-[6px] py-[2px] text-xs text-white">
              {count}
            </span>
          </Link>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className={`${expanded ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${expanded ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${expanded ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <div className="relative p-2 rounded-full flex justify-center">
          <Link
            className="relative mx-auto w-fit rounded-full bg-gray-100 p-3"
            href="/cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
            <span className="absolute right-1 top-0 rounded-full bg-red-500 px-[6px] py-[2px] text-xs text-white">
              {count}
            </span>
          </Link>
          </div>
          <Link
            href="/female"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Female
          </Link>
          <Link
            href="/male"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Male
          </Link>
          <Link
            href="/kids"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Kids
          </Link>
          <Link
            href="/products"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            All Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
