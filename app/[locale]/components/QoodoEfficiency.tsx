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
  const { t } = useTranslation();
  // State for selected tab and progress values
  const [selectedTab, setSelectedTab] = useState<string>("time");
  const [progressValues] = useState<ProgressValues>({
    time: [20, 40, 85],
    efficiency: [0, 50, 95],
    compliance: [20, 60, 99],
  });

  const tabTexts: TabTexts = {
    time: t("85% Time Savings in quality management with Qoodo."),
    efficiency: t(
      "95% Efficiency and Productivity in quality management with Qoodo."
    ),
    compliance: t(
      "99% Regulatory compliance in quality management with Qoodo."
    ),
  };

  // Handle tab change
  const handleTabChange = (key: React.Key) => {
    setSelectedTab(key as string); // Convert React.Key to string
  };

  return (
    <div className="w-full flex justify-center items-center px-5 py-14">
      <div className="w-[1400px] py-12  overflow-hidden px-5 sm:px-14 bg-[#4a60ff] rounded-[50px] lg:rounded-[180px] ">
        <div className="flex flex-col w-full justify-center items-center">
          <h3 className="text-white text-3xl md:text-h3 text-center font-bold mb-[20px]">
            {t("Qoodo: The Smart Choice")}
          </h3>
          <p className="subtitle text-[#E4ECFF] text-center mb-[30px]">
            {t("Experience the Advantages of Our System")}
          </p>
        </div>

        <div className="py-10 w-full">
          <div className="flex w-full flex-col pb-20">
            <Tabs
              aria-label="Options"
              color="primary"
              variant="underlined"
              onSelectionChange={handleTabChange} // Handle tab changes
              classNames={{
                tabList:
                  "gap-2 sm:gap-10 xl:gap-32 w-full relative rounded-none px-2 flex justify-center",
                cursor: " w-full bg-[#FFFFFF] h-2 rounded-full ",
                tab: "max-w-fit px-0 h-12 flex items-center justify-center text-white-100 hover:text-[#000] font-semibold whitespace-normal text-center",
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
                  indicator: "stroke-red-500",
                  track: "stroke-red-500/20",
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
                  indicator: "stroke-[#FFFFFF]",
                  track: "stroke-[#FFFFFF]/20",
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
    </div>
  );
};

export default QoodoEfficiency;
