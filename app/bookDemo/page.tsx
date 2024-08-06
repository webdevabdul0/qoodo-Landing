import React from "react";
import Header from "../Header";
import Footer from "../Footer";
const page = () => {
  return (
    <div className="w-full bg-black-100">
      <Header />

      <div className="pt-[150px] pb-[100px] mx-auto relative flex flex-col px-[50px]">
        <div className="w-full flex-col md:flex-row ">
          <div className="flex flex-col items-start justify-center md:justify-start">
            <h3 className="text-white text-3xl md:text-h2 text-start font-bold mb-[30px]">
              Experience Qoodo in Action
            </h3>

            <p className="text-white-100 subtitle font-gilroy mb-8">
              Book a demo to see first hand how Qoodo QMS can transform your
              business. Let's explore together:
            </p>

            <div className="flex flex-row items-start justify-start gap-3 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                  fill="#4A60FF"
                />
              </svg>

              <p className="text-white text-[16px] md:text-xl font-gilroy font-semibold">
                How Qoodo QMS optimizes workflows and enhances productivity.
              </p>
            </div>

            <div className="flex flex-row items-start justify-start gap-3 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                  fill="#4A60FF"
                />
              </svg>

              <p className="text-white text-[16px] md:text-xl font-gilroy font-semibold">
                How are our features designed to meet temporary and permanent
                business objectives?
              </p>
            </div>

            <div className="flex flex-row items-start justify-start gap-3 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                  fill="#4A60FF"
                />
              </svg>

              <p className="text-white text-[16px] md:text-xl font-gilroy font-semibold">
                How Qoodo QMS assists in maintaining regulatory compliance
                effortlessly.
              </p>
            </div>

            <div className="flex flex-col justify-start mt-8">
              <h3 className="text-white text-3xl md:text-h2 text-start font-bold mb-[30px]">
                Our Solutions
              </h3>

              <div className="grid grid-cols-2 col-auto">
                <div className="bg-red-400">This is first Div</div>

                <div className="bg-blue-400">This is first Div</div>

                <div className="bg-green-400">This is first Div</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-400">Hellow world</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
