import { client } from "@/lib/sanityClient";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import urlFor from "@/helper/imageUrl";
import Link from "next/link";
import Image from "next/image";

const getAllProducts = async () => {
  const res = await client.fetch("*[_type== 'products' && gender == 'Female']");
  return res;
};
export default async function Home() {
  const data = await getAllProducts();

  return (
    <>
      <Navbar />
      <div className="mx-auto flex max-w-[1560px] flex-wrap justify-center gap-5 px-5 py-12 sm:px-10 md:px-16 lg:px-20">
        {data.length &&
          data.map((data: any, index:number) => (
            <Link key={index} className="z-20 transform-gpu cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110 md:block" href={`/products/${data._id}`}>
              <div>
                <div>
                  <Image
                    alt="product"
                    width="600"
                    height="600"
                    className="h-[291px] w-[275px] object-cover bg-blue-100"
                    unoptimized={true} 
                    src={urlFor(data.image).url()}                  
                  />
                </div>
                <h2 className="mt-2 text-lg font-semibold">{data.title}</h2>
                <h3 className="mt-1 text-md font-semibold text-gray-500">
                  {data.description}
                </h3>
                <h4 className="mt-2 text-lg font-semibold">${data.price}</h4>
              </div>
            </Link>
          ))}
      </div>
      <Footer />
    </>
  );
}
