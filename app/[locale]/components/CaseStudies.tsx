"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from "react-i18next";

const CaseStudies = () => {
  const { t } = useTranslation();

  const companies = [
    {
      id: 1,
      name: "Qoodo",
      img: "/images/company/qoodo.svg",
      nameImg: "/images/company/qoodoName.svg",
    },
  ];

  const testimonials = [
    {
      quote: t(
        "The online logging with Qoodo makes it easier for us to close units and check workflows. The assessment of colleagues and their tasks can be traced. Reminding annual/semi-year/quarterly logs to be less frequent greatly reduced our error opportunities."
      ),
      name: "Patrik Panácz",
      title: "(A Grund)",
      img: "/images/company/part3.png",
    },
    {
      quote:
        "Az alkalmazás és a szolgáltató is professzionális.A mai világban ritka az ilyen magas színvonalú elhivatottság. Csak ajánlani tudom.",
      name: "Simon György",
      title: "Nagyhegyes",
      img: "/images/company/part1.png",
    },
  ];

  return (
    <div className="px-[50px] py-[50px] md:py-[130px] relative z-10">
      <div className="text-center w-full flex flex-col justify-center items-center relative">
        <h3 className="heading2 mb-[20px]">{t("Case Studies")}</h3>

        <p className="subtitle text-[#E4ECFF]">
          {t(
            "Learn how Qoodo has helped businesses achieve their quality management goals."
          )}
        </p>
      </div>

      <div className="flex flex-col items-center ">
        {/* Static Carousel */}
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          className="w-full my-14"
        >
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <div
                className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                }}
              >
                <blockquote>
                  <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                    {testimonial.quote}
                  </span>
                  <div className="relative z-20 mt-6 flex flex-row items-center">
                    <div className="me-3">
                      <img
                        src={testimonial.img}
                        alt="profile"
                        style={{ filter: "grayscale(100%)" }}
                      />
                    </div>
                    <span className="flex flex-col gap-1">
                      <span className="text-xl font-bold leading-[1.6] text-white">
                        {testimonial.name}
                      </span>
                      <span className="text-sm leading-[1.6] text-white-200 font-normal">
                        {testimonial.title}
                      </span>
                    </span>
                  </div>
                </blockquote>
              </div>
            </div>
          ))}
        </Carousel>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
