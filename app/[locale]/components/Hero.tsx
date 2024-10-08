import Image from "next/image";
import { TFunction } from "i18next";
import Link from "next/link";
import { FaApple } from "react-icons/fa";

interface HeroProps {
  t: TFunction<["translation", ...string[]], undefined>;
}
const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <div className="pb-5 pt-36 mx-auto relative md:px-[50px]">
      {/**
       * 
       * 
       * <div>
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
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full   bg-grid-white/[0.03] 
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
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
                <span className="text-[#4A60FF]">Qoodo:</span>{" "}
                {t("Efficient digital logging")}
              </h1>

              <a href="bookDemo">
                <button className="h-16 px-10 py-[22px] bg-[#4a60ff]  rounded-[14px] inline-flex items-center justify-center gap-2.5">
                  <div className="text-white text-base font-medium font-gilroy leading-tight">
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

          <div className="w-full flex justify-center sm:justify-end z-10">
            <div className="p-5  flex flex-row gap-1 sm:gap-5  -mt-8 xl:-mt-16 justify-center items-center bg-black bg-opacity-50 rounded-2xl">
              <p className="text-white text-xl font-gilroy font-semibold ">
                {t("Get it on:")}
              </p>

              <Link href="https://apps.apple.com/hu/app/qoodo/id6460819008">
                <FaApple size={32} />
              </Link>

              <Link href="https://play.google.com/store/apps/details?id=com.io.qoodo">
                <Image
                  src="/images/hero/logos_google-play-icon.png"
                  width={24}
                  height={24}
                  alt="Image"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="-z-10 w-[1152px] h-[664px] opacity-20 bg-[#4A60FF] rounded-full blur-[200px] absolute  bottom-0" />
      </div>
    </div>
  );
};

export default Hero;
