import React from "react";

import Image from "next/image";

import Mock from "@/public/images/audit/hero.png";

const Hero = () => {
  return (
    <div className=" pt-36 mx-auto relative md:px-[50px]">
      {/*<div
        className="h-screen w-full   dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
   absolute top-0 left-0 flex items-center justify-center"
      >

        <div
           className=" pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
     bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div> */}

      <div className="flex justify-center relative  mx-auto max-w-[100rem] z-10">
        <div className="flex flex-col w-full items-center justify-center px-[10px] sm:px-0  sm:mb-32">
          <div className="w-full flex flex-col md:flex-row items-start justify-center md:justify-between">
            <div className="w-full flex flex-col px-8 md:px-0 max-w-[750px] pb-[50px] xl:pt-[100px] items-center md:items-start ">
              <h1 className="mb-5 text-center md:text-start text-white text-4xl font-bold md:text-5xl lg:text-6xl 2xl:text-7xl tracking-[-1px]">
                One-Click Auditing with Qoodo Audit
              </h1>

              <p className="mb-5 subtitle text-white-100">
                Easily and efficiently conduct audits with our automated,
                intelligent tool.
              </p>

              <a href="bookDemo">
                <button className="h-16 px-10 py-[22px] bg-gradient-to-r from-[#4a60ff] to-[#2c3999] rounded-[14px] border border-[#6971a2] inline-flex items-center justify-center gap-2.5">
                  <div className="text-white text-base font-medium font-['Gilroy'] leading-tight">
                    Book a Demo
                  </div>
                </button>
              </a>
            </div>

            <div className="flex-1 relative w-full justify-center items-center ">
              {" "}
              <Image
                src={Mock}
                width={2000}
                height={2000} // Adjust based on aspect ratio
                alt="Dashboard Preview"
                className=" w-full sm:min-w-[500px] opacity-100"
              />
            </div>
          </div>
        </div>

        <div className="-z-10 w-[1152px] h-[664px] opacity-20 bg-[#4A60FF] rounded-full blur-[200px] absolute  bottom-0" />
      </div>
    </div>
  );
};

export default Hero;
