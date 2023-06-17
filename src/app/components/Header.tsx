import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex w-full flex-row items-start space-x-10 mt-5">
      <div className="flex flex-col space-y-10 lg:basis-5/12">
        <p className="mt-10 w-fit rounded-lg bg-blue-100 px-6 py-2 font-semibold text-blue-900">
          Sale 70%
        </p>
        <h1 className="text-5xl font-bold tracking-wide text-[#212121]">
          An Industrial Take on Streetwear
        </h1>
        <p className="w-[75%] text-gray-600">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Link className="cursor-pointer" href="/products">
          <button className="items-center justify-center rounded-md text-sm font-medium text-white py-2 inline-flex h-10 w-auto space-x-2 bg-[#212121] px-8 focus-visible:bg-[#212121] sm:w-[50%] lg:h-20 lg:w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
            <p className="my-5 inline-flex flex-row items-center justify-center space-x-1 lg:flex-col lg:space-x-0 2xl:flex-row 2xl:space-x-1 color">
              <span>Start</span>
              <span>Shoping</span>
            </p>
          </button>
        </Link>
        <div className="flex flex-wrap items-center justify-around gap-4">
          <Image
            alt="Image"
            src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75"
            width="100"
            height="35"
            unoptimized={true} 
          />
          <Image
            alt="Image"
            src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.247cd605.png&w=128&q=75"
            width="100"
            height="35"
            unoptimized={true} 
          />
          <Image
            alt="Image"
            src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=128&q=75"
            width="100"
            height="35"
            unoptimized={true} 
          />
          <Image
            alt="Image"
            src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.0489f1fc.png&w=128&q=75"
            width="100"
            height="35"
            unoptimized={true} 
          />
        </div>
      </div>
      <div className="hidden basis-7/12 justify-end lg:flex">
        <div className="h-[575px] w-[575px] overflow-visible rounded-full bg-[#ffece3]">
          <Image
            alt="header image"
            src="https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.a3d3ccd9.png&w=750&q=75"
            width="650"
            height="650"
            unoptimized={true} 
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
