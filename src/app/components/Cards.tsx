"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../../redux/cartSlice";
import { AppDispatch, IRootState } from "../../../redux/store";
import { Item } from "../Utils/CardsList";

interface Props {
  item: Item;
}

const Cards: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const cartitems = useSelector((state: IRootState) => state.cart.cartItems);
  useEffect(() => {
    // Check if the item is in the cartItems to set initial isFavorite state
    const isItemInWishlist = cartitems.some(
      (cartItem) => cartItem.item.id === item.id,
    );
    setIsFavorite(isItemInWishlist);
  }, [cartitems, item.id]);

  function handleToggleFavorite(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();

    if (isFavorite) {
      dispatch(removeFromWishlist(item.id));
    } else {
      dispatch(addToWishlist({ item }));
    }
    setIsFavorite(!isFavorite);
  }

  return (
    <>
      <Link href={`/details/${item.slug}`}>
        <div className="relative max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <button
            onClick={handleToggleFavorite}
            className="absolute right-2 top-2 z-10 transform transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-colors duration-300 ease-in-out ${
                isFavorite ? "fill-current text-red-500" : "text-transparent"
              }`}
              viewBox="0 0 20 20"
              fill="none"
              stroke="white" // Set stroke to white for the heart outline
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L10 18.364l5.682-5.682a4.5 4.5 0 00-6.364-6.364L10 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>

          <img className="rounded-t-lg" src={item.img} alt="" />

          <div className="p-5">
            <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h4>
            <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              ₹{item.price}
            </h6>

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

export default Cards;
