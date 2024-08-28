"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../../../redux/cartSlice";
import { Item } from "../Utils/CardsList";

interface Props {
  item: Item;
  onDelete: (id: string) => void; // Add this prop for handling deletion
}

const WishItems: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(removeFromWishlist(item.id));
  };

  return (
    <>
      <Link href={`/details/${item.slug}`}>
        <div className="relative h-96 max-w-sm overflow-hidden rounded-lg border-2 border-blue-500  shadow">
          {/* Delete button */}
          <button
            onClick={handleDelete}
            className="absolute right-2 top-2 z-10 rounded-full bg-blue-300 p-2 text-white hover:bg-blue-500 focus:outline-none"
            aria-label="Delete"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <Image
            className="rounded-t-lg"
            src={item.img}
            alt={item.title}
            width={700}
            height={500}
            layout="responsive"
            objectFit="cover"
          />

          <div className="p-5">
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {item.title}
            </h4>
            <h6 className="text-2xl font-bold tracking-tight text-gray-900">
              ₹{item.price}
            </h6>
            <p className="font-normal text-gray-700">{item.address}</p>
            <hr className="border-1 border-blue-500"></hr>{" "}
            <div className="flex flex-row">
              <h6 className="font-normal text-gray-700">{item.size}</h6>
              <p className="ml-2 font-normal text-gray-700">
                {item.phoneNumber}
              </p>
            </div>
            <hr className="border-1 border-blue-500"></hr>
          </div>
        </div>
      </Link>
    </>
  );
};

export default WishItems;
