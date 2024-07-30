import React from "react";
import MagicButton from "./MagicButton";
import { GoArrowUpRight } from "react-icons/go";

const BookDemo = () => {
  return (
    <div className="px-[50px] py-[130px] ">
      <div className="text-center w-full flex flex-col justify-center items-center relative z-10">
        <h3 className="heading2 mb-[20px]">Book a Demo</h3>

        <p className="subtitle text-[#E4ECFF] mb-[50px]">
          See how Qoodo can transform your quality management processes.
        </p>

        <a href="#">
          <MagicButton
            title="Book a Demo"
            icon={<GoArrowUpRight />}
            position="right"
          />
        </a>
        <img
          src="/images/book/pattern.png"
          className="max-w-[1259px] absolute  select-none -z-10"
          alt=" "
        />
      </div>
    </div>
  );
};

export default BookDemo;
