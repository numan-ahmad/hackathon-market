import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Subcribe from "./components/Subcribe";
import Details from "./components/Details";
import Product from "./components/Product";
import { client } from "@/lib/sanityClient";
import Prromotions from "./components/Promotions";

const getAllProducts = async () => {
  const res = await client.fetch("*[_type== 'products']");
  return res;
};
export default async function Home() {
  const data = await getAllProducts();
  return (
    <>
      <Navbar />
      <div className="mx-auto flex max-w-[1560px] flex-col space-y-24 px-5 sm:px-10 md:px-16 lg:px-20">
        <Header />
        <Prromotions />
        <Product data={data} />
        <Details />
        <Subcribe />
      </div>
      <Footer />
    </>
  );
}
