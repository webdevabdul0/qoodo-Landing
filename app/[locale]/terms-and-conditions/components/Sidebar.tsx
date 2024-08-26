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
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Introduction")}
      </a>

      <a
        href="#Privacy Policy"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Privacy Policy")}
      </a>
      <a
        href="#Your Account"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Your Account")}
      </a>
      <a
        href="#Services"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Services")}
      </a>
      <a
        href="#Third Party Services"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Third Party Services")}
      </a>

      <a
        href="#Prohibited Uses and Intellectual Property"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Prohibited Uses and Intellectual Property")}
      </a>

      <a
        href="#The Company Materials"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("The Company Materials")}
      </a>

      <a
        href="#Disclaimer of Certain Liabilities"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Disclaimer of Certain Liabilities")}
      </a>

      <a
        href="#Earnings Disclaimer"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Earnings Disclaimer")}
      </a>

      <a
        href="#Volatility Risks"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Volatility Risks")}
      </a>

      <a
        href="#Indenification"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("Indenification")}
      </a>

      {/*}
      <a
        href="#Termination and Access Restriction"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >

        {t('Termination and Access Restriction') }
      </a>



      <a
        href="#Compliance Responsibility Clause"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >

        {t('Compliance Responsibility Clause') }
      </a>


      <a
        href="#Compliance Responsibility"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >

        {t('Compliance Responsibility') }
      </a>
  {*/}

      <a
        href="#General Clauses"
        className="text-lightPink  font-semibold text-base border-0 xl:border-b-2 border-solid border-[#FF866D1A] min-w-max xl:w-full py-4"
      >
        {t("General Clauses")}
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

export default Sidebar;
