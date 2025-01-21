import React from "react";
import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { RxLinkedinLogo } from "react-icons/rx";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import Link from "next/link";

const Details = () => {
  const images = ["/s1.png", "/s2.png", "/s3.png", "/s4.png"];
  const colors = ["#816DFA", "#000000", "#CDBA7B"];
  const sizes = ["L", "XL", "XS"];

  return (
    <div className="max-w-[1440px] h-auto lg:h-[820px] mx-auto px-4 lg:px-0">
      <div className="max-w-[1241.01px] h-auto lg:h-[730.87px] m-auto mt-11 bg-white flex flex-col lg:flex-row lg:justify-between">
        {/* Left Section */}
        <div className="w-full lg:w-[553px] flex flex-row">
          {/* Image Thumbnails */}
          <div className="w-[76px] hidden lg:flex flex-col items-center ">
            {images.map((src, idx) => (
              <div key={idx} className="w-[60px] h-[60px] bg-[#FFF9E5] mb-4 last:mb-0">
                <Image
                  src={src}
                  alt={`Image ${idx + 1}`}
                  width={60}
                  height={60}
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full lg:w-[481px] flex justify-center bg-white">
            <div className="w-[90%] lg:w-[423px] h-[300px] lg:h-[500px] bg-[#FFF9E5] rounded-md relative">
              <Image
                src="/pic8.png"
                alt="Sofa"
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[606.01px] h-auto lg:h-[730.87px] mt-8 lg:mt-0">
          {/* Title and Price */}
          <div>
            <h1 className="text-[24px] lg:text-[42px]">Asgaard sofa</h1>
            <h2 className="text-[18px] lg:text-[24px]">Rs. 250,000.00</h2>
          </div>

          {/* Rating */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-14 mt-3">
            <button className="flex flex-row gap-2">
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStarHalf className="text-yellow-300" />
            </button>
            <button className="border-l-2 hidden sm:block" style={{ borderColor: "#9F9F9F" }}>
              <p className=" text-[#7F7F7F] py-2 px-4 rounded-md text-[13px]">5 Customer Review</p>
            </button>
          </div>

          {/* Description */}
          <div>
            <p className="text-[13px] mt-4 text-justify">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </p>
          </div>

          {/* Size */}
          <div>
            <p className="text-[14px] text-[#9F9F9F] mt-5">Size</p>
            <div className="flex flex-row gap-4">
              {sizes.map((size, idx) => (
                <div
                  key={idx}
                  className={`w-[30px] h-[30px] flex items-center justify-center rounded-md ${idx === 0 ? "bg-[#FBEBB5]" : "bg-[#FAF4F4]"}`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Color */}
          <div>
            <p className="text-[14px] text-[#9F9F9F] mt-5">Color</p>
            <div className="flex flex-row gap-4">
              {colors.map((color, idx) => (
                <div
                  key={idx}
                  className="w-[30px] h-[30px] rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex flex-col sm:flex-row mt-8 gap-4 sm:gap-10">
            <button className="flex flex-row px-6 py-4 rounded-xl border-[1px] border-[#9F9F9F] gap-6 text-[16px]">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </button>
            <Link href={"/Cart"} className="px-10 py-4 rounded-xl border-[1px] border-black">
              Add To Cart
            </Link>
          </div>

          {/* Divider */}
          <hr className="w-full sm:w-[601px] border-t-[2px] border-[#dbd8d8] mt-10" />

          {/* Additional Details */}
          <div className="mt-9 space-y-3">
            {[
              ["SKU", ":SKU001"],
              ["Category", ": Sofas"],
              ["Tags", ":Sofa, Chair, Home, Shop"],
            ].map(([label, value], idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <p className="text-[16px] text-[#9F9F9F]">{label}</p>
                <p className="text-[16px] text-[#9F9F9F]">{value}</p>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <p className="text-[16px] text-[#9F9F9F]">Share</p>
              <div className="flex flex-row gap-2 text-[23px] text-black">
                <MdFacebook />
                <RxLinkedinLogo />
                <AiFillTwitterCircle />
                <div className="w-32 flex justify-end text-red-600">
                  <IoIosHeartEmpty />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;