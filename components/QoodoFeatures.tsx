"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

interface Point {
  title?: string;
  text: string;
}

// Define tab types
type Tab = "food" | "work" | "fire" | "monitor" | "customize" | "attendance";

// Define data structure
interface DataItem {
  title: string;
  desc: string;
  icon: string;
  points: Point[];
}
const QoodoFeatures: React.FC = () => {
  // State to track current tab
  const [tab, setTab] = useState<Tab>("food");

  // Data object containing feature information
  const DATA: Record<Tab, DataItem> = {
    food: {
      title: "Food Safety Tracking",
      desc: `Ensure full compliance with food safety regulations using Qoodo's comprehensive digital logs for critical control points, corrective actions, and sanitation procedures. Our solution supports HACCP, IFS, ISO 9001, and any other standards or internal and external policies.     Logs to be Filled Regularly:`,
      icon: "/images/features/1.png",

      points: [
        { text: "Temperature Logs" },
        { text: "Sanitation Logs" },
        { text: "Employee Training Logs" },
        { text: "Equipment Calibration Logs" },
        { text: "Pest Control Logs" },
        { text: "Allergen Control Logs" },
        { text: "Critical Control Point (CCP) Logs" },
        { text: "Water Quality and Testing Logs" },
        { text: "Incident and Corrective Action Logs" },
        { text: "Traceability Logs" },
        { text: "Consumer Complaint Logs" },
      ],
    },
    work: {
      title: "Work Safety Tracking",
      desc: "",
      icon: "/images/features/2.png",

      points: [
        {
          title: "Digital Safety Records:",
          text: "Track incidents, near misses, safety observations, and compliance with safety training requirements digitally through Qoodo`s robust work safety tracking",
        },

        {
          title: "Customizable Logs:",
          text: "Create and customize safety logs or checklists tailored to your organization`s specific safety protocols with ease.",
        },
      ],
    },

    fire: {
      title: "Work Safety Tracking",
      desc: "",
      icon: "/images/features/3.png",

      points: [
        {
          title: "Fire Safety Compliance:",
          text: "Ensure compliance with fire safety regulations using Qoodo`s fire safety tracking module. Log inspections, drills, incidents, and corrective actions digitally.",
        },

        {
          title: "Flexible Logging:",
          text: "Adapt fire safety protocols seamlessly with customizable logs and checklists within Qoodo.",
        },
      ],
    },

    monitor: {
      title: "Self-monitoring Plan Compliance",
      desc: "",
      icon: "/images/features/4.png",

      points: [
        {
          title: "Regulatory Compliance:",
          text: "Support compliance with Önellenőrzési Terv regulations through Qoodo`s digital recordkeeping and reporting capabilities. Manage regulatory documentation efficiently for audit readiness.",
        },

        {
          title: "Customizable Logs:",
          text: "Tailor protocols or checklists within Qoodo to meet Önellenőrzési Terv requirements effectively, ensuring compliance with local regulatory standards.",
        },
      ],
    },

    customize: {
      title: "Ease of Customization",
      desc: "",
      icon: "/images/features/5.png",

      points: [
        {
          title: "Create Custom Logs and Checklists:",
          text: "Easily create and customize logs, checklists, tasks, and protocols within Qoodo. Adapt templates quickly to meet evolving compliance needs and operational requirements.",
        },

        {
          title: "Flexible Audit Protocols:",
          text: "Empower your team with Qoodo`s flexible audit protocols and inspection systems. Customize audit templates to align with specific regulatory standards and organizational processes.",
        },
      ],
    },

    attendance: {
      title: "Attendance Tracking",
      desc: "",
      icon: "/images/features/6.png",

      points: [
        {
          title: "Employee Attendance Management",
          text: "Simplify attendance tracking with Qoodo’s digital solution. Monitor employee attendance, manage timesheets, and ensure compliance with labor regulations efficiently.",
        },

        {
          title: "Detailed Logs",
          text: "Maintain accurate and detailed attendance logs for better workforce management and audit readiness.",
        },
      ],
    },
  };

  // Refs for DOM elements
  const container = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const tab1 = useRef<HTMLDivElement>(null);
  const tab2 = useRef<HTMLDivElement>(null);
  const tab3 = useRef<HTMLDivElement>(null);
  const tab4 = useRef<HTMLDivElement>(null);
  const tab5 = useRef<HTMLDivElement>(null);
  const tab6 = useRef<HTMLDivElement>(null);

  const para = useRef<HTMLParagraphElement>(null);

  // Function to handle tab change
  const handleTabChange = (tabName: Tab) => {
    setTab(tabName);
  };

  return (
    <div className="py-[70px] gap-[70px] w-full md:px-[30px]">
      <h3 className="text-white text-3xl md:text-h3 text-center font-bold">
        Efficient Tools for Quality Management and Compliance
      </h3>

      <div
        ref={container}
        className="wrapper isolate py-[50px] xl:py-[100px] mt-[20px] relative"
      >
        <div className="contain flex flex-col xl:flex-row  justify-between gap-10 xl:gap-[100px] items-center xl:items-start">
          <div className="flex justify-start sm:w-auto w-full items-center xl:items-start flex-col gap-10 xl:gap-20">
            <h2
              ref={heading}
              className="text-3xl md:text-[50px]   font-bold text-white"
            >
              Features
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:flex justify-start  flex-row items-start xl:flex-col gap-5 w-full">
              <div
                ref={tab1}
                onClick={() => handleTabChange("food")}
                className={`flex rounded-full border-2 border-solid cursor-pointer transition-all duration-500 ${
                  tab === "food" ? "border-[#544683]" : "border-transparent"
                } px-5 w-full min-w-0 xl:min-w-[400px] mid:min-w-[460px] h-[72px]  justify-start items-center gap-5`}
              >
                <span className="text-lightPink font-bold text-lg xl:text-[24px]">
                  01
                </span>
                <span className="text-lightPink font-bold text-lg xl:text-[24px]">
                  -
                </span>
                <span className="text-white font-bold text-lg xl:text-[24px]">
                  Food Safety Tracking
                </span>
              </div>

              <div
                ref={tab2}
                onClick={() => handleTabChange("work")}
                className={`flex rounded-full border-2 border-solid cursor-pointer transition-all duration-500 ${
                  tab === "work" ? "border-[#544683]" : "border-transparent"
                } px-5 w-full min-w-0 xl:min-w-[400px] mid:min-w-[460px] h-[72px]  justify-start items-center gap-5`}
              >
                <span className="text-lightPink font-bold text-lg xl:text-[24px]">
                  02
                </span>
                <span className="text-lightPink font-bold text-lg xl:text-[24px]">
                  -
                </span>
                <span className="text-white font-bold text-lg xl:text-[24px]">
                  Work Safety Tracking
                </span>
              </div>

              <div
                ref={tab3}
                onClick={() => handleTabChange("fire")}
                className={`flex rounded-full border-2 border-solid cursor-pointer transition-all duration-500 ${
                  tab === "fire" ? "border-[#544683]" : "border-transparent"
                } px-5 w-full min-w-0 xl:min-w-[400px] mid:min-w-[460px] h-[72px]  justify-start items-center gap-5`}
              >
                <span className="text-lightPink font-bold text-lg xl:text-[24px]">
                  03
                </span>
                <span className="text-lightPink font-bold text-lg xl:text-[24px]">
                  -
                </span>
                <span className="text-white font-bold text-lg xl:text-[24px]">
                  Fire Safety Tracking
                </span>
              </div>

              <div
                ref={tab2}
                onClick={() => handleTabChange("monitor")}
                className={`flex rounded-full border-2 border-solid cursor-pointer transition-all duration-500 ${
                  tab === "monitor" ? "border-[#544683]" : "border-transparent"
                } px-5 w-full min-w-0 xl:min-w-[400px] mid:min-w-[460px] h-[72px]  justify-start items-center gap-5`}
              >
                <span className="text-lightPink font-bold text-lg xl:text-[24px]">
                  04
                </span>
                <span className="text-lightPink font-bold text-lg xl:text-[24px]">
                  -
                </span>
                <span className="text-white font-bold text-lg xl:text-[24px]">
                  Self-monitoring Plan Compliance
                </span>
              </div>

              <div
                ref={tab2}
                onClick={() => handleTabChange("customize")}
                className={`flex rounded-full border-2 border-solid cursor-pointer transition-all duration-500 ${
                  tab === "customize"
                    ? "border-[#544683]"
                    : "border-transparent"
                } px-5 w-full min-w-0 xl:min-w-[400px] mid:min-w-[460px] h-[72px]  justify-start items-center gap-5`}
              >
                <span className="text-lightPink font-bold text-lg xl:text-[24px]">
                  05
                </span>
                <span className="text-lightPink font-bold text-lg xl:text-[24px]">
                  -
                </span>
                <span className="text-white font-bold text-lg xl:text-[24px]">
                  Ease of Customization
                </span>
              </div>

              <div
                ref={tab2}
                onClick={() => handleTabChange("attendance")}
                className={`flex rounded-full border-2 border-solid cursor-pointer transition-all duration-500 ${
                  tab === "attendance"
                    ? "border-[#544683]"
                    : "border-transparent"
                } px-5 w-full min-w-0 xl:min-w-[400px] mid:min-w-[460px] h-[72px]  justify-start items-center gap-5`}
              >
                <span className="text-lightPink font-bold text-lg xl:text-[24px]">
                  06
                </span>
                <span className="text-lightPink font-bold text-lg xl:text-[24px]">
                  -
                </span>
                <span className="text-white font-bold text-lg xl:text-[24px]">
                  Attendance Tracking
                </span>
              </div>
            </div>
          </div>

          {/* Tab data */}
          <div className="flex justify-start items-center xl:items-start pt-[60px] flex-col  gap-10  w-full">
            {/* Title and Description */}

            <h2
              ref={heading}
              className="text-3xl md:text-[50px]  font-bold text-white"
            >
              {DATA[tab].title}
            </h2>

            {DATA[tab].desc && (
              <>
                <p
                  ref={para}
                  className="text-[16px] text-center md:text-start md:text-xl font-semibold text-white"
                >
                  {DATA[tab].desc}
                </p>
              </>
            )}
            <ul className="flex md:flex-col flex-wrap list-none justify-start items-center md:items-start gap-5">
              {/* Map through points */}
              {DATA[tab].points.map((point, idx) => (
                <li
                  className="text-[18px] md:text-[24px] font-semibold text-[#B3B3B3] flex items-start gap-4"
                  key={idx}
                >
                  <Image
                    src={DATA[tab].icon}
                    alt="Bullet Point Icon"
                    width={32}
                    height={32}
                  />
                  <div>
                    {point.title && (
                      <h3 className="text-white font-semibold">
                        {point.title}
                      </h3>
                    )}
                    {point.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QoodoFeatures;
