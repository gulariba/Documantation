import React from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";

const page = () => {
  return (
    <div>
      <div className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-64 md:h-[450px] w-full mt-24 md:mt-32">
        <div className="absolute inset-0 bg-white bg-opacity-55"></div>

        <div className="relative z-10 flex justify-center items-center h-full flex-col gap-6 md:gap-11">
          <div className="w-[106px] h-[133px] flex flex-col items-center relative">
            <div className='w-16 h-16 md:w-20 md:h-20'>
              <Image
                src="/mlogo.png"
                alt="logo"
                width={106}
                height={106}
                className="w-full h-full object-contain"
              />
            </div>
            <div className='absolute top-[90px] md:top-[110px]'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl lowercase text-white'>Blog</h1>
            </div>
          </div>

          <div className='absolute top-[170px] md:top-[190px] bg-indigo-800 w-56 text-white px-4 py-2 rounded-md'>
            <ul className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <li className="flex items-center gap-2 text-sm sm:text-base">
                Home
                <IoIosArrowForward className="w-5 h-5" />
              </li>
              <li className="text-sm sm:text-base">Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;