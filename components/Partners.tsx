import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="w-full py-[70px] ">
      <div className="w-full flex flex-col items-center justify-center  md:mb-[50px] px-[10px] sm:px-[50px]">
        <h1 className="text-white text-3xl md:text-h3 text-center  font-bold mb-[20px]">
          Trusted by Leading Organizations{" "}
        </h1>

        <p className="subtitle text-[#E4ECFF] text-center mb-[30px]">
          Experience the excellence trusted by Fortune 500 companies and leading
          enterprises worldwide.
        </p>
      </div>

      <div className=" mb-[50px] ">
        <Marquee>
          <div className="relative">
            <Image
              src="/Featured/partner (1).png"
              alt="Partner 1"
              width={120}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div className="relative">
            <Image
              src="/Featured/partner (2).png"
              alt="Partner 2"
              width={120}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div className="relative">
            <Image
              src="/Featured/partner (3).png"
              alt="Partner 3"
              width={140}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div className="relative">
            <Image
              src="/Featured/partner (4).png"
              alt="Partner 4"
              width={140}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div className="relative">
            <Image
              src="/Featured/partner (5).png"
              alt="Partner 5"
              width={110}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div className="relative">
            <Image
              src="/Featured/partner (6).png"
              alt="Partner 6"
              width={90}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div className="relative">
            <Image
              src="/Featured/partner (7).png"
              alt="Partner 7"
              width={90}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div>
            <Image
              src="/Featured/partner (9).png"
              alt="Partner 9"
              width={140}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>
          <div>
            <Image
              src="/Featured/partner (8).png"
              alt="Partner 8"
              width={80}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
