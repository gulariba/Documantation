import React from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import { BiGridSmall } from "react-icons/bi";
import { BsViewList } from "react-icons/bs";
import AboveFooter from "../Components/Footer2";

const page = () => {
  const products = [
    { id: 1, name: "Trenton modular sofa", price: "Rs. 25,000.00", image: "/Spic3.png" },
    { id: 2, name: "Granite dining table with chair", price: "Rs. 25,000.00", image: "/Spic4.png" },
    { id: 3, name: "Outdoor bar table and stool", price: "Rs. 25,000.00", image: "/Spic5.png" },
    { id: 4, name: "Plain console with teak mirror", price: "Rs. 25,000.00", image: "/Spic6.png" },
    { id: 5, name: "Grain coffee table", price: "Rs. 25,000.00", image: "/Spic7.png" },
    { id: 6, name: "Kent coffee table", price: "Rs. 25,000.00", image: "/Spic8.png" },
    { id: 7, name: "Round coffee table_color 2", price: "Rs. 25,000.00", image: "/Spic9.png" },
    { id: 8, name: "Reclaimed teak coffee table", price: "Rs. 25,000.00", image: "/Spic11.png" },
    { id: 9, name: "Plain console_", price: "Rs. 25,000.00", image: "/Spic12.png" },
    { id: 10, name: "Reclaimed teak Sideboard", price: "Rs. 25,000.00", image: "/Spic13.png" },
    { id: 11, name: "SJP_0825", price: "Rs. 25,000.00", image: "/Spic14.png" },
    { id: 12, name: "Bella chair and table", price: "Rs. 25,000.00", image: "/Spic15.png" },
    { id: 13, name: "Granite square side table", price: "Rs. 25,000.00", image: "/Spic16.png" },
    { id: 14, name: "Asgaard sofa", price: "Rs. 25,000.00", image: "/Spic17.png" },
    { id: 15, name: "Maya sofa three seater", price: "Rs. 25,000.00", image: "/Spic18.png" },
    { id: 16, name: "Outdoor sofa set", price: "Rs. 25,000.00", image: "/Spic19.png" }
  ];

  return (
    <>
      <div className="relative">
        {/* Main Background Image */}
        <div className="relative">
          <Image
            src="/Spic1.png"
            alt="pic1"
            width={1440}
            height={316}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <Image
              src="/Spic2.png"
              alt="pic2"
              width={77}
              height={77}
              className="w-[7%] md:w-[77px] md:h-[77px] "
            />
            <p className="font-[500] text-[24px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[36px] sm:leading-[48px] md:leading-[72px] lg:leading-[80px] text-black">
              Shop
            </p>
            <div className="text-[12px] sm:text-[16px]  text-gray-600 flex items-center space-x-1">
              <p>Home</p>
              <FaChevronRight className="text-gray-800" />
              <p>Shop</p>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full bg-[#FAF4F4] mt-8 p-4">
            <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
              {/* Filters Section */}
              <div className="flex items-center space-x-4 lg:space-x-5">
                <div className="flex items-center space-x-3">
                  <IoFilter className="w-5 h-5 md:w-[25px] md:h-[25px] cursor-pointer" />
                  <span className="text-sm md:text-base lg:w-[48px] lg:h-[30px]">
                    Filters
                  </span>
                </div>
                <BiGridSmall className="w-5 h-5 md:w-[25px] md:h-[25px] cursor-pointer" />
                <BsViewList className="w-5 h-5 md:w-[25px] md:h-[25px] cursor-pointer" />
              </div>

              {/* Divider */}
              <div className="hidden lg:block border border-[#9F9F9F] h-[40px]"></div>

              {/* Showing Results */}
              <p className="text-sm md:text-base font-[400] text-black">
                Showing 1 to 16 of 32 results
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-sm md:text-base font-[400]">Show</p>
                <input
                  type="text"
                  placeholder="16"
                  className="bg-white border border-gray-300 rounded w-[55px] h-[40px] text-center focus:outline-none"
                />
              </div>

              <div className="flex items-center space-x-2">
                <p className="text-sm md:text-base font-[400]">Sort by</p>
                <input
                  type="text"
                  placeholder="Default"
                  className="bg-white border border-gray-300 rounded w-[150px] h-[40px] text-center focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Display */}
        <div className="bg-gray-50 py-8 mt-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button className="px-4 py-2 bg-[#FBEBB5] rounded-md hover:bg-[#FBEBB5]">
                1
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-[#FBEBB5]">
                2
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-[#FBEBB5]">
                3
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-[#FBEBB5]">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <AboveFooter />
    </>
  );
};

export default page;