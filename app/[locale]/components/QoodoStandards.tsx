import React from "react";

import { Button } from "./ui/MovingBorders";
import { TFunction } from "i18next";

interface QoodoStandardsProps {
  t: TFunction<["translation", ...string[]], undefined>;
}
const QoodoStandards: React.FC<QoodoStandardsProps> = ({ t }) => {
  const qoodoStandards = [
    {
      id: 1,
      title: t("HACCP"),
      desc: t("Hazard Analysis and Critical Control Points for food safety."),
      className: "md:col-span-2",
      thumbnail: "/images/standards/haccp.png",
    },
    {
      id: 2,
      title: t("IFS"),
      desc: t(
        "International Featured Standards for ensuring product safety and quality."
      ),
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/images/standards/ifs.png",
    },
    {
      id: 3,
      title: t("ISO 9001"),
      desc: t("Quality management system standards."),
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/images/standards/iso9001.png",
    },
    {
      id: 4,
      title: t("ISO 22000"),
      desc: t("Food safety management system standards."),
      className: "md:col-span-2",
      thumbnail: "/images/standards/iso22000.png",
    },

    {
      id: 5,
      title: t("BRC"),
      desc: t(
        "British Retail Consortium standards for food safety and quality."
      ),
      className: "md:col-span-2",
      thumbnail: "/images/standards/brc.png",
    },
    {
      id: 6,
      title: t("Local Regulatory Standards"),
      desc: t("Compliance with local food safety and quality regulations."),
      className: "md:col-span-2",
      thumbnail: "/images/standards/local.png",
    },

    {
      id: 7,
      title: t("Internal Policies"),
      desc: t(
        "Adherence to your organization's internal quality and safety policies."
      ),
      className: "md:col-span-2",
      thumbnail: "/images/standards/policy.png",
    },
  ];
  return (
    <div className="py-[70px] w-full px-[20px] md:px-[100px] flex flex-col justify-center items-center">
      <h3 className="heading3 text-center mb-[50px]">
        {t("Standards We Support")}
      </h3>

      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-10">
        {qoodoStandards.map((card) => (
          <Button
            key={card.title}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgba(12, 14, 35, 1)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1  justify-start text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col p-4 md:p-6 lg:p-10 gap-8 ">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-20 md:w-20 w-16"
              />
              <div className="lg:ms-5 flex-1">
                <h1 className="text-start text-[20px] md:text-[22px] font-semibold text-white">
                  {card.title}
                </h1>
                <p className="text-start text-[#BEC1DD] mt-3 font-regular text-[16px] md:text-[18px]">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QoodoStandards;
