import React from "react";

import Image from "next/image";
import { TFunction } from "i18next";
import Mock from "@/public/images/attendance/hero.png";

interface HeroProps {
  t: TFunction<["translation", ...string[]], undefined>;
}
const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <div className=" pt-36 mx-auto relative md:px-[50px]">
      <div className="flex justify-center relative  mx-auto max-w-[100rem] z-10">
        <div className="flex flex-col w-full items-center justify-center px-[10px] sm:px-0  sm:mb-32">
          <div className="w-full flex flex-col lg:flex-row items-start justify-center md:justify-between">
            <div className="w-full flex flex-col px-8 md:px-0 max-w-[750px] pb-[50px] xl:pt-14 items-center md:items-start ">
              <h1 className="mb-5 text-center md:text-start text-white text-4xl font-bold md:text-5xl lg:text-6xl 2xl:text-7xl tracking-[-1px]">
                {t("Stay on Track, Every Moment Counts!")}
              </h1>

              <p className="mb-5 subtitle text-white-100 text-center md:text-start">
                {t(
                  "Simplify attendance tracking with ease and accuracy—anytime, anywhere."
                )}
              </p>

              <a href="bookDemo">
                <button className="h-16 px-10 py-[22px] bg-gradient-to-r from-[#4a60ff] to-[#2c3999] rounded-[14px] border border-[#6971a2] inline-flex items-center justify-center gap-2.5">
                  <div className="text-white text-base font-medium font-['Gilroy'] leading-tight">
                    {t("Book a Demo")}
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
                className=" w-full sm:min-w-[500px] opacity-100 select-none"
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
