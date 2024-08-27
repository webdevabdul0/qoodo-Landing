import { GoArrowUpRight } from "react-icons/go";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import { TFunction } from "i18next";

interface HeroProps {
  t: TFunction<["translation", ...string[]], undefined>;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const title = t("Digital inspection like never before");

  return (
    <div className="pb-[50px] pt-36 mx-auto relative md:px-[50px]">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-50 md:-top-50 h-screen"
          fill="white"
        />

        <Spotlight
          className="-top-0 -left-20 md:-left-0 md:-top-10 h-screen"
          fill="white"
        />

        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full   dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className=" pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative  mx-auto max-w-[100rem] z-10">
        <div className="flex flex-col w-full items-center justify-center px-[10px] sm:px-0  sm:mb-32">
          <div className="w-full flex flex-col md:flex-row items-start justify-center md:justify-between">
            <div className="w-full flex flex-col px-8 md:px-0 max-w-[750px] pb-[50px] xl:pt-[100px] items-center md:items-start">
              {/* 
           If we Need text Generate Effect we can use this
           <TextGenerateEffect
                words={title}
                className="text-center md:text-start text-white text-4xl tracking-[-1px] font-bold md:text-5xl lg:text-6xl 2xl:text-7xl"
              />*/}

              <h1 className="mb-8  xl:mb-16 text-center md:text-start text-white text-4xl tracking-[-1px] font-bold md:text-5xl lg:text-6xl 2xl:text-7xl">
                {title}
              </h1>

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
                src="/images/hero/hero.png"
                width={0}
                height={0} // Adjust based on aspect ratio
                alt="Dashboard Preview"
                className=" w-full sm:min-w-[500px] opacity-0"
              />
              <Image
                src="/images/hero/hero.png"
                width={2000}
                height={0} // Adjust based on aspect ratio
                alt="Dashboard Preview"
                className="absolute top-0 right-0 lg:w-[700px] xl:w-[800px] 2xl:w-[1000px] lg:max-w-none md:translate-x-[5%]"
              />
            </div>
          </div>
        </div>

        <div className="-z-10 w-[1152px] h-[664px] opacity-20 bg-gradient-to-br from-[#7bcbe8] via-[#8615e5] to-[#33fdff] rounded-full blur-[200px] absolute  bottom-0" />
      </div>
    </div>
  );
};

export default Hero;
