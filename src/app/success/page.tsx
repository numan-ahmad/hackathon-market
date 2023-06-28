"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  useEffect(() => {
    const deleteAllProduct = async () => {
        try {
            await fetch(`/api/cart`, {
              method: "DELETE",
            });
        } catch(err) {
            console.log('faild to delete')
        }
    }
    deleteAllProduct();
  }, []);
  return (
    <>
      <Navbar />
      <div className="pt-6 mx-auto">
        <div className="relative">
          <div className="flex flex-col items-center justify-center py-10">
            <h3 className="mb-2 px-5 text-center text-3xl font-bold tracking-normal text-[#212121] sm:mb-4 sm:text-4xl">
              Successfully Purchased
            </h3>
          </div>
          <div className="absolute inset-0 -z-50 flex items-center justify-center">
            <div className="text-[54px] font-bold text-gray-200 sm:text-8xl sm:font-extrabold">
              Purchased
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
