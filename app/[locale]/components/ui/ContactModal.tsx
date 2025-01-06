"use client";

import { GoChevronLeft } from "react-icons/go";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import { useEffect, FC } from "react";

interface ContactModalProps {
  setModal: (state: boolean) => void;
  whiteListModal?: boolean;
}

const ContactModal: FC<ContactModalProps> = ({ setModal, whiteListModal }) => {
  useEffect(() => {
    if (!whiteListModal) {
      const timer = setTimeout(() => {
        setModal(false);
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [setModal, whiteListModal]);

  return (
    <>
      {/* Background overlay */}
      <div
        role="button"
        aria-label="Close modal"
        onClick={() => setModal(false)}
        className="fixed top-0 left-0 w-full h-full z-[99] bg-black opacity-60"
      ></div>

      {/* Modal content */}
      <div className="fixed rounded-[20px] z-[100] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] border border-white/10 shadow-lg flex justify-center items-center flex-col gap-6 py-8 px-6 lg:p-10 lg:h-[300px] w-[90%] max-w-[700px] overflow-hidden">
        {/* Decorative blurred circles */}
        <div className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] bg-[#2BD1FF] opacity-20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-30%] right-[-25%] w-[400px] h-[400px] bg-[#0262F7] opacity-20 blur-[200px] rounded-full"></div>

        {/* Close button */}
        <FaTimes
          className="absolute right-3 top-3 text-white text-2xl cursor-pointer z-10"
          aria-label="Close modal"
          onClick={() => setModal(false)}
        />

        {/* Success icon */}
        <FaCheckCircle
          className="text-[#2BD1FF] text-[60px]"
          aria-label="Success Icon"
        />

        {/* Message */}
        <p className="text-[#B3B3B3] font-medium text-lg sm:text-xl text-center">
          Thank you for submitting the form
        </p>
        <h4 className="gr-text text-[35px] sm:text-[40px] font-extrabold text-center leading-[1.1]">
          We will contact <br /> you shortly
        </h4>
      </div>
    </>
  );
};

export default ContactModal;
