"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ScrollableCards = ({
  items,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    img: any;
  }[];
  className?: string;
}) => {
  return (
    <div className={`relative z-20 overflow-hidden ${className || ""}`}>
      {/* Carousel Section */}
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        className="flex-nowrap"
      >
        {items.map((item, idx) => (
          <div key={idx}>
            <div
              className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <div className="me-3">
                    <img
                      src={item.img}
                      alt="profile"
                      style={{ filter: "grayscale(100%)" }} // Black and white effect
                    />
                  </div>
                  <span className="flex flex-col gap-1">
                    <span className="text-xl font-bold leading-[1.6] text-white">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] text-white-200 font-normal">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
