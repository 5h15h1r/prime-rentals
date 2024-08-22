"use client";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { IRootState } from "../../../redux/store";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WishItems from "../components/WishItems";

const Cart = () => {
  const cartitems = useSelector((state: IRootState) => state.cart.cartItems);
  console.log(cartitems);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto flex-grow px-4 py-8">
        {cartitems.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            {cartitems.map((item) => (
              <WishItems key={item.item.id} item={item.item} />
            ))}
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <FaHeart className="mb-4 text-6xl text-red-400" />
            <h2 className="mb-2 text-2xl font-semibold text-gray-800">
              Your wishlist is empty
            </h2>
            <p className="mb-4 text-gray-600">
              Find something you love and add it to your wishlist!
            </p>
            <a
              href="/"
              className="rounded-full bg-blue-600 px-6 py-2 text-white transition duration-300 hover:bg-blue-700"
            >
              Explore Products
            </a>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
