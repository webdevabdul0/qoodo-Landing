"use client";

import React from "react";
import { useRef, useEffect } from "react";
import gsap, { Circ } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
const QoodoIndustries = () => {
  const { t } = useTranslation();
  const container = useRef<HTMLDivElement | null>(null);
  const featHead = useRef<HTMLDivElement | null>(null);
  const feat1 = useRef<HTMLDivElement | null>(null);
  const feat2 = useRef<HTMLDivElement | null>(null);
  const feat3 = useRef<HTMLDivElement | null>(null);
  const feat4 = useRef<HTMLDivElement | null>(null);
  const feat5 = useRef<HTMLDivElement | null>(null);
  const feat6 = useRef<HTMLDivElement | null>(null);
  const feat7 = useRef<HTMLDivElement | null>(null);
  const feat8 = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const timeLine3 = gsap.timeline({
      defaults: { duration: 0.4, ease: Circ.easeOut },
      scrollTrigger: {
        trigger: container.current, // You need to define  container ref somewhere
        start: "top 50%",
      },
    });

    timeLine3
      .fromTo(featHead.current, { opacity: 0, y: -90 }, { opacity: 1, y: 0 }) // You need to define featHead ref somewhere
      .fromTo(
        [
          feat1.current,
          feat2.current,
          feat3.current,
          feat4.current,
          feat5.current,
          feat6.current,
          feat7.current,
          feat8.current,
        ],
        { opacity: 0, y: 90 },
        { opacity: 1, y: 0, stagger: 0.2 }
      );

    return () => {
      timeLine3.kill();
    };
  }, []);

  return (
    <div className=" px-5 sm:px-[50px] py-[130px] ">
      <div className="text-center w-full flex flex-col justify-center items-center mb-[50px]">
        <h3 className="heading2 mb-[20px]">
          {t("Who is Qoodo's Smart QMS Software Perfect For?")}
        </h3>

        <p className="subtitle text-[#E4ECFF]">
          {t("Our solution is ideal for a variety of industries including:")}
        </p>
      </div>

      <div className="w-full md:px-[50px] grid grid-cols-1 sm:grid-cols-2  2xl:grid-cols-4 gap-6 xl:gap-5 place-content-center place-items-center">
        {/* Industry Cards */}
        <div
          ref={feat1}
          className="flex group text-center justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
        >
          <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-[15px] justify-center items-center w-full h-full bg-black rounded-[30px]">
            <img src="/images/industries/1.png" alt="" />

            <h6 className="px-4 text-white text-2xl font-medium">
              {t("Food Manufacturers")}
            </h6>
          </div>
          <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
            <p className="text-white text-lg">
              {t("Streamline production processes and ensure product quality.")}{" "}
            </p>
          </div>
          <div className="absolute rounded-[30px] -inset-[1px]  bg-[#4A60FF] -z-20 "></div>
        </div>

        <div
          ref={feat2}
          className="flex group text-center justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
        >
          <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-[15px] justify-center items-center w-full h-full bg-black rounded-[30px]">
            <img src="/images/industries/2.png" alt="" />

            <h6 className="px-4 text-white text-2xl font-medium">
              {t("Hospitality Providers")}
            </h6>
          </div>
          <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
            <p className="text-white text-lg">
              {t("Maintain high standards of food safety and service quality.")}{" "}
            </p>
          </div>
          <div className="absolute rounded-[30px] -inset-[1px]  bg-[#4A60FF] -z-20 "></div>
        </div>

        <div
          ref={feat3}
          className="flex group text-center justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
        >
          <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-[15px] justify-center items-center w-full h-full bg-black rounded-[30px]">
            <img src="/images/industries/3.png" alt="" />

            <h6 className="px-4 text-white text-2xl font-medium">
              {t("Accommodation Service Providers")}
            </h6>
          </div>
          <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
            <p className="text-white text-lg">
              {t(
                "Enhance guest satisfaction by ensuring consistent service and facility standards."
              )}{" "}
            </p>
          </div>
          <div className="absolute rounded-[30px] -inset-[1px]  bg-[#4A60FF] -z-20 "></div>
        </div>

        <div
          ref={feat4}
          className="flex group text-center justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
        >
          <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-[15px] justify-center items-center w-full h-full bg-black rounded-[30px]">
            <img src="/images/industries/4.png" alt="" />

            <h6 className="px-4  text-white text-2xl font-medium">
              {t("Occupational Safety and Fire Protection")}
            </h6>
          </div>
          <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
            <p className="text-white text-lg">
              {t(
                "Ensure workplace safety by implementing and monitoring compliance with safety regulations."
              )}{" "}
            </p>
          </div>
          <div className="absolute rounded-[30px] -inset-[1px]  bg-[#4A60FF] -z-20 "></div>
        </div>

        <div
          ref={feat5}
          className="flex group text-center justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
        >
          <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-[15px] justify-center items-center w-full h-full bg-black rounded-[30px]">
            <img src="/images/industries/5.png" alt="" />

            <h6 className="px-4 text-white text-2xl font-medium">
              {t("HACCP, ISO, and IFS Experts and Companies")}
            </h6>
          </div>
          <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
            <p className="text-white text-lg">
              {t(
                "Streamline compliance with international standards and maintain certification requirements."
              )}{" "}
            </p>
          </div>
          <div className="absolute rounded-[30px] -inset-[1px]  bg-[#4A60FF] -z-20 "></div>
        </div>

        <div
          ref={feat6}
          className="flex group text-center justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
        >
          <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-[15px] justify-center items-center w-full h-full bg-black rounded-[30px]">
            <img src="/images/industries/6.png" alt="" />

            <h6 className="px-4 text-white text-2xl font-medium">
              {t("Quality Assurance Officers and Teams")}
            </h6>
          </div>
          <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
            <p className="text-white text-lg">
              {t("Implement robust quality control measures and procedures.")}{" "}
            </p>
          </div>
          <div className="absolute rounded-[30px] -inset-[1px]  bg-[#4A60FF] -z-20 "></div>
        </div>

        <div
          ref={feat7}
          className="flex group text-center justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
        >
          <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-[15px] justify-center items-center w-full h-full bg-black rounded-[30px]">
            <img src="/images/industries/6.png" alt="" />

            <h6 className="px-4 text-white text-2xl font-medium">
              {t("Internal and External Auditors")}
            </h6>
          </div>
          <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
            <p className="text-white text-lg">
              {t("Conduct thorough audits and maintain transparency.")}{" "}
            </p>
          </div>
          <div className="absolute rounded-[30px] -inset-[1px]  bg-[#4A60FF] -z-20 "></div>
        </div>

        <div
          ref={feat8}
          className="flex group text-center justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
        >
          <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-[15px] justify-center items-center w-full h-full bg-black rounded-[30px]">
            <img src="/images/industries/6.png" alt="" />

            <h6 className="px-4 px-4 text-white text-2xl font-medium">
              {t("Other companies where various standards are applied")}
            </h6>
          </div>
          <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
            <p className="text-white text-lg">
              {t(
                "Optimize processes to meet diverse industry standards and improve operational efficiency."
              )}{" "}
            </p>
          </div>
          <div className="absolute rounded-[30px] -inset-[1px]  bg-[#4A60FF] -z-20 "></div>
        </div>
      </div>
    </div>
  );
};

export default QoodoIndustries;
