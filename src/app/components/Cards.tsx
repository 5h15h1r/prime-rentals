import Image from "next/image";
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
        <div className="relative h-96 max-w-sm overflow-hidden rounded-lg border-2 border-blue-500 bg-white shadow">
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

          <div className="h-48">
            <Image
              className="rounded-t-lg object-cover"
              src={item.img}
              alt={item.title}
              width={700}
              height={500}
              layout="responsive"
            />
          </div>

          <div className="flex h-48 flex-col justify-between p-5">
            <div>
              <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {item.title}
              </h4>
              <h6 className="text-2xl font-bold tracking-tight text-gray-900">
                ₹{item.price}
              </h6>
              <p className="font-normal text-gray-700">{item.address}</p>
            </div>
            <div>
              <hr className="border-1 border-blue-500"></hr>
              <div className="flex flex-row justify-between">
                <h6 className="font-normal text-gray-700">{item.size}</h6>
                <p className="ml-2 font-normal text-gray-700">
                  {item.phoneNumber}
                </p>
              </div>
              <hr className="border-1 border-blue-500"></hr>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Cards;
