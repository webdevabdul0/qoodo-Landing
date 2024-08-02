import React from "react";
import Image from "next/image";

const QoodoLogs = () => {
  return (
    <div className="bg-black-Dark w-100 flex flex-col py-[50px] px-[10px] md:px-0">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        {/*Small Gradient badge*/}
        <div className="rounded-full p-[1px] bg-gradient-to-br from-[#7BCBE8] w-fit via-[#8715E5] to-[#33FDFF]">
          <div className="p-[10px] bg-[#222222]   rounded-full text-white font-semibold text-[14px] md:text-[16px]">
            Qoodo Logs
          </div>
        </div>
        <h3 className="text-white heading3 ">
          Digital Logging for control and efficiency
        </h3>
        <p className="subtitle text-center ">
          {" "}
          Simplify and Streamline Your Logging Process
        </p>
      </div>

      {/*Log Feature Style 2*/}
      <div className=" px-0 md:px-[100px] py-[50px]  bg-opacity-10 bg-gradient-to-b from-neutral-950 via-[#4a60ff]/30 to-neutral-950  flex  flex-col-reverse lg:flex-row md:justify-between items-center  gap-[20px] md:gap-[100px] ">
        <Image src={"/images/Log/2.png"} width={1500} height={1} alt="Log" />

        <div className="w-full flex flex-col justify-center items-center  lg:items-start gap-5 text-center lg:text-start">
          {/*Small Gradient badge*/}
          <div className="h-9 p-2.5 bg-white/10 rounded-[99px] border border-[#7bcbe8] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-[14px] md:text-[16px] font-semibold font-['Gilroy'] leading-none">
              Starting Your logs
            </div>
          </div>
          <h3 className="text-white heading3">Initiating Logs</h3>
          <div className="subtitle">
            Start your logging process by selecting the appropriate log. Each
            log has a dedicated page for easy data entry and management.
          </div>
        </div>
      </div>

      {/*Log Feature Style 1*/}
      <div className="px-0 md:px-[100px] gap-[20px] md:gap-[100px] py-[50px] flex flex-col lg:flex-row md:justify-between items-center  ">
        <div className="w-full flex flex-col justify-center items-center lg:items-start gap-5 text-center lg:text-start">
          <div className="rounded-full p-[1px] bg-gradient-to-br from-[#7BCBE8] w-fit via-[#8715E5] to-[#33FDFF]">
            <div className="p-[10px] bg-[#222222]   rounded-full text-white font-semibold text-[14px] md:text-[16px]">
              Log Entry Review
            </div>
          </div>
          <h3 className="text-white heading3">Signing and Saving Logs:</h3>
          <p className="subtitle ">
            Easily input and save log data for efficient tracking.
          </p>
        </div>

        <Image
          src={"/images/Log/3.png"}
          width={900}
          height={500}
          alt="Log"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {/*Log Feature Style 2*/}
      <div className=" px-0 md:px-[100px] py-[50px]  bg-opacity-10 bg-gradient-to-b from-neutral-950 via-[#4a60ff]/30 to-neutral-950  flex flex-col-reverse lg:flex-row md:justify-between items-center  gap-[20px] md:gap-[100px] ">
        <Image
          src={"/images/Log/4.png"}
          width={900}
          height={500}
          alt="Log"
          style={{ width: "100%", height: "auto" }}
        />

        <div className="w-full flex flex-col justify-center items-center lg:items-start gap-5 text-center lg:text-start">
          {/*Small Gradient badge*/}
          <div className="h-9 p-2.5 bg-white/10 rounded-[99px] border border-[#7bcbe8] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-[14px] md:text-[16px] font-semibold font-['Gilroy'] leading-none">
              Log Assignment{" "}
            </div>
          </div>
          <h3 className="text-white heading3">Assign logs</h3>
          <div className="subtitle">
            Assign logs as tasks to team members, with notifications to keep
            everyone on track.
          </div>
        </div>
      </div>

      {/*Log Feature Style 1*/}
      <div className="px-0 md:px-[100px] gap-[20px] md:gap-[100px] py-[50px] flex flex-col lg:flex-row md:justify-between items-center">
        <div className="w-full flex flex-col justify-center items-center lg:items-start gap-5 text-center lg:text-start">
          <div className="rounded-full p-[1px] bg-gradient-to-br from-[#7BCBE8] w-fit via-[#8715E5] to-[#33FDFF]">
            <div className="p-[10px] bg-[#222222]   rounded-full text-white font-semibold text-[14px] md:text-[16px]">
              Log Export{" "}
            </div>
          </div>
          <h3 className="text-white heading3">Exporting Logs</h3>
          <p className="subtitle ">
            Export logs in PDF format, with options to customize the time
            interval. Get your team ready for the reports.
          </p>
        </div>

        <Image
          src={"/images/Log/5.png"}
          width={900}
          height={500}
          alt="Log"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {/*Log Feature Style 2*/}
      <div className=" px-0 md:px-[100px] py-[50px]  bg-opacity-10 bg-gradient-to-b from-neutral-950 via-[#4a60ff]/30 to-neutral-950  flex flex-col-reverse lg:flex-row md:justify-between items-center  gap-[20px] md:gap-[100px] ">
        <Image
          src={"/images/Log/6.png"}
          width={900}
          height={500}
          alt="Log"
          style={{ width: "100%", height: "auto" }}
        />

        <div className="w-full flex flex-col justify-center items-center lg:items-start gap-5 text-center lg:text-start">
          {/*Small Gradient badge*/}
          <div className="h-9 p-2.5 bg-white/10 rounded-[99px] border border-[#7bcbe8] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-[14px] md:text-[16px] font-semibold font-['Gilroy'] leading-none">
              Location-Based Logging
            </div>
          </div>
          <h3 className="text-white heading3">QR Code & Localization </h3>
          <div className="subtitle">
            Generate QR codes for quick and easy log data input and
            management.Utilize localization to restrict logging based on GPS,
            ensuring logs are made from designated locations only.
          </div>
        </div>
      </div>
    </div>
  );
};

export default QoodoLogs;
