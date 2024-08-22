"use client";

import Link from "next/link";
import React from "react";
import { Item } from "../Utils/CardsList";

interface Props {
  item: Item;
}

const WishItems: React.FC<Props> = ({ item }) => {
  return (
    <>
      <Link href={`/details/${item.slug}`}>
        <div className="relative max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <img className="rounded-t-lg" src={item.img} alt="" />

          <div className="p-5">
            <a href="#">
              <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h4>
              <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                ₹{item.price}
              </h6>
            </a>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.address}
            </p>
            <div className="flex flex-row">
              <h6 className="font-normal text-gray-700 dark:text-gray-400">
                {item.size}
              </h6>
              <p className="ml-2 font-normal text-gray-700 dark:text-gray-400">
                {item.phoneNumber}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default WishItems;
