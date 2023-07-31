"use client";
import { useEffect } from "react";
import { cartActions } from "@/store/slice/cartSlice";
import { client } from "@/lib/sanityClient";

const getAllProducts = async () => {
  const res = await client.fetch("*[_type== 'products']");
  return res;
};
const useCartData =(dispatch: any) => {
  useEffect(() => {
    const getCardProducts = async () => {
      try {
        const response = await fetch("/api/cart", {
          method: "GET",
        });
        const data = await getAllProducts();
        if (response.ok) {
          const cartResponse = await response.json();
          const totalQuantity = cartResponse.res.reduce(
            (total: number, item: any) => total + item.quantity,
            0
          );
          const totalPrice = cartResponse.res.reduce(
            (total: number, item: any) => {
              const { quantity, price } = item;
              const itemPrice = quantity * price;
              return total + itemPrice;
            },
            0
          );
          console.log(totalQuantity, "dsadasdas");
          const filteredArray = data
            .filter((item: any) =>
              cartResponse.res.some(
                (filterItem: any) => filterItem.product_id === item._id
              )
            )
            .map((item: any) => {
              const matchingCartItem = cartResponse.res.find(
                (filterItem: any) => filterItem.product_id === item._id
              );
              return { ...item, quantity: matchingCartItem.quantity };
            });
          console.log(filteredArray, "dsadasdasdas");
          dispatch(
            cartActions.addItems({ filteredArray, totalQuantity, totalPrice })
          );
        } else {
          console.error("Request failed with status:", response);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getCardProducts();
  }, []);
};

export default useCartData;
