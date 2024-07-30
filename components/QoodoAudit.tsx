import React from "react";
import Image from "next/image";

const QoodoAudit = () => {
  return (
    <div className="bg-black-Dark w-100 flex flex-col py-[50px] px-[10px] md:px-0">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        {/*Small Gradient badge*/}
        <div className="rounded-full p-[1px] bg-gradient-to-br from-[#7BCBE8] w-fit via-[#8715E5] to-[#33FDFF]">
          <div className="p-[10px] bg-[#222222]   rounded-full text-white font-semibold text-[14px] md:text-[16px]">
            Qoodo Audit
          </div>
        </div>
        <h3 className="text-white heading3 ">
          One-Click Auditing with Qoodo Audit
        </h3>
        <p className="subtitle text-center ">
          {" "}
          Easily and efficiently conduct audits with our automated, intelligent
          tool.
        </p>
      </div>

      {/*Audit Feature Style 1*/}
      <div className="px-0 md:px-[100px] gap-[20px] md:gap-[100px] py-[50px] flex flex-col lg:flex-row md:justify-between items-center ">
        <div className="w-full flex flex-col justify-center items-center md:items-start gap-5 text-center md:text-start">
          <div className="rounded-full p-[1px] bg-gradient-to-br from-[#7BCBE8] w-fit via-[#8715E5] to-[#33FDFF]">
            <div className="p-[10px] bg-[#222222]   rounded-full text-white font-semibold text-[14px] md:text-[16px]">
              Build Custom Checklists
            </div>
          </div>
          <h3 className="text-white heading3">Create Tailored Checklists</h3>
          <p className="subtitle ">
            Transform your current paper or digital checklists into dynamic
            digital forms with our intuitive builder. Add custom fields and
            criteria to suit your unique inspection needs.
          </p>
        </div>

        <Image
          src={"/images/audit/1.png"}
          width={620}
          height={500}
          alt="Audit-1"
        />
      </div>

      {/*Audit Feature Style 2*/}
      <div className=" px-0 md:px-[100px] py-[100px]  bg-opacity-10 bg-gradient-to-b from-neutral-950 via-[#4a60ff]/30 to-neutral-950  flex flex-col lg:flex-row md:justify-between items-center  gap-[20px] md:gap-[100px] ">
        <Image
          src={"/images/audit/2.png"}
          width={620}
          height={500}
          alt="Audit-2"
        />

        <div className="w-full flex flex-col justify-center items-center md:items-start gap-5 text-center md:text-start">
          {/*Small Gradient badge*/}
          <div className="h-9 p-2.5 bg-white/10 rounded-[99px] border border-[#7bcbe8] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-[14px] md:text-[16px] font-semibold font-['Gilroy'] leading-none">
              Conduct Comprehensive Inspections
            </div>
          </div>
          <h3 className="text-white heading3">Perform Detailed Inspections</h3>
          <div className="subtitle">
            Utilize mobile or desktop devices to perform thorough inspections.
            Ensure compliance with various standards like HACCP, ISO 9001, and
            local regulations.
          </div>
        </div>
      </div>

      {/*Audit Feature Style 1*/}
      <div className="px-0 md:px-[100px] gap-[20px] md:gap-[100px] py-[50px] flex flex-col lg:flex-row md:justify-between items-center  ">
        <div className="w-full flex flex-col justify-center items-center md:items-start gap-5 text-center md:text-start">
          <div className="rounded-full p-[1px] bg-gradient-to-br from-[#7BCBE8] w-fit via-[#8715E5] to-[#33FDFF]">
            <div className="p-[10px] bg-[#222222]   rounded-full text-white font-semibold text-[14px] md:text-[16px]">
              Track Incidents Effectively
            </div>
          </div>
          <h3 className="text-white heading3">Manage Incident Tracking</h3>
          <p className="subtitle ">
            Record and track incidents directly from inspection findings.
            Prioritize and address issues promptly to maintain safety and
            compliance.
          </p>
        </div>

        <Image
          src={"/images/audit/3.png"}
          width={620}
          height={500}
          alt="Audit-3"
        />
      </div>

      {/*Audit Feature Style 2*/}
      <div className=" px-0 md:px-[100px] py-[100px]  bg-opacity-10 bg-gradient-to-b from-neutral-950 via-[#4a60ff]/30 to-neutral-950  flex flex-col lg:flex-row md:justify-between items-center  gap-[20px] md:gap-[100px] ">
        <Image
          src={"/images/audit/4.png"}
          width={620}
          height={500}
          alt="Audit-4"
        />

        <div className="w-full flex flex-col justify-center items-center md:items-start gap-5 text-center md:text-start">
          {/*Small Gradient badge*/}
          <div className="h-9 p-2.5 bg-white/10 rounded-[99px] border border-[#7bcbe8] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-[14px] md:text-[16px] font-semibold font-['Gilroy'] leading-none">
              Generate Professional Reports
            </div>
          </div>
          <h3 className="text-white heading3">Produce Detailed Reports</h3>
          <div className="subtitle">
            Automatically generate comprehensive reports after inspections.
            Customize the layout to include branding and essential information,
            and share them easily with stakeholders.
          </div>
        </div>
      </div>

      {/*Audit Feature Style 1*/}
      <div className="px-0 md:px-[100px] gap-[20px] md:gap-[100px] py-[50px] flex flex-col lg:flex-row md:justify-between items-center">
        <div className="w-full flex flex-col justify-center items-center md:items-start gap-5 text-center md:text-start">
          <div className="rounded-full p-[1px] bg-gradient-to-br from-[#7BCBE8] w-fit via-[#8715E5] to-[#33FDFF]">
            <div className="p-[10px] bg-[#222222]   rounded-full text-white font-semibold text-[14px] md:text-[16px]">
              Assign Team Members
            </div>
          </div>
          <h3 className="text-white heading3">
            Efficiently Assign Tasks to Team Members
          </h3>
          <p className="subtitle ">
            Allocate specific tasks and inspections to team members based on
            their roles and responsibilities. Ensure everyone knows their duties
            and deadlines.
          </p>
        </div>

        <Image
          src={"/images/audit/5.png"}
          width={620}
          height={500}
          alt="Audit-5"
        />
      </div>

      {/*Audit Feature Style 2*/}
      <div className=" px-0 md:px-[100px] py-[100px]  bg-opacity-10 bg-gradient-to-b from-neutral-950 via-[#4a60ff]/30 to-neutral-950  flex flex-col lg:flex-row md:justify-between items-center  gap-[20px] md:gap-[100px] ">
        <Image
          src={"/images/audit/6.png"}
          width={620}
          height={500}
          alt="Audit-6"
        />

        <div className="w-full flex flex-col justify-center items-center md:items-start gap-5 text-center md:text-start">
          {/*Small Gradient badge*/}
          <div className="h-9 p-2.5 bg-white/10 rounded-[99px] border border-[#7bcbe8] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-[14px] md:text-[16px] font-semibold font-['Gilroy'] leading-none">
              Monitor and Analyze Performance
            </div>
          </div>
          <h3 className="text-white heading3">Gain Insight with Analytics</h3>
          <div className="subtitle">
            Access real-time dashboards to monitor performance, identify trends,
            and ensure compliance. Utilize data to make informed decisions and
            improve processes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default QoodoAudit;
