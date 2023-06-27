"use client";
import urlFor from "@/helper/imageUrl";
import getStripePromise from "@/lib/stripe";
import { RootState } from "@/store/store";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";

const CartOption = () => {
  const dispatch = useDispatch();

  const handlecheckout = async () => {
    const stripe = await getStripePromise();
    const products = [
      {
        product: 1,
        name: "shirt",
        price: 440,
        quantity: 3,
      },
    ];
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(products),
    });
    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };
  const removeProduct = async (id: string) => {
    const res = await fetch(`/api/cart?id=${id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    dispatch(cartActions.removeFromCart({ id }));
    toast.success("Successfully removed!");
  };
  const count = useSelector((state: RootState) => state.cart.totalCount);
  const productStore = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="mx-auto mt-6 flex max-w-[1560px] flex-col space-y-12 px-5 sm:px-10 md:px-16 lg:px-20">
      <div className="text-left text-3xl font-bold text-[#212121]">
        Shopping Cart
      </div>
      {count > 0 && productStore.length ? (
        <div className="flex flex-col space-y-10 lg:flex-row lg:justify-between lg:space-x-10 lg:space-y-0 xl:space-x-14">
          <div className="basis-full flex-col space-y-5 lg:basis-4/5 xl:basis-2/3">
            {productStore.length &&
              productStore.map((item: any, index: number) => (
                <div
                  className="flex flex-col space-y-10 rounded-md bg-gray-50 p-5 sm:flex-row sm:items-stretch sm:space-x-10 sm:space-y-0"
                  key={index}
                >
                  <div className="flex flex-row justify-between sm:basis-1/3">
                    <div className="w-fit overflow-hidden rounded-xl bg-blue-100">
                      <Image
                        alt=""
                        width="200"
                        height="200"
                        unoptimized={true}
                        className="h-[133px] w-[125px] object-cover custom1:h-[160px] custom1:w-[150px] sm:h-[187px] sm:w-[175px]"
                        src={urlFor(item.image).url()}
                      />
                    </div>
                    <div className="inline-flex flex-col items-end justify-between sm:hidden">
                      <button className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trash2"
                        >
                          <path d="M3 6h18"></path>
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                          <line x1="10" x2="10" y1="11" y2="17"></line>
                          <line x1="14" x2="14" y1="11" y2="17"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-3 sm:basis-2/3 sm:justify-between sm:space-y-0">
                    <div className="text-xl font-medium sm:flex sm:items-center sm:justify-between sm:space-x-5">
                      <span> {item?.title} </span>
                      <button
                        className="hidden sm:block cursor-pointer"
                        onClick={() => removeProduct(item?._id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trash2"
                        >
                          <path d="M3 6h18"></path>
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                          <line x1="10" x2="10" y1="11" y2="17"></line>
                          <line x1="14" x2="14" y1="11" y2="17"></line>
                        </svg>
                      </button>
                    </div>
                    <p className="inline-flex space-x-5 text-base font-semibold text-[#666]">
                      <span>Sweater</span>
                      <span>(M)</span>
                    </p>
                    <p className="text-base font-semibold">
                      Delivery Estimation
                    </p>
                    <div className="h-[26px] text-base font-semibold text-[#ffc700] sm:flex sm:items-center sm:justify-between sm:space-x-5">
                      <span>5 Working Days</span>
                    </div>
                    <p className="inline-flex items-center justify-between">
                      <span className="text-lg font-bold">$ {item?.price}</span>
                      {/* <span className="inline-flex items-center justify-between space-x-1">
                      <span className="w-fitt cursor-pointer rounded-full bg-gray-200 p-2 text-center">
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
                      <span className="w-10 text-center">1</span>
                      <span className="w-fitt cursor-pointer rounded-full bg-gray-200 p-2 text-center">
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
                    </span> */}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          <div className="basis-full lg:basis-1/5 xl:basis-1/3">
            <div className="flex flex-col items-center justify-center space-y-7 rounded-md bg-gray-100 p-5 text-[#181818]">
              <p className="w-full text-xl font-bold">Order Summary</p>
              <p className="inline-flex w-full justify-between text-base font-normal">
                <span>Quantity</span>
                <span>{count} Product</span>
              </p>
              <p className="inline-flex w-full justify-between text-base font-normal">
                <span>Sub Total</span>
                <span>$195</span>
              </p>
              <button
                className="w-full whitespace-nowrap rounded-md bg-[#212121] px-3 py-2 text-white cursor-pointer"
                onClick={handlecheckout}
              >
                Process to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-bag"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" x2="21" y1="6" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <p className="text-2xl font-bold text-[#212121] mt-6">
            Your shopping bag is empty
          </p>
        </div>
      )}
    </div>
  );
};

export default CartOption;
