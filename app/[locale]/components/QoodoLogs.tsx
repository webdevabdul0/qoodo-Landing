import React from "react";
import Image from "next/image";
import { TFunction } from "i18next";

interface QoodoLogsProps {
  t: TFunction<["translation", ...string[]], undefined>;
}
const QoodoLogs: React.FC<QoodoLogsProps> = ({ t }) => {
  return (
    <div className="bg-neutral-950 flex flex-col py-[50px]  md:px-0">
      <div className="w-full flex flex-col justify-center items-center gap-5 mb-24 px-3 sm:px-0">
        {/*Small Gradient badge*/}

        <div className="p-[10px] bg-[#222222] text-center border border-[#4A60FF] rounded-full text-white font-semibold text-[14px] md:text-[16px]">
          {t("Qoodo Logs")}
        </div>

        <h3 className="bg-gradient-to-r from-[#495EFA]  to-[#313EA5] inline-block text-transparent bg-clip-text leading-[3rem] text-[30px] md:text-[42px] font-bold text-center ">
          {t("Digital Logging for control and efficiency")}
        </h3>
        <p className="text-[16px] md:text-xl font-gilroy font-medium text-center ">
          {" "}
          {t("Simplify and Streamline Your Logging Process")}
        </p>
      </div>

      {/*Log Feature Style 2*/}
      <div className="px-3 sm:px-0 md:px-[100px] py-[50px]  bg-opacity-10 bg-gradient-to-b from-neutral-950 via-[#4a60ff]/30 to-neutral-950  flex justify-center">
        <div className="flex  flex-col-reverse lg:flex-row md:justify-between items-center  gap-[20px] md:gap-[100px] max-w-[1440px]">
          <Image
            src={"/images/Log/2.png"}
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
                {t("Starting Your logs")}
              </div>
            </div>
            <h3 className="text-white heading3"> {t("Initiating Logs")}</h3>
            <div className="text-[16px] md:text-xl font-gilroy font-medium">
              {t(
                "Start your logging process by selecting the appropriate log. Each log has a dedicated page for easy data entry and management."
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
              {t("Log Entry Review")}
            </div>

            <h3 className="text-white heading3">
              {t("Signing and Saving Logs:")}
            </h3>
            <p className="text-[16px] md:text-xl font-gilroy font-medium ">
              {t("Easily input and save log data for efficient tracking.")}
            </p>
          </div>

          <Image
            src={"/images/Log/3.png"}
            width={700}
            height={1}
            alt="Log"
            className=" lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
            layout="responsive"
          />
        </div>
      </div>

      {/*Log Feature Style 2*/}
      <div className="px-3 sm:px-0 md:px-[100px] py-[50px]  bg-opacity-10 bg-gradient-to-b from-neutral-950 via-[#4a60ff]/30 to-neutral-950  flex justify-center">
        <div className="flex  flex-col-reverse lg:flex-row md:justify-between items-center  gap-[20px] md:gap-[100px] max-w-[1440px]">
          <Image
            src={"/images/Log/4.png"}
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
                {t("Log Assignment")}{" "}
              </div>
            </div>
            <h3 className="text-white heading3"> {t("Assign logs")}</h3>
            <div className="text-[16px] md:text-xl font-gilroy font-medium">
              {t(
                "Assign logs as tasks to team members, with notifications to keep everyone on track."
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
              {t("Log Export")}{" "}
            </div>

            <h3 className="text-white heading3">{t("Exporting Logs")}</h3>
            <p className="text-[16px] md:text-xl font-gilroy font-medium ">
              {t(
                "Export logs in PDF format, with options to customize the time interval. Get your team ready for the reports."
              )}
            </p>
          </div>

          <Image
            src={"/images/Log/5.png"}
            width={700}
            height={1}
            alt="Log"
            className=" lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
            layout="responsive"
          />
        </div>
      </div>

      {/*Log Feature Style 2*/}
      <div className="px-3 sm:px-0 md:px-[100px] py-[50px]  bg-opacity-10 bg-gradient-to-b from-neutral-950 via-[#4a60ff]/30 to-neutral-950  flex justify-center">
        <div className="flex  flex-col-reverse lg:flex-row md:justify-between items-center  gap-[20px] md:gap-[100px] max-w-[1440px]">
          <Image
            src={"/images/Log/6.png"}
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
                {t("Location-Based Logging")}
              </div>
            </div>
            <h3 className="text-white heading3">
              {t("QR Code & Localization")}{" "}
            </h3>
            <div className="text-[16px] md:text-xl font-gilroy font-medium">
              {t(
                "Generate QR codes for quick and easy log data input and management.Utilize localization to restrict logging based on GPS, ensuring logs are made from designated locations only."
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QoodoLogs;
