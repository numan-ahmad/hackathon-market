"use client";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
import toast from "react-hot-toast";
import { client } from "@/lib/sanityClient";
import urlFor from "@/helper/imageUrl";
import React, { Suspense, useEffect, useState } from "react";

const getProductDetail = async (id: number) => {
  const res = await client.fetch(`*[_type== 'products' && _id=='${id}'][0]`);
  return res;
};

const CartDetails = React.memo(({ productId }: { productId: number }) => {
  const [quality, setQuality] = useState(1);
  const [data, setData] = useState<any>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProductDetail(productId);
        setData(res);
        console.log(res, "dasgjhdgasdghasjdajh");
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, [productId]);

  const addToCart = () => {
    toast.success("Successfully added!");
    dispatch(cartActions.addTocart({ quantity: 1 }));
  };

  const pluseQuality = () => {
    setQuality(quality + 1);
  };

  const minesQuality = () => {
    if (quality > 1) {
      setQuality(quality - 1);
    }
  };

  return (
    <div className="mx-auto flex max-w-[1560px] flex-wrap justify-center gap-5 rounded-xl bg-[#f3f3f35d] px-5 py-12 sm:px-10 md:px-16 lg:px-20">
      <Suspense fallback={<h1>🌀 Loading...</h1>}>
        {data && (
          <>
            <Suspense fallback={<h1>🌀 Loading...</h1>}>
              <div className="flex w-full flex-col items-start space-y-8 md:flex-row md:space-x-7 md:space-y-0 lg:space-x-10">
                <div className="hidden w-full custom1:block md:hidden">
                  <div className="flex w-full flex-col items-start justify-start">
                    <p className="text-2xl lg:text-3xl font-normal text-[#212121]">
                      {data?.title}
                    </p>
                    <p className="text-xl font-semibold text-gray-400">Dress</p>
                  </div>
                </div>
                <div className="w-full basis-8/12">
                  <div className="flex w-full space-x-10 justify-between">
                    <div className="flex flex-col space-y-4 min-w-[50px] custom1:min-w-[80px] sm:min-w-[100px]">
                      <img
                        alt="product image"
                        width="100"
                        height="100"
                        className="cursor-pointer object-cover w-[50px] h-auto custom1:min-w-[80px] sm:min-w-[100px] bg-blue-100"
                        src="https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2F678c1dd51d26380191c9eef7f59e852522491f78-134x143.png%3Fw%3D700&w=750&q=75"
                      />
                      <img
                        alt="product image"
                        width="100"
                        height="100"
                        className="cursor-pointer object-cover w-[50px] h-auto custom1:min-w-[80px] sm:min-w-[100px] bg-blue-100"
                        src="https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2F678c1dd51d26380191c9eef7f59e852522491f78-134x143.png%3Fw%3D700&w=750&q=75"
                      />
                      <img
                        alt="product image"
                        width="100"
                        height="100"
                        className="cursor-pointer object-cover w-[50px] h-auto custom1:min-w-[80px] sm:min-w-[100px] bg-blue-100"
                        src="https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2F678c1dd51d26380191c9eef7f59e852522491f78-134x143.png%3Fw%3D700&w=750&q=75"
                      />
                      <img
                        alt="product image"
                        width="100"
                        height="100"
                        className="cursor-pointer object-cover w-[50px] h-auto custom1:min-w-[80px] sm:min-w-[100px] bg-blue-100"
                        src="https://hackathon-dine-market.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzwnaaffj%2Fproduction%2F678c1dd51d26380191c9eef7f59e852522491f78-134x143.png%3Fw%3D700&w=750&q=75"
                      />
                    </div>
                    <div className="overflow-hidden">
                      <img
                        alt="product image"
                        width="600"
                        height="500"
                        className="object-cover rounded-xl bg-blue-100"
                        src={urlFor(data.image).url()}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full basis-full space-y-12 md:basis-4/12">
                  <div className="block custom1:hidden md:block md:pt-16">
                    <div className="flex w-full flex-col items-start justify-start">
                      <p className="text-2xl lg:text-3xl font-normal text-[#212121]">
                        {data.title}
                      </p>
                      <p className="text-xl font-semibold text-gray-400">
                        Dress
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-8 text-[#212121]">
                    <div className="flex flex-col space-y-3">
                      <p className="text-sm font-semibold">SELECT SIZE</p>
                      <div className="flex flex-wrap gap-5">
                        <p className="w-10 cursor-pointer rounded-full p-2 text-center bg-gray-200">
                          XS
                        </p>
                        <p className="w-10 cursor-pointer rounded-full p-2 text-center bg-gray-200">
                          S
                        </p>
                        <p className="w-10 cursor-pointer rounded-full p-2 text-center bg-[#212121] text-white">
                          M
                        </p>
                        <p className="w-10 cursor-pointer rounded-full p-2 text-center bg-gray-200">
                          L
                        </p>
                        <p className="w-10 cursor-pointer rounded-full p-2 text-center bg-gray-200">
                          XL
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-5">
                      <p className="text-sm font-semibold">Quantity</p>
                      <div className="inline-flex items-center justify-between space-x-3">
                        <span
                          className="w-fitt cursor-pointer rounded-full bg-gray-200 p-2 text-center"
                          onClick={minesQuality}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="gray"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-minus"
                          >
                            <line x1="5" x2="19" y1="12" y2="12"></line>
                          </svg>
                        </span>
                        <span className="w-10 text-center">{quality}</span>
                        <span
                          className="w-fitt cursor-pointer rounded-full bg-gray-200 p-2 text-center"
                          onClick={pluseQuality}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="gray"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-plus"
                          >
                            <line x1="12" x2="12" y1="5" y2="19"></line>
                            <line x1="5" x2="19" y1="12" y2="12"></line>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-5">
                      <p className="text-sm font-semibold">Total :</p>
                      <p className="text-lg font-semibold">$545.00</p>
                    </div>
                    <div className="flex items-center space-x-5">
                      <button
                        className="items-center justify-center rounded-md text-sm font-medium text-white hover:bg-primary/90 h-10 w-fitt inline-flex space-x-2 bg-[#212121] px-8 py-4 focus-visible:bg-[#212121] cursor-pointer"
                        onClick={addToCart}
                      >
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
                        <span className="whitespace-nowrap text-white">
                          Add to Cart
                        </span>
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </Suspense>
            <div className="z-10 mt-8 flex w-full flex-col items-start space-y-8 bg-white px-8 py-16 md:p-16">
              <div className="relative mb-6 w-full items-start sm:mb-8">
                <p className="text-2xl font-bold">Product Information</p>
                <div className="absolute inset-0 -z-50 flex items-center justify-start">
                  <div className="text-[45px] font-bold text-gray-100 custom1:text-[70px] sm:text-8xl sm:font-extrabold">
                    Overview
                  </div>
                </div>
              </div>
              <div className="w-full border-[1px]"></div>
              <div className="flex w-full flex-col space-y-8 sm:flex-row sm:justify-start sm:space-x-16 sm:space-y-0">
                <p className="whitespace-nowrap font-semibold text-gray-700 md:basis-2/6">
                  PRODUCT DETAILS
                </p>
                <div className="flex-col space-y-4 md:basis-4/6">
                  <p className="text-justify tracking-wider text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p className="text-justify tracking-wider text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col space-y-8 sm:flex-row sm:justify-start sm:space-x-16 sm:space-y-0">
                <p className="whitespace-nowrap font-semibold text-gray-700 md:basis-2/6">
                  PRODUCT CARE
                </p>
                <ul className="flex-col space-y-2 md:basis-4/6">
                  <li className="flex text-justify font-semibold tracking-wider text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-dot"
                    >
                      <circle cx="12.1" cy="12.1" r="1"></circle>
                    </svg>
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="flex text-justify font-semibold tracking-wider text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-dot"
                    >
                      <circle cx="12.1" cy="12.1" r="1"></circle>
                    </svg>
                    consectetur adipiscing elit
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </Suspense>
    </div>
  );
});

export default CartDetails;
