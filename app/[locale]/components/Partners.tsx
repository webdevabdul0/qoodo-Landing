import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { TFunction } from "i18next";

interface PartnerProps {
  t: TFunction<["translation", ...string[]], undefined>;
}

const Partners: React.FC<PartnerProps> = ({ t }) => {
  return (
    <div className="w-full py-[70px] ">
      <div className="w-full flex flex-col items-center justify-center  md:mb-[50px] px-[10px] sm:px-[50px]">
        <h1 className="text-white text-3xl md:text-h3 text-center  font-bold mb-[20px]">
          {t("Trusted by Leading Organizations")}{" "}
        </h1>

        <p className="subtitle text-[#E4ECFF] text-center ">
          {t(
            "Streamline compliance, enhance safety, and drive efficiency with our smart QMS software"
          )}
        </p>
      </div>

      <div className=" mb-[50px] ">
        <Marquee>
          <div>
            <Image
              src="/Featured/partner (19).png"
              alt="Partner 1"
              width={120}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div>
            <Image
              src="/Featured/partner (13).png"
              alt="Partner 2"
              width={110}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div>
            <Image
              src="/Featured/partner (18).png"
              alt="Partner 3"
              width={90}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div>
            <Image
              src="/Featured/partner (8).png"
              alt="Partner 4"
              width={70}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div>
            <Image
              src="/Featured/partner (6).png"
              alt="Partner 5"
              width={90}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div>
            <Image
              src="/Featured/partner (15).png"
              alt="Partner 6"
              width={90}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div>
            <Image
              src="/Featured/partner (17).png"
              alt="Partner 7"
              width={90}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div>
            <Image
              src="/Featured/partner (2).png"
              alt="Partner 8"
              width={140}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div>
            <Image
              src="/Featured/partner (1).png"
              alt="Partner 9"
              width={120}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div>
            <Image
              src="/Featured/partner (9).png"
              alt="Partner 10"
              width={150}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div>
            <Image
              src="/Featured/partner (14).png"
              alt="Partner 11"
              width={90}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div>
            <Image
              src="/Featured/partner (11).png"
              alt="Partner 12"
              width={130}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div>
            <Image
              src="/Featured/partner (12).png"
              alt="Partner 13"
              width={110}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div>
            <Image
              src="/Featured/partner (7).png"
              alt="Partner 14"
              width={90}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div>
            <Image
              src="/Featured/partner (3).png"
              alt="Partner 15"
              width={140}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          <div className="relative">
            <Image
              src="/Featured/partner (5).png"
              alt="Partner 16"
              width={110}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>

          {/*  <div className="relative">
            <Image
              src="/Featured/partner (4).png"
              alt="Partner 17"
              width={140}
              height={1}
              className="filter grayscale transition-transform duration-300 ml-[100px] hover:grayscale-0"
            />
          </div>*/}
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
