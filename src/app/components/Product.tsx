"use client";

import urlFor from "@/helper/imageUrl";
import { cartActions } from "@/store/slice/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Product({ data }: any) {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCardProducts = async () => {
      try {
        const response = await fetch("/api/cart", {
          method: "GET",
        });
        if (response.ok) {
          const cartResponse = await response.json();
          console.log(cartResponse.res, 'dsadasdas')
          const filteredArray =
            data.length &&
            data.filter((item: any) =>
              cartResponse.res.some(
                (filterItem: any) => filterItem.product_id === item._id
              )
            );
          dispatch(cartActions.addItems({ filteredArray }));
        } else {
          console.error("Request failed with status:", response);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getCardProducts();
  }, []);
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-10 pt-6">
      <p className="text-center text-3xl font-bold text-[##212121]">
        Check What We Have
      </p>
      <div className="mx-auto flex max-w-[1560px] flex-wrap justify-center gap-5 px-5 py-12 sm:px-10 md:px-16 lg:px-20">
        {data.length &&
          data.slice(0, 3).map((valu: any, index: number) => (
            <Link
              className="z-20 transform-gpu cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110 md:block"
              key={index}
              href={`/products/${valu._id}`}
            >
              <div>
                <div>
                  <Image
                    alt="product"
                    width="600"
                    height="600"
                    className="h-[344px] w-[325px] object-cover bg-blue-100"
                    src={urlFor(valu.image).url()}
                    unoptimized={true}
                  />
                </div>
                <h2 className="mt-2 text-lg font-semibold">{valu.title}</h2>
                <h4 className="mt-2 text-lg font-semibold">${valu.price}</h4>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
