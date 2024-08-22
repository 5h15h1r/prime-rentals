"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Item, property } from "@/app/Utils/CardsList";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Details = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [details, setDetails] = useState<Item | null>(null);

  useEffect(() => {
    const foundProduct = property.find((item) => item.slug === slug);

    if (foundProduct) {
      setDetails(foundProduct);
    } else {
      console.log("Product not found");
    }
  }, [slug]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative h-full w-full rounded-lg bg-white bg-opacity-20 p-6 shadow-xl shadow-blue-200 backdrop-blur-xl transition-all duration-300 ease-in-out hover:max-w-4xl md:h-auto md:max-w-3xl">
          <img
            src={details.img}
            alt={details.title}
            className="mb-4 h-64 w-full rounded-t-lg object-cover md:h-96"
          />
          <div className="p-4">
            <h2 className="mb-2 text-2xl font-bold text-blue-900">
              {details.title}
            </h2>
            <p className="mb-4 text-blue-700">{details.description}</p>
            <div className="space-y-2 text-blue-900">
              <p className="text-lg font-semibold">Price: ₹{details.price}</p>
              <p className="text-base">Address: {details.address}</p>
              <p className="text-base">Size: {details.size}</p>
              <p className="text-base">Contact: {details.phoneNumber}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Details;
