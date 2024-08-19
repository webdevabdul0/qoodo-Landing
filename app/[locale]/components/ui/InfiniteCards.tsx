"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from "react-spring";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  const bind = useDrag(({ movement: [mx], memo = x.get(), event }) => {
    event.preventDefault(); // Prevent text selection
    api.start({ x: memo + mx * 2 }); // Adjusted for faster scrolling
    if (containerRef.current) {
      containerRef.current.scrollLeft -= mx * 2; // Adjusted for faster scrolling
    }
    return memo;
  });

  const addAnimation = () => {
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      setStart(true);
    }
  };

  useEffect(() => {
    addAnimation();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      style={{ cursor: "default" }} // Removed grab cursor
    >
      <animated.ul
        {...bind()}
        style={{ x }}
        className="flex gap-16 py-4 flex-nowrap"
        ref={scrollerRef}
      >
        {items.map((item, idx) => (
          <li
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            key={idx}
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
          </li>
        ))}
      </animated.ul>
    </div>
  );
};
