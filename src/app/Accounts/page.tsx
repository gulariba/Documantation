import React from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import AboveFooter from "../Components/Footer";

const AccountPage = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={"/Spic1.png"}
          alt="pic1"
          width={1440}
          height={316}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <Image
            src={"/Spic2.png"}
            alt="pic2"
            width={77}
            height={77}
            className="w-[10%] md:w-[7%] lg:w-[77px] h-auto"
          />
          <p className="font-medium text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug sm:leading-tight md:leading-snug lg:leading-tight text-black">
            My Account
          </p>
          <div className="text-sm sm:text-base text-gray-600 flex items-center space-x-1">
            <p>Home</p>
            <FaChevronRight className="text-gray-800" />
            <p>My Account</p>
          </div>
        </div>
      </div>

      {/* Login & Register Section */}
      <section className="py-16 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-32 bg-[#FBEBB5]">
        <div className="flex flex-wrap justify-center gap-12">
          {/* Log In Form */}
          <div className="bg-white p-6 sm:p-8 rounded-md w-full max-w-md shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">Log In</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm sm:text-base font-normal"
                >
                  Username or email address
                </label>
                <input
                  id="username"
                  type="text"
                  className="w-full border rounded-md p-3 sm:p-4 text-sm sm:text-base font-normal"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm sm:text-base font-normal"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full border rounded-md p-3 sm:p-4 text-sm sm:text-base font-normal"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" className="w-4 h-4" />
                <label htmlFor="remember" className="text-sm sm:text-base">
                  Remember me
                </label>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <button className="w-full md:w-auto px-8 py-3 bg-white text-black border text-base sm:text-lg font-medium rounded-lg">
                  Log In
                </button>
                <p className="text-sm sm:text-base mt-3 md:mt-0">
                  <a href="#" className="text-gray-500">
                    Lost Your Password?
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Register Form */}
          <div className="bg-white p-6 sm:p-8 rounded-md w-full max-w-md shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">Register</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm sm:text-base font-normal"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border rounded-md p-3 sm:p-4 text-sm sm:text-base font-normal"
                />
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Personal data will be used to support your experience throughout
                this website and for other purposes described in our{" "}
                <a href="#" className="text-blue-500 underline">
                  privacy policy.
                </a>
              </p>
              <button className="w-full md:w-auto px-8 py-3 bg-white text-black border text-base sm:text-lg font-medium rounded-lg">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>

      <AboveFooter />
    </>
  );
};

export default AccountPage;