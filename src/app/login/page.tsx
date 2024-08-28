import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-grow px-4 py-8">
        <div className="mx-auto mt-8 max-w-2xl">
          <h1 className="mb-8 text-center text-3xl font-bold">Login</h1>

          <div className="space-y-6">
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

            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-row space-x-1 md:space-x-40">
                <Link href="/signup" className="text-sm text-blue-700">
                  Dont have an account? Signup
                </Link>
                <Link href="" className="text-sm text-blue-700">
                  {" "}
                  Forgot Password?
                </Link>
              </div>

              <button className="mt-4 w-2/3 rounded-xl bg-blue-600 py-2 text-lg font-semibold text-white hover:bg-blue-700 md:py-3">
                Login
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
