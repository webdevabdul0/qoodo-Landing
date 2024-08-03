"use client";

import React from "react";
import { useRef, useEffect } from "react";
import gsap, { Circ } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const QoodoIndustries = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const featHead = useRef<HTMLDivElement | null>(null);
  const feat1 = useRef<HTMLDivElement | null>(null);
  const feat2 = useRef<HTMLDivElement | null>(null);
  const feat3 = useRef<HTMLDivElement | null>(null);
  const feat4 = useRef<HTMLDivElement | null>(null);
  const feat5 = useRef<HTMLDivElement | null>(null);
  const feat6 = useRef<HTMLDivElement | null>(null);

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
          Who is Qoodo's Smart QMS Software Perfect For?
        </h3>

        <p className="subtitle text-[#E4ECFF]">
          Our solution is ideal for a variety of industries and roles,
          including:
        </p>
      </div>

      <div className="w-full md:px-[50px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  place-items-center 2xl:grid-cols-6 grid gap-6 xl:gap-5">
        {/* Industry Cards */}
        <div
          ref={feat1}
          className="flex group text-center justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
        >
          <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-[15px] justify-center items-center w-full h-full bg-black rounded-[30px]">
            <img src="/images/industries/1.png" alt="" />

            <h6 className="text-white text-2xl font-medium">
              Food Manufacturers
            </h6>
          </div>
          <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
            <p className="text-white text-lg">
              Streamline production processes and ensure product quality.{" "}
            </p>
          </div>
          <div className="absolute rounded-[30px] -inset-[1px]  bg-gradient-to-br from-[#7BCBE8] via-[#8715E5] to-[#33FDFF] -z-20 "></div>
        </div>

        <div
          ref={feat2}
          className="flex group text-center justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
        >
          <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-[15px] justify-center items-center w-full h-full bg-black rounded-[30px]">
            <img src="/images/industries/2.png" alt="" />

            <h6 className="text-white text-2xl font-medium">
              Food Service Providers
            </h6>
          </div>
          <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
            <p className="text-white text-lg">
              Maintain high standards of food safety and service quality.{" "}
            </p>
          </div>
          <div className="absolute rounded-[30px] -inset-[1px]  bg-gradient-to-br from-[#7BCBE8] via-[#8715E5] to-[#33FDFF] -z-20 "></div>
        </div>

        <div
          ref={feat3}
          className="flex group text-center justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
        >
          <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-[15px] justify-center items-center w-full h-full bg-black rounded-[30px]">
            <img src="/images/industries/3.png" alt="" />

            <h6 className="text-white text-2xl font-medium">Safety Managers</h6>
          </div>
          <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
            <p className="text-white text-lg">
              Enhance workplace safety and compliance with regulations.{" "}
            </p>
          </div>
          <div className="absolute rounded-[30px] -inset-[1px]  bg-gradient-to-br from-[#7BCBE8] via-[#8715E5] to-[#33FDFF] -z-20 "></div>
        </div>

        <div
          ref={feat4}
          className="flex group text-center justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
        >
          <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-[15px] justify-center items-center w-full h-full bg-black rounded-[30px]">
            <img src="/images/industries/4.png" alt="" />

            <h6 className="text-white text-2xl font-medium">
              Compliance Officers
            </h6>
          </div>
          <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
            <p className="text-white text-lg">
              Ensure adherence to industry standards and regulations.{" "}
            </p>
          </div>
          <div className="absolute rounded-[30px] -inset-[1px]  bg-gradient-to-br from-[#7BCBE8] via-[#8715E5] to-[#33FDFF] -z-20 "></div>
        </div>

        <div
          ref={feat5}
          className="flex group text-center justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
        >
          <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-[15px] justify-center items-center w-full h-full bg-black rounded-[30px]">
            <img src="/images/industries/5.png" alt="" />

            <h6 className="text-white text-2xl font-medium">
              Quality Assurance Teams
            </h6>
          </div>
          <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
            <p className="text-white text-lg">
              Implement robust quality control measures and procedures.{" "}
            </p>
          </div>
          <div className="absolute rounded-[30px] -inset-[1px]  bg-gradient-to-br from-[#7BCBE8] via-[#8715E5] to-[#33FDFF] -z-20 "></div>
        </div>

        <div
          ref={feat6}
          className="flex group text-center justify-center items-center w-full sm:max-w-none max-w-[240px] relative rounded-[30px]"
        >
          <div className="flex min-h-[200px] min-w-[200px]  flex-col  gap-[15px] justify-center items-center w-full h-full bg-black rounded-[30px]">
            <img src="/images/industries/6.png" alt="" />

            <h6 className="text-white text-2xl font-medium">
              Internal and External Auditors
            </h6>
          </div>
          <div className="flex justify-start group-hover:opacity-100 duration-500 transition-all group-hover:bottom-0 items-center w-full p-5 bg-black rounded-[30px] h-full absolute left-0 opacity-0 -bottom-[100px]">
            <p className="text-white text-lg">
              Conduct thorough audits and maintain transparency.{" "}
            </p>
          </div>
          <div className="absolute rounded-[30px] -inset-[1px]  bg-gradient-to-br from-[#7BCBE8] via-[#8715E5] to-[#33FDFF] -z-20 "></div>
        </div>
      </div>
    </div>
  );
};

export default QoodoIndustries;
