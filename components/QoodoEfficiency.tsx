"use client";

import React, { useState } from "react";
import { CircularProgress } from "@nextui-org/progress";
import { Tabs, Tab } from "@nextui-org/tabs";

// Define types for the progress values
type ProgressValues = {
  [key: string]: number[];
};

const QoodoEfficiency: React.FC = () => {
  // State for selected tab and progress values
  const [selectedTab, setSelectedTab] = useState<string>("time");
  const [progressValues] = useState<ProgressValues>({
    time: [20, 40, 85],
    efficiency: [0, 50, 95],
    compliance: [20, 60, 95],
  });

  // Handle tab change
  const handleTabChange = (key: React.Key) => {
    setSelectedTab(key as string); // Convert React.Key to string
  };

  return (
    <div className="w-full py-[100px] bg-black-100">
      <div className="flex flex-col mb-20 w-full justify-center items-center">
        <h3 className="text-white text-3xl md:text-h3 text-center font-bold mb-[20px]">
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
            onSelectionChange={handleTabChange} // Handle tab changes
            classNames={{
              tabList:
                "gap-1 sm:gap-10 xl:gap-32 w-full relative rounded-none p-0 flex justify-center",
              cursor: " w-full bg-[#4A60FF] h-2 rounded-full ",
              tab: "max-w-fit px-0 h-12 flex items-center justify-center text-[#4A60FF] hover:text-[#000] font-semibold",
              tabContent:
                "group-data-[selected=true]:text-[#FFFFFF] text-[12px] sm:text-xl",
            }}
          >
            <Tab
              key="time"
              title={
                <div className="flex items-center space-x-2">
                  <span>Time saving</span>
                </div>
              }
            />
            <Tab
              key="efficiency"
              title={
                <div className="flex items-center space-x-2">
                  <span>Efficiency and Productivity</span>
                </div>
              }
            />
            <Tab
              key="compliance"
              title={
                <div className="flex items-center space-x-2">
                  <span>Regulatory compliance</span>
                </div>
              }
            />
          </Tabs>
        </div>

        <div className=" flex gap-20 justify-center  md:justify-around flex-col md:flex-row items-center">
          <div className="flex flex-col items-center justify-center">
            <CircularProgress
              classNames={{
                svg: "w-52 h-52 drop-shadow-md",
                indicator: "stroke-red-700",
                track: "stroke-red-700/20",
                value: "text-3xl font-semibold text-white",
              }}
              value={progressValues[selectedTab][0]} // Use the first value for the selected tab
              strokeWidth={3}
              showValueLabel={true}
            />
            <h3 className="text-2xl font-gilroy font-semibold text-white text-center mt-4">
              Paper - based <br /> documentation
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <CircularProgress
              classNames={{
                svg: "w-52 h-52 drop-shadow-md",
                indicator: "stroke-[#FF9978]",
                track: "stroke-[#FF9978]/20",
                value: "text-3xl font-semibold text-white",
              }}
              value={progressValues[selectedTab][1]} // Use the second value for the selected tab
              strokeWidth={3}
              showValueLabel={true}
            />
            <h3 className="text-2xl font-gilroy font-semibold text-white text-center mt-4">
              Other platforms
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center">
            <CircularProgress
              classNames={{
                svg: "w-52 h-52 drop-shadow-md",
                indicator: "stroke-[#4A60FF]",
                track: "stroke-[#4A60FF]/20",
                value: "text-3xl font-semibold text-white",
              }}
              value={progressValues[selectedTab][2]} // Use the third value for the selected tab
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
