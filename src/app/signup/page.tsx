"use client";

import axios, { AxiosError } from "axios";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const SignUpPage = () => {
  const REGISTER_URL = "http://127.0.0.1:8000/api/register/";
  const [errormsg, setErrormsg] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [number, setNumber] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ username, email, password, number }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        },
      );
      console.log(response.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        setErrormsg(
          err.response?.data?.message ||
            "An error occurred during registration",
        );
      } else {
        setErrormsg("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />

      {/* Main content container */}
      <div className="flex flex-grow flex-col items-center justify-center px-4">
        <div className="mt-1 w-full max-w-2xl space-y-6">
          <h1 className="text-center text-3xl font-bold">Signup</h1>

          {errormsg && <p className="text-center text-red-500">{errormsg}</p>}

          <form
            onSubmit={handleSubmit}
            action={"http://127.0.0.1:8000/api/register/"}
            method="POST"
          >
            <div className="relative">
              <label className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                required
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border-2 border-black px-6 py-2 text-lg focus:border-blue-900 focus:outline-none md:py-3"
              />
            </div>
            <div className="relative mt-6">
              <label className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border-2 border-black px-6 py-2 text-lg focus:border-blue-900 focus:outline-none md:py-3"
              />
            </div>
            <div className="relative mt-6">
              <label className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                required
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border-2 border-black px-6 py-2 text-lg focus:border-blue-900 focus:outline-none md:py-3"
              />
            </div>
            <div className="relative mt-6">
              <label className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-600">
                Phone Number
              </label>
              <input
                type="tel"
                name="number"
                onChange={(e) => setNumber(e.target.value)}
                className="w-full rounded-xl border-2 border-black px-6 py-2 text-lg focus:border-blue-900 focus:outline-none md:py-3"
              />
            </div>
            <div className="mt-6 flex flex-col items-center justify-center">
              <Link href="/login" className="text-sm text-blue-700">
                Already have an account? Login
              </Link>
              <button
                type="submit"
                className="mt-8 w-2/3 rounded-xl bg-blue-900 py-2 text-lg font-semibold text-white hover:bg-blue-700 md:py-3"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
};

export default SignUpPage;
