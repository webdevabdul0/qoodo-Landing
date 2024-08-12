"use client";

import React from "react";
import { CircularProgress } from "@nextui-org/progress";
import { Chip } from "@nextui-org/react";
import { GalleryIcon } from "./ui/GalleryIcon";
import { Tabs, Tab } from "@nextui-org/tabs";

const QoodoEfficiency = () => {
  return (
    <div className="w-full py-[100px]  bg-black-100">
      <div className="flex  flex-col mb-20 w-full justify-center items-center">
        <h3 className="text-white text-3xl md:text-h3 text-center  font-bold mb-[20px]">
          Qoodo: The Smart Choice
        </h3>
        <p className="subtitle text-[#E4ECFF] text-center mb-[30px]">
          Experience the Advantages of Our System
        </p>
      </div>

      <div className="bg-opacity-5 bg-gradient-to-b from-black-100 via-[#4a60ff]/20 to-black-100">
        <div className="flex w-full flex-col pb-20">
          <Tabs
            aria-label="Options"
            color="primary"
            variant="underlined"
            classNames={{
              tabList:
                "gap-20 w-full relative rounded-none p-0 flex justify-center",
              cursor: "w-full bg-[#4A60FF] h-2 rounded-full",
              tab: "max-w-fit px-0 h-12 flex items-center justify-center text-[#4A60FF] hover:text-[#000] font-semibold",
              tabContent: "group-data-[selected=true]:text-[#4A60FF] text-lg",
            }}
          >
            <Tab
              key="photos"
              title={
                <div className="flex items-center space-x-2">
                  <span>Time saving</span>
                </div>
              }
            />
            <Tab
              key="music"
              title={
                <div className="flex items-center space-x-2">
                  <span>Efficiency and Productivity</span>
                </div>
              }
            />
            <Tab
              key="videos"
              title={
                <div className="flex items-center space-x-2">
                  <span>Regulatory compliance</span>
                </div>
              }
            />
          </Tabs>
        </div>

        <div className="flex justify-around flex-row items-center">
          <div className="flex flex-col items-center justify-center">
            {" "}
            <CircularProgress
              classNames={{
                svg: "w-52 h-52 drop-shadow-md",
                indicator: "stroke-red-700",
                track: "stroke-red-700/20",
                value: "text-3xl font-semibold text-white",
              }}
              value={20}
              strokeWidth={3}
              showValueLabel={true}
            />
            <h3 className="text-2xl font-gilroy font-semibold text-white text-center mt-4">
              Paper - based documentation
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            {" "}
            <CircularProgress
              classNames={{
                svg: "w-52 h-52 drop-shadow-md",
                indicator: "stroke-[#FF9978]",
                track: "stroke-[#FF9978]/20",
                value: "text-3xl font-semibold text-white",
              }}
              value={20}
              strokeWidth={3}
              showValueLabel={true}
            />
            <h3 className="text-2xl font-gilroy font-semibold text-white text-center mt-4">
              Other platforms
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center">
            {" "}
            <CircularProgress
              classNames={{
                svg: "w-52 h-52 drop-shadow-md",
                indicator: "stroke-[#4A60FF]",
                track: "stroke-[#4A60FF]/20",
                value: "text-3xl font-semibold text-white",
              }}
              value={20}
              strokeWidth={3}
              showValueLabel={true}
            />
            <h3 className="text-2xl font-gilroy font-semibold text-white text-center mt-4">
              Qoodo
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QoodoEfficiency;
