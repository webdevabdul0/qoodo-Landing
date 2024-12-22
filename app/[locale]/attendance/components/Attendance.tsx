import React from "react";
import Image from "next/image";
import { TFunction } from "i18next";

interface AttendanceProps {
  t: TFunction<["translation", ...string[]], undefined>;
}
const QoodoAttendance: React.FC<AttendanceProps> = ({ t }) => {
  return (
    <div className="flex flex-col py-[50px]  w-full">
      {/*Log Feature Style 2*/}
      <div className="px-3 sm:px-0 md:px-[100px] py-[50px]  bg-opacity-10 bg-gradient-to-b from-black-100 via-[#4a60ff]/30 to-black-100  flex justify-center">
        <div className="flex  flex-col-reverse lg:flex-row md:justify-between items-center  gap-[20px] md:gap-[100px] max-w-[1440px]">
          <Image
            src={"/images/attendance/1.png"}
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
                {t("Quick Access and Role Management")}
              </div>
            </div>
            <h3 className="text-white heading3">
              {t("Access and User Roles")}
            </h3>
            <div className="text-[16px] md:text-xl font-gilroy font-medium">
              {t(
                "Easily open the Attendance Assistant from the homepage. Leaders can manage their own and others' attendance, while staff manage only their own."
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
              {t("Effortless Check-In/Out")}
            </div>

            <h3 className="text-white heading3">{t("Check-In/Out")}</h3>
            <p className="text-[16px] md:text-xl font-gilroy font-medium ">
              {t(
                "Swipe the Check In button to log start times and Check Out to log end times. Alternatively you can use our Attendance Console where all the employees can easily check in and check out by typing their individual PIN codes. "
              )}
            </p>
          </div>

          <Image
            src={"/images/attendance/2.png"}
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
            src={"/images/attendance/3.png"}
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
                {t("Manage Past Activities")}
              </div>
            </div>
            <h3 className="text-white heading3">
              {t("Manage and Review Activities")}
            </h3>
            <div className="text-[16px] md:text-xl font-gilroy font-medium">
              {t(
                "Review and edit past activities as needed. Leaders can view all users' attendance data and check in/out on their behalf."
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
              {t("Smart Notifications and Reports")}
            </div>

            <h3 className="text-white heading3">
              {t("Notifications and Reports")}
            </h3>
            <p className="text-[16px] md:text-xl font-gilroy font-medium ">
              {t(
                "Set up smart notifications for attendance timeframes. Generate QR codes for easy check-in/out and export attendance sheets to PDF."
              )}
            </p>
          </div>

          <Image
            src={"/images/attendance/4.png"}
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
            src={"/images/attendance/5.png"}
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
                {t("Location-Based Restrictions")}{" "}
              </div>
            </div>
            <h3 className="text-white heading3">{t("Limit location")}</h3>
            <div className="text-[16px] md:text-xl font-gilroy font-medium">
              {t(
                "Admins can restrict check-in/out locations using mobile GPS. Enable GPS, activate restriction, and select users for location-based restrictions."
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QoodoAttendance;
