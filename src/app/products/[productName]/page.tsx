import CartDetails from "@/app/components/CartDetails";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Suspense } from "react";

export default function ProductDetails({ params }: any) {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex max-w-[1560px] flex-wrap justify-center gap-5 px-5 py-12 sm:px-10 md:px-16 lg:px-20">
        <CartDetails productId={params.productName} />
      </div>

      <Footer />
    </>
  );
}
