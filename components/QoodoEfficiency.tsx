import React from "react";
import { CircularProgress } from "@nextui-org/progress";

const QoodoEfficiency = () => {
  return (
    <div className="w-full py-[100px]  bg-opacity-2 bg-gradient-to-b from-black-100 via-[#4a60ff]/30 to-black-100">
      <div className="flex flex-col mb-20 w-full justify-center items-center">
        <h3 className="text-white text-3xl md:text-h3 text-center  font-bold mb-[20px]">
          Qoodo: The Smart Choice
        </h3>
        <p className="subtitle text-[#E4ECFF] text-center mb-[30px]">
          Experience the Advantages of Our System
        </p>
      </div>

      <div>
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={70}
          strokeWidth={4}
          showValueLabel={true}
        />
      </div>
    </div>
  );
};

export default QoodoEfficiency;
