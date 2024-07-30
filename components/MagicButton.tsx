import React from "react";


const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-14 sm:h-[68px] w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
  
  <span
  className={`inline-flex h-full w-full sm:w-[200px] cursor-pointer items-center justify-center rounded-[14px]
    bg-gradient-to-b from-[#33FDFF] to-[#424CFF] hover:from-[#424CFF] hover:to-[#4C56FF]  transition-all duration-700 ease-in-out  px-7 text-sm md:text-lg font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
>

<span
    className="absolute inset-0 rounded-[14px] border-2"
    style={{ borderColor: 'rgba(105, 113, 162, 0.4)' }} // 40% opacity of #6971A2
  ></span>
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
