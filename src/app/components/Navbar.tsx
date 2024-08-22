import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex h-16 w-full items-center justify-between shadow-xl px-4 transition-all duration-300 ${
        isScrolling || isScrolled
          ? "bg-white bg-opacity-40"
          : "bg-white bg-opacity-60"
      }`}
      style={{
        backdropFilter: "blur(10px)", // Blur effect for glassmorphism
        border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border for the glass effect
        borderRadius: "10px",
      }}
    >
      <Link href={"/"}>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            width="32"
            viewBox="0 -960 960 960"
            fill="#1e3a8a"
          >
            <path d="M160-120v-375l-72 55-48-64 120-92v-124h80v63l240-183 440 336-48 63-72-54v375H160Zm80-80h200v-160h80v160h200v-356L480-739 240-556v356Zm-80-560q0-50 35-85t85-35q17 0 28.5-11.5T320-920h80q0 50-35 85t-85 35q-17 0-28.5 11.5T240-760h-80Zm80 560h480-480Z" />
          </svg>

          <p className="ml-1 text-xs font-bold text-blue-900 md:text-lg">
            Prime Rentals
          </p>
        </div>
      </Link>

      {/* Desktop menu items */}
      <div className="hidden md:flex md:items-center md:space-x-4">
        <Link href="/" className="text-base text-gray-600 hover:text-blue-900">
          Home
        </Link>
        <Link href="/" className="text-base text-gray-600 hover:text-blue-900">
          Rent
        </Link>
        <Link href="/" className="text-base text-gray-600 hover:text-blue-900">
          Contact
        </Link>
        <Link
          href="/cart"
          className="text-base text-gray-600 hover:text-blue-900"
        >
          Wishlist
        </Link>
        <Link
          href="/cart"
          className="text-base text-gray-600 hover:text-blue-900"
        >
          Post Property
        </Link>
      </div>

      {/* Login and Signup buttons */}
      <div className="flex items-center space-x-1 p-2 md:space-x-4">
        <button className="px-4 py-2 text-xs text-blue-900 hover:text-blue-700 md:text-base">
          Log-in
        </button>
        <button className="rounded bg-blue-900 px-4 py-1 text-xs text-white hover:border-2 hover:border-blue-900 hover:bg-white hover:text-blue-900 md:px-5 md:py-2 md:text-base">
          Sign-Up
        </button>
      </div>

      {/* Burger menu for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`absolute left-0 top-11 z-50 w-full overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Rest of the mobile menu content */}

        <div className="bg-white shadow-md">
          <div className="flex flex-col items-center space-y-2 py-4">
            <Link
              href="/"
              className="text-base text-gray-600 hover:text-blue-900"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-base text-gray-600 hover:text-blue-900"
            >
              Rent
            </Link>
            <Link
              href="#"
              className="text-base text-gray-600 hover:text-blue-900"
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className="text-base text-gray-600 hover:text-blue-900"
            >
              Wishlist
            </Link>
            <Link
              href="/"
              className="text-base text-gray-600 hover:text-blue-900"
            >
              Post Property
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
