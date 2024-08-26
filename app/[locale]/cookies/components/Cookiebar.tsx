"use client";

import { useTranslation } from "react-i18next";
const Cookiebar = () => {
  const { t } = useTranslation();
  return (
    <div className="flex roadmap overflow-x-auto gap-[40px] sm:gap-0 xl:flex-col flex-row sticky top-[30px] justify-start xl:justify-center text-center items-center w-full xl:max-w-[258px]">
      <h3 className="text-2xl xl:block hidden font-bold mb-3 text-[#b3b3b3]">
        {t("Table of contents")}
      </h3>
      <a
        href="#Introduction"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Introduction")}
      </a>
      <a
        href="#Purposes of Processing"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Purposes of Processing")}
      </a>
      <a
        href="#Collecting Your Personal Data"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Collecting Your Personal Data")}
      </a>
      <a
        href="#Cookies"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Cookies")}
      </a>
      <a
        href="#Advertising"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Advertising")}
      </a>
      <a
        href="#Sharing Your Personal Data"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Sharing Your Personal Data")}
      </a>
      <a
        href="#User Generated Content"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("User Generated Content")}
      </a>
      <a
        href="#International Data Transfer"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("International Data Transfer")}
      </a>
      <a
        href="#Security"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Security")}
      </a>
      <a
        href="#Retention"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Retention")}
      </a>
      <a
        href="#Our Policy on Children"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Our Policy on Children")}
      </a>

      <a
        href="#Complaints"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Complaints")}
      </a>

      <a
        href="#Contact Information"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Contact Information")}
      </a>
    </div>
  );
};

export default Cookiebar;
