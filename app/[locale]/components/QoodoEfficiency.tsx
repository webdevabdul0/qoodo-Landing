"use client";

import React, { useState } from "react";
import { CircularProgress } from "@nextui-org/progress";
import { Tabs, Tab } from "@nextui-org/tabs";
import { useTranslation } from "react-i18next";

// Define types for the progress values and corresponding texts
type ProgressValues = {
  [key: string]: number[];
};

type TabTexts = {
  [key: string]: string;
};

const QoodoEfficiency: React.FC = () => {
  // State for selected tab and progress values
  const [selectedTab, setSelectedTab] = useState<string>("time");
  const [progressValues] = useState<ProgressValues>({
    time: [20, 40, 85],
    efficiency: [0, 50, 95],
    compliance: [20, 60, 95],
  });

  const tabTexts: TabTexts = {
    time: "85% Time Savings in quality management with Qoodo.",
    efficiency:
      "95% Efficiency and Productivity in quality management with Qoodo.",
    compliance: "95% Regulatory compliance in quality management with Qoodo.",
  };

  // Handle tab change
  const handleTabChange = (key: React.Key) => {
    setSelectedTab(key as string); // Convert React.Key to string
  };

  const { t } = useTranslation();

  return (
    <div className="w-full py-[100px] bg-black-100">
      <div className="flex flex-col w-full justify-center items-center">
        <h3 className="text-white text-3xl md:text-h3 text-center font-bold mb-[20px]">
          {t("Qoodo: The Smart Choice")}
        </h3>
        <p className="subtitle text-[#E4ECFF] text-center mb-[30px]">
          {t("Experience the Advantages of Our System")}
        </p>
      </div>

      <div className="bg-opacity-5 bg-gradient-to-b from-black-100 via-[#4a60ff]/20 to-black-100 py-12">
        <div className="flex w-full flex-col pb-20">
          <Tabs
            aria-label="Options"
            color="primary"
            variant="underlined"
            onSelectionChange={handleTabChange} // Handle tab changes
            classNames={{
              tabList:
                "gap-2 sm:gap-10 xl:gap-32 w-full relative rounded-none px-2 flex justify-center",
              cursor: " w-full bg-[#4A60FF] h-2 rounded-full ",
              tab: "max-w-fit px-0 h-12 flex items-center justify-center text-[#4A60FF] hover:text-[#000] font-semibold whitespace-normal text-center",
              tabContent:
                "group-data-[selected=true]:text-[#FFFFFF] text-sm sm:text-base md:text-xl",
            }}
          >
            <Tab
              key="time"
              title={
                <div className="flex items-center space-x-2">
                  <span className=" text-wrap pb-2">{t("Time saving")}</span>
                </div>
              }
            />
            <Tab
              key="efficiency"
              title={
                <div className="flex items-center space-x-2">
                  <span className=" text-wrap pb-2">
                    {t("Efficiency and Productivity")}
                  </span>
                </div>
              }
            />
            <Tab
              key="compliance"
              title={
                <div className="flex items-center space-x-2">
                  <span className=" text-wrap pb-2">
                    {t("Regulatory compliance")}
                  </span>
                </div>
              }
            />
          </Tabs>
        </div>

        <div className=" px-2 sm:px-5 md:px-10 flex justify-around items-center">
          <div className="flex flex-col items-center justify-center">
            <CircularProgress
              classNames={{
                svg: "w-24 h-24 sm:w-28 sm:h-28 md:w-52 md:h-52 drop-shadow-md",
                indicator: "stroke-red-700",
                track: "stroke-red-700/20",
                value:
                  "text-sm sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white",
              }}
              value={progressValues[selectedTab][0]} // Use the first value for the selected tab
              strokeWidth={3}
              showValueLabel={true}
            />
            <h3 className=" text-base sm:text-lg md:text-2xl font-gilroy font-semibold text-white text-center mt-4">
              {t("Paper - based")}
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <CircularProgress
              classNames={{
                svg: "w-24 h-24 sm:w-28 sm:h-28 md:w-52 md:h-52 drop-shadow-md",
                indicator: "stroke-[#FF9978]",
                track: "stroke-[#FF9978]/20",
                value:
                  "text-sm sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white",
              }}
              value={progressValues[selectedTab][1]} // Use the second value for the selected tab
              strokeWidth={3}
              showValueLabel={true}
            />
            <h3 className="text-base sm:text-lg md:text-2xl font-gilroy font-semibold text-white text-center mt-4">
              {t("Other platforms")}
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center">
            <CircularProgress
              classNames={{
                svg: "w-24 h-24 sm:w-28 sm:h-28 md:w-52 md:h-52 drop-shadow-md",
                indicator: "stroke-[#4A60FF]",
                track: "stroke-[#4A60FF]/20",
                value:
                  "text-sm sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white",
              }}
              value={progressValues[selectedTab][2]} // Use the third value for the selected tab
              strokeWidth={3}
              showValueLabel={true}
            />
            <h3 className="text-base sm:text-lg md:text-2xl font-gilroy font-semibold text-white text-center mt-4">
              {t("Qoodo")}
            </h3>
          </div>
        </div>
      </div>

      {/* Conditional rendering of the text based on the selected tab */}
      <p className="subtitle text-[#E4ECFF] text-center mt-5">
        {tabTexts[selectedTab]}
      </p>
    </div>
  );
};

export default QoodoEfficiency;
