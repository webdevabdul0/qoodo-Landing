import React from "react";
import { qoodoStandards } from "@/app/[locale]/data";
import { Button } from "./ui/MovingBorders";

const QoodoStandards = () => {
  return (
    <div className="py-[70px] w-full px-[20px] md:px-[100px] flex flex-col justify-center items-center">
      <h3 className="heading3 text-center mb-[50px]">Standards We Support</h3>

      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-10">
        {qoodoStandards.map((card) => (
          <Button
            key={card.title}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgba(12, 14, 35, 1)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1  justify-start text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col p-4 md:p-6 lg:p-10 gap-8 ">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-20 md:w-20 w-16"
              />
              <div className="lg:ms-5 flex-1">
                <h1 className="text-start text-[20px] md:text-[22px] font-semibold text-white">
                  {card.title}
                </h1>
                <p className="text-start text-[#BEC1DD] mt-3 font-regular text-[16px] md:text-[18px]">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QoodoStandards;
