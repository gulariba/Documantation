import React from "react";
import Image from "next/image";

const Review = () => {
  return (
    <div className="max-w-[1440px] h-auto flex flex-col border-t-2 border-[#9F9F9F] mx-auto px-4">
      {/* Parent container with vertical alignment */}
      <div className="flex items-center justify-start flex-col w-full h-auto">
        {/* Top buttons */}
        <div className="w-full sm:w-[70%] md:w-[50%] flex flex-col sm:flex-row justify-between gap-4 mt-7">
          <button className="w-full sm:w-auto h-[36px] text-[18px] sm:text-[24px]">
            Description
          </button>
          <button className="w-full sm:w-auto h-[36px] text-[18px] sm:text-[24px] text-[#9F9F9F]">
            Additional Information
          </button>
          <button className="w-full sm:w-auto h-[36px] text-[18px] sm:text-[24px] text-[#9F9F9F]">
            Reviews [5]
          </button>
        </div>
        {/* Content section */}
        <div className="flex flex-col items-center sm:flex-row justify-center w-full sm:w-[1026px] h-auto bg-white mt-4 p-4">
          <div className="space-y-3 text-justify text-[14px] sm:text-[16px] leading-relaxed">
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the
              unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the
              bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
              well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate
              and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while
              the guitar-influenced leather strap enables easy and stylish travel.
            </p>
          </div>
        </div>
        {/* Images Section */}
        <div className="w-full flex flex-col sm:flex-row gap-6 p-4 mt-4">
          <div className="w-full sm:w-[45%] h-auto">
            <Image src="/sofass.png" alt="image" width={600} height={600} className="w-full h-auto object-cover" />
          </div>
          <div className="w-full sm:w-[45%] h-auto">
            <Image src="/sofass.png" alt="image" width={600} height={600} className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;