import React from "react";
import Image from "next/image";
import { Button } from "@/app/[locale]/components/ui/button";

const BookDemo = () => {
  return (
    <div className="py-12 w-full flex justify-center  px-5 sm:px-[50px]">
      <div className="max-w-[1400px] py-12 lg:py-0 overflow-hidden px-5 sm:px-[100px] bg-[#4a60ff] rounded-[50px] lg:rounded-[180px] flex justify-start items-start gap-2.5">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
          <div className="lg:flex-1 w-full lg:w-[600px] h-[200px] lg:h-[590px] relative">
            <Image
              src="/images/book/mockup.png"
              width={600}
              height={1}
              alt="Mockup-Image"
              className="absolute top-0 lg:top-10 left-0"
            />
          </div>
          <div className="flex-1 ">
            <div className="flex flex-col items-center lg:items-start lg:text-start text-center ">
              <div className="mb-8 h-10 px-3.5 py-2 rounded-[15px] border border-white inline-flex justify-center items-center">
                <div className="text-center text-white text-base font-bold">
                  Get Started Today
                </div>
              </div>
              <div className="mb-8  flex flex-col gap-4 self-stretch">
                <h3 className="heading2 leading-tight">
                  Book a Demo from Qoodo.
                </h3>
                <p className="subtitle text-[#E4ECFF]">
                  See how Qoodo can transform your quality management processes.
                </p>
              </div>

              <a href="bookDemo">
                <Button
                  type="button"
                  className="h-[60px] px-[25px] py-[15px] bg-black-100 rounded-[24px] flex justify-center items-center gap-2.5 hover:bg-black-200"
                >
                  <div className="text-white text-base font-medium font-['Gilroy'] leading-tight">
                    Book a Demo
                  </div>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
