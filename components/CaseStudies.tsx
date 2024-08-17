"use client";
import React from "react";
import { companies, testimonials } from "@/data";
import { ScrollableCards } from "./ui/InfiniteCards";

const CaseStudies = () => {
  return (
    <div className="px-[50px] py-[50px] md:py-[130px] relative z-10">
      <div className="text-center w-full flex flex-col justify-center items-center relative">
        <h3 className="heading2 mb-[20px]">Case Studies</h3>

        <p className="subtitle text-[#E4ECFF] ">
          Learn how Qoodo has helped businesses achieve their quality management
          goals.
        </p>
      </div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <ScrollableCards items={testimonials} />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
