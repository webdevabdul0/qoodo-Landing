import { GoArrowUpRight } from "react-icons/go";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pb-[50px] pt-36 mx-auto relative">
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

      <div className="flex justify-center relative  z-10">
        <div className="w-full flex flex-col items-center justify-center px-[10px] sm:px-[50px] ">
          <div className="w-full flex flex-col items-center justify-center max-w-[750px] pb-[50px]">
            <TextGenerateEffect
              words="Empower Your Quality Management with Qoodo"
              className="text-center text-white text-4xl tracking-[-1px] font-bold md:text-5xl lg:text-7xl "
            />
            <p className="subtitle text-[#E4ECFF] text-center mb-[30px] sm:mb-0">
              Streamline compliance, enhance safety, and drive efficiency with
              our smart QMS software
            </p>
            <a href="#">
              <MagicButton
                title="Get Started"
                icon={<GoArrowUpRight />}
                position="right"
              />
            </a>
          </div>

          <Image
            src="/images/hero/hero.png"
            width={1440}
            height={0} // Adjust based on aspect ratio
            alt="Dashboard Preview"
            className="max-w-[1440px] w-full h-auto "
          />

          <div className="w-[1152px] h-[664px] opacity-20 bg-gradient-to-br from-[#7bcbe8] via-[#8615e5] to-[#33fdff] rounded-full blur-[200px] absolute -z-10 bottom-0" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
