"use client";
import React, { useState, ChangeEvent, FormEvent, MouseEvent } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import type ReCAPTCHAT from "react-google-recaptcha";
import { useRef } from "react";
import ContactModal from "./ui/ContactModal";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [popUp, setPopUp] = useState(false);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);

  const RECAPTCHA_SITE_KEY = "6LeNMDQrAAAAAMF8eUVfL4DINl3AHHuXRXEYof2f";
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!recaptchaToken) {
      alert("Please complete the CAPTCHA.");
      return;
    }
    if (firstName && lastName && email && message) {
      const input = {
        name: `${firstName} ${lastName}`,
        email,
        phoneNumber: "N/A",
        interests: ["Contact"],
        recaptchaToken,
      };
      try {
        await fetch(
          "https://dev-apis.naplozz.hu/api/v1/users/sendDemoMail",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(input),
          }
        );
        setSubmitted(true);
        setfirstName("");
        setlastName("");
        setEmail("");
        setMessage("");
        setRecaptchaToken("");
        if (recaptchaRef.current) recaptchaRef.current.reset();
        setPopUp(true); // Show Thank You popup
      } catch (err) {
        console.error("Error", err);
      }
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <>
      <div className="px-5 sm:px-[100px]">
        <div className="wrapper mt-[130px]">
          <div className="contain flex-col justify-center items-center gap-2">
            <h3 className="heading2 mb-[20px]">{t("Contact Us")}</h3>
            <form
              onSubmit={onSubmit}
              className="flex max-w-[1000px]p-5 sm:p-8 rounded-2xl justify-start flex-col gap-5 w-full"
            >
              <div className="items-center">
                <div className="flex sm:flex-row flex-col justify-center items-center w-full gap-5 mb-4">
                  <input
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    name="firstName"
                    type="text"
                    placeholder={t("First Name")}
                    className="w-full h-[60px] text-base text-white text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5"
                  />
                  <input
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                    name="lastName"
                    type="text"
                    placeholder={t("Last Name")}
                    className="w-full h-[60px] text-base text-white text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5"
                  />
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  placeholder={t("Email")}
                  className="w-full h-[60px] text-base text-white text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 mb-4"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  placeholder={t("Enter your message here")}
                  className="w-full h-[100px] text-white pt-5 resize-none text-base text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5"
                />
              </div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={(token) => setRecaptchaToken(token || "")}
              />

              <button
                type="submit"
                className="h-16 px-10 py-[22px] bg-[#4a60ff] rounded-[14px] inline-flex items-center justify-center gap-2.5"
                disabled={!recaptchaToken || isSubmitted}
              >
                <div className="text-white text-base font-medium font-gilroy leading-tight">
                  {t("Submit")}
                </div>
                <FaChevronRight />
              </button>
            </form>
          </div>
        </div>
      </div>
      {popUp && <ContactModal setModal={setPopUp} whiteListModal={false} />}
    </>
  );
};

export default Contact;
