import React from "react";
import Image from "next/image";
import { TFunction } from "i18next";

interface AuditProps {
  t: TFunction<["translation", ...string[]], undefined>;
}
const QoodoAudit: React.FC<AuditProps> = ({ t }) => {
  return (
    <div className="flex flex-col py-[50px]  w-full">
      {/*Log Feature Style 1*/}
      <div className="px-3 sm:px-0 md:px-[100px] py-[50px] flex justify-center ">
        <div className="flex  flex-col lg:flex-row md:justify-between items-center  gap-[20px] md:gap-[100px] max-w-[1440px]">
          <div className="w-full flex flex-col justify-center items-center lg:items-start gap-5 text-center lg:text-start">
            <div className="p-[10px] bg-[#222222] border border-[#4A60FF]  rounded-full text-white font-semibold text-[14px] md:text-[16px]">
              {t("Build Custom Checklists")}
            </div>

            <h3 className="text-white heading3">
              {t("Create Tailored Checklists")}
            </h3>
            <p className="text-[16px] md:text-xl font-gilroy font-medium ">
              {t(
                "Transform your current paper or digital checklists into dynamic digital forms with our intuitive builder. Add custom fields and criteria to suit your unique inspection needs."
              )}
            </p>
          </div>

          <Image
            src={"/images/audit/1.png"}
            width={700}
            height={1}
            alt="Log"
            className=" lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
            layout="responsive"
          />
        </div>
      </div>

      {/*Log Feature Style 2*/}
      <div className="px-3 sm:px-0 md:px-[100px] py-[50px]  bg-opacity-10 bg-gradient-to-b from-black-100 via-[#4a60ff]/30 to-black-100  flex justify-center">
        <div className="flex  flex-col-reverse lg:flex-row md:justify-between items-center  gap-[20px] md:gap-[100px] max-w-[1440px]">
          <Image
            src={"/images/audit/2.png"}
            width={700}
            height={1}
            alt="Log"
            className=" lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
            layout="responsive"
          />

          <div className="w-full flex flex-col justify-center items-center  lg:items-start gap-5 text-center lg:text-start">
            {/*Small Gradient badge*/}
            <div className="h-9 p-2.5 bg-white/10 rounded-[99px] border border-[#4A60FF] justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-[14px] md:text-[16px] font-semibold font-['Gilroy'] leading-none">
                {t("Conduct Comprehensive Inspections")}
              </div>
            </div>
            <h3 className="text-white heading3">
              {t("Perform Detailed Inspections")}
            </h3>
            <div className="text-[16px] md:text-xl font-gilroy font-medium">
              {t(
                "Utilize mobile or desktop devices to perform thorough inspections. Ensure compliance with various standards like HACCP, ISO 9001, and local regulations."
              )}
            </div>
          </div>
        </div>
      </div>

      {/*Log Feature Style 1*/}
      <div className="px-3 sm:px-0 md:px-[100px] py-[50px] flex justify-center ">
        <div className="flex  flex-col lg:flex-row md:justify-between items-center  gap-[20px] md:gap-[100px] max-w-[1440px]">
          <div className="w-full flex flex-col justify-center items-center lg:items-start gap-5 text-center lg:text-start">
            <div className="p-[10px] bg-[#222222] border border-[#4A60FF]  rounded-full text-white font-semibold text-[14px] md:text-[16px]">
              {t("Track Incidents Effectively")}
            </div>

            <h3 className="text-white heading3">
              {t("Manage Incident Tracking")}
            </h3>
            <p className="text-[16px] md:text-xl font-gilroy font-medium ">
              {t(
                "Record and track incidents directly from inspection findings. Prioritize and address issues promptly to maintain safety and compliance."
              )}
            </p>
          </div>

          <Image
            src={"/images/audit/3.png"}
            width={700}
            height={1}
            alt="Log"
            className=" lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
            layout="responsive"
          />
        </div>
      </div>

      {/*Log Feature Style 2*/}
      <div className="px-3 sm:px-0 md:px-[100px] py-[50px]  bg-opacity-10 bg-gradient-to-b from-black-100 via-[#4a60ff]/30 to-black-100  flex justify-center">
        <div className="flex  flex-col-reverse lg:flex-row md:justify-between items-center  gap-[20px] md:gap-[100px] max-w-[1440px]">
          <Image
            src={"/images/audit/4.png"}
            width={700}
            height={1}
            alt="Log"
            className=" lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
            layout="responsive"
          />

          <div className="w-full flex flex-col justify-center items-center lg:items-start gap-5 text-center lg:text-start">
            {/*Small Gradient badge*/}
            <div className="h-9 p-2.5 bg-white/10 rounded-[99px] border border-[#4A60FF] justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-[14px] md:text-[16px] font-semibold font-['Gilroy'] leading-none">
                {t("Generate Professional Reports")}{" "}
              </div>
            </div>
            <h3 className="text-white heading3">
              {t("Produce Detailed Reports")}
            </h3>
            <div className="text-[16px] md:text-xl font-gilroy font-medium">
              {t(
                "Automatically generate comprehensive reports after inspections. Customize the layout to include branding and essential information, and share them easily with stakeholders."
              )}
            </div>
          </div>
        </div>
      </div>

      {/*Log Feature Style 1*/}
      <div className="px-3 sm:px-0 md:px-[100px] py-[50px] flex justify-center ">
        <div className="flex  flex-col lg:flex-row md:justify-between items-center  gap-[20px] md:gap-[100px] max-w-[1440px]">
          <div className="w-full flex flex-col justify-center items-center lg:items-start gap-5 text-center lg:text-start">
            <div className="p-[10px] bg-[#222222] border border-[#4A60FF]  rounded-full text-white font-semibold text-[14px] md:text-[16px]">
              {t("Assign Audits")}{" "}
            </div>

            <h3 className="text-white heading3">
              {t("Efficiently Assign Tasks to Team Members")}
            </h3>
            <p className="text-[16px] md:text-xl font-gilroy font-medium ">
              {t(
                "Allocate specific tasks and inspections to team members based on their roles and responsibilities. Ensure everyone knows their duties and deadlines."
              )}
            </p>
          </div>

          <Image
            src={"/images/audit/5.png"}
            width={700}
            height={1}
            alt="Log"
            className=" lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
            layout="responsive"
          />
        </div>
      </div>

      {/*Log Feature Style 2*/}
      <div className="px-3 sm:px-0 md:px-[100px] py-[50px]  bg-opacity-10 bg-gradient-to-b from-black-100 via-[#4a60ff]/30 to-black-100  flex justify-center">
        <div className="flex  flex-col-reverse lg:flex-row md:justify-between items-center  gap-[20px] md:gap-[100px] max-w-[1440px]">
          <Image
            src={"/images/audit/6.png"}
            width={700}
            height={1}
            alt="Log"
            className=" lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
            layout="responsive"
          />

          <div className="w-full flex flex-col justify-center items-center lg:items-start gap-5 text-center lg:text-start">
            {/*Small Gradient badge*/}
            <div className="h-9 p-2.5 bg-white/10 rounded-[99px] border border-[#4A60FF] justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-[14px] md:text-[16px] font-semibold font-['Gilroy'] leading-none">
                {t("Monitor and Analyze Performance")}
              </div>
            </div>
            <h3 className="text-white heading3">
              {t("Gain Insight with Analytics")}
            </h3>
            <div className="text-[16px] md:text-xl font-gilroy font-medium">
              {t(
                "Access real-time dashboards to monitor performance, identify trends, and ensure compliance. Utilize data to make informed decisions and improve processes."
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QoodoAudit;
