import React from 'react'
import Link from "next/link";
import Image from "next/image";

const NewArrivals = () => {
  return (
    <div>
      {/* New Arrivals */}
      <div className="bg-[#FFF9E5] w-full h-auto py-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center mx-auto px-4 lg:px-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <Image
              src={"/pic8.png"}
              alt="pic8"
              width={983}
              height={799}
              className="w-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center sm:pt-32 lg:text-left">
            <div className="mb-6">
              <p className="font-[500] text-[24px] leading-[36px] text-gray-700">
                New Arrivals
              </p>
              <p className="font-[700] text-[36px] md:text-[48px] leading-[48px] md:leading-[72px] text-black">
                Asgaard Sofa
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="../Shop"
                className="text-[16px] md:text-[20px] leading-[28px] font-[500] text-[#000000] border border-[#9b9b9b] py-3 px-6 inline-block hover:bg-[#faeec7] transition-colors"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewArrivals;