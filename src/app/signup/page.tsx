import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />

      {/* Main content container */}
      <div className="flex flex-grow flex-col items-center justify-center px-4">
        <div className="mt-1 w-full max-w-2xl space-y-6">
          {/* Margin to push content down */}
          <h1 className="text-center text-3xl font-bold">Create Account</h1>
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              className="w-full rounded-xl border-2 border-black px-6 py-2 text-lg focus:border-blue-500 focus:outline-none md:py-3"
            />
          </div>
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-xl border-2 border-black px-6 py-2 text-lg focus:border-blue-500 focus:outline-none md:py-3"
            />
          </div>
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-xl border-2 border-black px-6 py-2 text-lg focus:border-blue-500 focus:outline-none md:py-3"
            />
          </div>
          <div className="relative">
            <label className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full rounded-xl border-2 border-black px-6 py-2 text-lg focus:border-blue-500 focus:outline-none md:py-3"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link href="/login" className="text-sm text-blue-700">
              Already have an account? Login
            </Link>
            <button className="mt-8 w-2/3 rounded-xl bg-blue-600 py-2 text-lg font-semibold text-white hover:bg-blue-700 md:py-3">
              Create Account
            </button>
          </div>
        </div>
      </div>
      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
};

export default SignUpPage;
