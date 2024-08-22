"use client";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex space-x-2 sm:space-x-4">
          <a href="#" className="text-xl text-green-500 sm:text-2xl md:hover:mb-1">
            <FaWhatsapp />
          </a>
          <a href="#" className="text-xl text-pink-600 sm:text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-xl text-blue-500 sm:text-2xl">
            <FaLinkedin />
          </a>
          <a href="#" className="text-xl text-sky-400 sm:text-2xl">
            <FaTwitter />
          </a>
        </div>
        <div className="flex space-x-2 text-sm text-white sm:space-x-4 sm:text-base">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            T&C
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
