import { GoArrowUpRight } from "react-icons/go";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";

const Hero = () => {
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

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center "
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative  z-10 mx-auto max-w-[100rem]">
        <div className="flex flex-col w-full items-center justify-center px-[10px] sm:px-0  sm:mb-32">
          <div className="w-full flex flex-col md:flex-row items-start justify-center md:justify-between">
            <div className="w-full flex-1 flex-col  max-w-[750px] pb-[50px] 2xl:pt-[100px]">
              <TextGenerateEffect
                words="Empower Your Quality Management with Qoodo"
                className="text-center md:text-start text-white text-4xl tracking-[-1px] font-bold md:text-5xl lg:text-6xl 2xl:text-7xl "
              />

              <a href="bookDemo">
                <button className=" animate-shimmer h-16 px-10 py-[22px] bg-gradient-to-r from-[#4a60ff] to-[#2c3999] rounded-[14px] border border-[#6971a2] inline-flex items-center justify-center gap-2.5">
                  <div className="text-white text-base font-medium font-['Gilroy'] leading-tight">
                    Book a Demo
                  </div>
                </button>
              </a>
            </div>

            <div className="flex-1 relative w-full justify-center items-center">
              <Image
                src="/images/hero/hero.png"
                width={1440}
                height={0} // Adjust based on aspect ratio
                alt="Dashboard Preview"
                className=" w-full sm:min-w-[500px]"
              />
            </div>
          </div>

          <p className="subtitle text-[#E4ECFF] text-center mb-- sm:mb-8 -mt-8">
            Streamline compliance, enhance safety, and drive efficiency with our
            smart QMS software
          </p>
        </div>

        <div className=" w-[1152px] h-[664px] opacity-20 bg-gradient-to-br from-[#7bcbe8] via-[#8615e5] to-[#33fdff] rounded-full blur-[200px] absolute -z-10 bottom-0" />
      </div>
    </div>
  );
};

export default Hero;
