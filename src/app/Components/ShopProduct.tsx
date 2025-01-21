import React from 'react'
import Image from "next/image";
import Link from 'next/link'

const ShopProduct = () => {
  return (
    <div>
      {/* View More Section */}
      <div className="w-full bg-[#FAF4F4] py-16">
        {/* Grid Layout with proper alignment and margin */}
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 px-6 justify-items-center">
          
          {/* First Image Section */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative w-full mb-6">
              <Image
                src="/pic2.png"
                alt="Side Table 1"
                width={400}  // Adjusted width here
                height={362} // Adjusted height to maintain aspect ratio
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-[500] text-[24px] md:text-[36px] leading-[36px] md:leading-[54px] text-gray-800">
                Side Table
              </p>
              <Link href='../Shop'>
                <p className="underline underline-offset-8 mt-2 cursor-pointer font-[500] text-[16px] transition-transform hover:scale-105 hover:text-gray-700">
                  View More
                </p>
              </Link>
            </div>
          </div>

          {/* Second Image Section */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative w-full mb-6">
              <Image
                src="/pic3.png"
                alt="Side Table 2"
                width={400}  // Adjusted width here
                height={362} // Adjusted height to maintain aspect ratio
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-[500] text-[24px] md:text-[36px] leading-[36px] md:leading-[54px] text-gray-800">
                Side Table
              </p>
              <Link href='../Shop'>
                <p className="underline underline-offset-8 mt-2 cursor-pointer font-[500] text-[16px] transition-transform hover:scale-105 hover:text-gray-700">
                  View More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopProduct;