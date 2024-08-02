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
          <div>
            <img
              src="/Featured/partner (1).png"
              className="w-[170px] ml-[50px]"
            />
          </div>

          <div>
            <img
              src="/Featured/partner (2).png"
              className="w-[170px] ml-[50px]"
            />
          </div>
          <div>
            <img
              src="/Featured/partner (3).png"
              className="w-[170px] ml-[50px]"
            />
          </div>

          <div>
            <img
              src="/Featured/partner (4).png"
              className="w-[170px] ml-[50px]"
            />
          </div>

          <div>
            <img
              src="/Featured/partner (5).png"
              className="w-[170px] ml-[50px]"
            />
          </div>

          <div>
            <img
              src="/Featured/partner (6).png"
              className="w-[170px] ml-[50px]"
            />
          </div>

          <div>
            <img
              src="/Featured/partner (7).png"
              className="w-[170px] ml-[50px]"
            />
          </div>

          <div>
            <img
              src="/Featured/partner (8).png"
              className="w-[170px] ml-[50px]"
            />
          </div>

          <div>
            <img
              src="/Featured/partner (9).png"
              className="w-[170px] ml-[50px]"
            />
          </div>

          <div>
            <img
              src="/Featured/partner (10).png"
              className="w-[170px] ml-[50px]"
            />
          </div>

          <div>
            <img
              src="/Featured/partner (11).png"
              className="w-[170px] ml-[50px]"
            />
          </div>

          <div>
            <img
              src="/Featured/partner (12).png"
              className="w-[170px] ml-[50px]"
            />
          </div>

          <div>
            <img
              src="/Featured/partner (13).png"
              className="w-[170px] ml-[50px]"
            />
          </div>

          <div>
            <img
              src="/Featured/partner (14).png"
              className="w-[170px] ml-[50px]"
            />
          </div>

          <div>
            <img
              src="/Featured/partner (15).png"
              className="w-[170px] ml-[50px]"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
