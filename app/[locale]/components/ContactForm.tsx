"use client";
import React, { useState, ChangeEvent, FormEvent, MouseEvent } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import axios from "axios";
import ContactModal from "./ui/ContactModal";
import { FaChevronRight } from "react-icons/fa";

interface InputState {
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  captcha: string;
}

const Contact: React.FC = () => {
  const [popUp, setPopUp] = useState(false);
  const [input, setInput] = useState<InputState>({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
    captcha: "",
  });

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const onChange = (value: string | null) => {
    setInput((prev) => ({ ...prev, captcha: value ? "true" : "" }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      input.description &&
      input.email &&
      input.firstName &&
      input.lastName &&
      input.captcha
    ) {
      axios
        .post(
          "https://apis.naplozz.hu/api/v1/users/sendmail?server=qoodo",
          input
        )
        .then(() => setPopUp(true))
        .catch(() => alert("Failed"))
        .finally(() =>
          setInput({
            firstName: "",
            lastName: "",
            email: "",
            description: "",
            captcha: "",
          })
        );
    } else {
      alert("Please fill the form");
    }
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Simulate FormEvent for handleSubmit
    const fakeEvent = e as unknown as FormEvent<HTMLFormElement>;
    handleSubmit(fakeEvent);
  };

  return (
    <>
      <div className="px-5 sm:px-[100px]">
        {popUp && (
          <ContactModal setModal={setPopUp} whiteListModal={undefined} />
        )}
        <div className="wrapper mt-[130px]">
          <div className="contain flex-col justify-center items-center gap-2">
            <h3 className="heading2 mb-[20px]">Contact Us</h3>
            <form
              onSubmit={handleSubmit}
              className="flex max-w-[1000px]p-5 sm:p-8 rounded-2xl justify-start flex-col gap-5 w-full"
            >
              <div className="items-center">
                <div className="flex sm:flex-row flex-col justify-center items-center w-full gap-5 mb-4">
                  <input
                    value={input.firstName}
                    onChange={changeHandler}
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className="w-full h-[60px] text-base text-white text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5"
                  />
                  <input
                    value={input.lastName}
                    onChange={changeHandler}
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="w-full h-[60px] text-base text-white text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5"
                  />
                </div>
                <input
                  value={input.email}
                  onChange={changeHandler}
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full h-[60px] text-base text-white text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 mb-4"
                />
                <textarea
                  value={input.description}
                  onChange={changeHandler}
                  name="description"
                  placeholder="Enter your message here"
                  className="w-full h-[100px] text-white pt-5 resize-none text-base text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5"
                />
              </div>
              <div></div>

              <a href="#" onClick={handleClick}>
                <div className="h-[60px] px-[25px] py-[15px] bg-[#4a60ff] rounded-[14px] border border-[#6971a2] justify-center items-center gap-2.5 inline-flex">
                  <div className="text-white text-base font-medium font-['Gilroy'] leading-tight">
                    Submit
                  </div>

                  <FaChevronRight />
                </div>
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
