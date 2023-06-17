import CartDetails from "@/app/components/CartDetails";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { client } from "@/lib/sanityClient";

const getProductDetail = async (id: number) => {
  const res = await client.fetch(`*[_type== 'products' && _id=='${id}'][0]`);
  return res;
};
export default async  function ProductDetails({ params }: any) {
  const res = await getProductDetail(params.productName);
  return (
    <>
      <Navbar />
      <div className="mx-auto flex max-w-[1560px] flex-wrap justify-center gap-5 px-5 py-12 sm:px-10 md:px-16 lg:px-20">
        <CartDetails product={res} />
      </div>

      <Footer />
    </>
  );
}
