import React from "react";
import { Button } from "@/app/[locale]/components/ui/button";
import { TFunction } from "i18next";
import { Check } from "lucide-react";

interface SeatProps {
  t: TFunction<["translation", ...string[]], undefined>;
}
const SeatCard: React.FC<SeatProps> = ({ t }) => {
  const features = [
    "Attendance tracking & reporting",
    "Unit management",
    "Team collaboration",
    "Basic analytics",
    "Email support",
    "PDF and Excel export",
    "Location control",
    "PIN and console login",
    "Minimum 3 users required",
  ];

  return (
    <div className="w-full font-[Gilroy] max-w-[1440px] mb-16 px-5 2xl:px-0">
      <div className="bg-[#4A60FF] border-white/20 border-2 px-8 py-10 rounded-2xl flex flex-col text-white w-full">
        <div className="flex flex-col  lg:flex-row text-center lg:text-start">
          <div className="flex flex-col items-center lg:items-start gap-4 mb-10 lg:mb-0">
            <h3 className="heading3">
              {t("Add Seats to the Attendance Plan")}
            </h3>

            <p className="text-[16px] md:text-xl font-gilroy font-medium">
              {t(
                "Flexible attendance tracking for growing teams, designed for simplicity"
              )}
            </p>

            <div className="flex flex-row gap-4 text-[16px] md:text-xl font-gilroy font-medium">
              <p>{t("From")}</p>

              <h3 className="heading3">€1.50</h3>

              <div className="flex flex-col">
                <p>/user/month</p>
                <p className="font-bold">{t("when billed annually")}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center lg:items-start gap-5 heading3 ">
              <h3 className="text-4xl">{t("Get Started Now")}</h3>

              <p className="font-medium text-[16px] md:text-xl font-gilroy ">
                {t("Download on Web")}
              </p>

              <a href="https://app.qoodo.io/register">
                <Button
                  type="button"
                  className="h-[60px] px-[25px] py-[15px] bg-black-100 rounded-[24px] flex justify-center items-center gap-2.5 hover:bg-black-200"
                >
                  <div className="text-white text-base font-medium font-['Gilroy'] leading-tight">
                    {t("Book a Demo")}
                  </div>
                </Button>
              </a>
            </div>
          </div>

          <div className="flex flex-col  gap-4 ml-10">
            <p className="text-[16px] md:text-xl font-gilroy font-bold text-start">
              Includes
            </p>

            <ul className="space-y-3 flex flex-col ">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-[16px] md:text-xl"
                >
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="">{t(feature)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatCard;
