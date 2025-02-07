"use client";

import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <div className="flex roadmap overflow-x-auto gap-[40px] sm:gap-0 xl:flex-col flex-row sticky top-[30px] justify-start xl:justify-center text-center items-center w-full xl:max-w-[258px]">
      <h3 className="text-2xl xl:block hidden font-bold mb-3 text-[#b3b3b3]">
        {t("Table of contents")}
      </h3>

      <a
        href="#Introduction"
        className="text-lightPink font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Introduction")}
      </a>

      <a
        href="#GeneralProvisions"
        className="text-lightPink font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("General Provisions")}
      </a>

      <a
        href="#Privacy"
        className="text-lightPink font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Privacy and GDPR Compliance")}
      </a>

      <a
        href="#YourAccount"
        className="text-lightPink font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Your Account")}
      </a>

      <a
        href="#Services"
        className="text-lightPink font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Services")}
      </a>

      <a
        href="#TechnicalRequirements"
        className="text-lightPink font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Technical Requirements")}
      </a>

      <a
        href="#IntellectualProperty"
        className="text-lightPink font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Intellectual Property")}
      </a>

      <a
        href="#Liability"
        className="text-lightPink font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Limitations of Liability")}
      </a>

      <a
        href="#Complaints"
        className="text-lightPink font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Complaints and Legal Remedies")}
      </a>

      <a
        href="#Contact"
        className="text-lightPink font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Contact Information")}
      </a>

      <a
        href="#final"
        className="text-lightPink font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Final Provisions")}
      </a>
    </div>
  );
};

export default Sidebar;
