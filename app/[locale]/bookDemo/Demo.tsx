"use client";

import Image from "next/image";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { FaChevronRight } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/[locale]/components/ui/form";
import { Button } from "@/app/[locale]/components/ui/button";
import { Checkbox } from "@/app/[locale]/components/ui/checkbox";
import { toast } from "@/app/[locale]/components/ui/use-toast";
import ContactModal from "@/app/[locale]/components/ui/ContactModal";
import { useTranslation } from "react-i18next";

import React, { useState } from "react";

const Demo = () => {
  const { t } = useTranslation();

  const FormSchema = z.object({
    name: z.string().min(1, t("Name is required")),
    email: z.string().email(t("Invalid email address")),
    phoneNumber: z.string().min(1, t("Phone Number is required")),
    interests: z
      .array(z.string())
      .min(1, t("At least one interest must be selected")),
  });

  const [popUp, setPopUp] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      interests: [],
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setPopUp(true);
        toast({
          title: t("Form Submitted"),
          description: t("Your demo request has been sent successfully."),
        });
        form.reset();
      } else {
        toast({
          title: t("Submission Failed"),
          description: t("There was an issue submitting your request."),
        });
      }
    } catch (error) {
      toast({
        title: t("Submission Failed"),
        description: t("There was an issue submitting your request."),
      });
    }
  }

  const interestsOptions = [
    t("Online logging"),
    t("Audit and inspection"),
    t("Digital Attendance"),
    t("Education"),
    t("HACCP/IFS/ISO"),
    t("Applying the new self-monitoring regulation"),
    t("Something else"),
  ];

  const items = [
    { id: 1, title: t("Qoodo digital logging"), imgSrc: "/solutions/log.svg" },
    { id: 2, title: t("Qoodo Audit"), imgSrc: "/solutions/log.svg" },
    {
      id: 3,
      title: t("Qoodo Attendance assistance"),
      imgSrc: "/solutions/log.svg",
    },
    { id: 4, title: t("Qoodo Education"), imgSrc: "/solutions/log.svg" },
    { id: 5, title: t("Qoodo digital logging"), imgSrc: "/solutions/log.svg" },
    {
      id: 6,
      title: t('Qoodo "perform to earn" program'),
      imgSrc: "/solutions/log.svg",
    },
  ];

  return (
    <div className="w-full bg-black-100 pt-8 md:pt-36">
      <div className="pt-[100px] pb-[100px] mx-auto relative flex flex-col px-[50px]">
        <div className="w-full flex flex-col lg:flex-row  gap-12">
          <div className="flex-1 flex-col items-start justify-center md:justify-start">
            <h3 className="text-white text-3xl md:text-5xl text-start font-bold mb-12">
              {t("Experience Qoodo in Action")}
            </h3>

            <p className="text-white-100 subtitle font-gilroy mb-8">
              {t(
                "Book a demo to see first hand how Qoodo QMS can transform your business. Let's explore together:"
              )}
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
                  clipRule="evenodd"
                  d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                  fill="#4A60FF"
                />
              </svg>

              <p className="text-white text-base md:text-xl font-gilroy font-semibold">
                {t(
                  "How Qoodo QMS optimizes workflows and enhances productivity."
                )}
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                  fill="#4A60FF"
                />
              </svg>

              <p className="text-white text-base md:text-xl font-gilroy font-semibold">
                {t(
                  "How are our features designed to meet temporary and permanent"
                )}
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z"
                  fill="#4A60FF"
                />
              </svg>

              <p className="text-white text-base md:text-xl font-gilroy font-semibold">
                {t(
                  "How Qoodo QMS assists in maintaining regulatory compliance"
                )}
              </p>
            </div>

            <div className="flex flex-col justify-start mt-8">
              <h3 className="text-white text-2xl md:text-h2 text-start font-bold mb-8 md:mb-12 mt-12">
                {t("Our Solutions")}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="w-full h-auto px-2.5 py-[15px] bg-gradient-to-r from-[#04071d] to-[#0c0e23] rounded-[15px] border border-[#363749] flex flex-col justify-center items-center gap-5"
                  >
                    <div className="w-10 h-10 relative">
                      <Image
                        src={item.imgSrc}
                        alt={item.title}
                        layout="fill"
                        objectFit="contain"
                        className="absolute left-0 top-0"
                      />
                    </div>
                    <div className="self-stretch text-center text-white text-base sm:text-lg font-semibold font-['Gilroy'] capitalize">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            {popUp && (
              <ContactModal setModal={setPopUp} whiteListModal={undefined} />
            )}
            <div className="wrapper">
              <div className="contain flex-col justify-center items-center gap-2">
                <h3 className="text-[#4A60FF] text-3xl md:text-h2 text-start font-bold mb-[30px]">
                  {t("Book a Demo")}
                </h3>
                <p className="text-white-100 subtitle font-gilroy mb-8">
                  {t("Fill out the form below to book a demo and see how our")}
                </p>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex max-w-[1000px] justify-start flex-col gap-5 w-full"
                  >
                    <FormField
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <input
                              {...field}
                              placeholder={t("Name")}
                              className="w-full h-[60px] text-base text-white text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 mb-4"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <input
                              {...field}
                              type="email"
                              placeholder={t("Email")}
                              className="w-full h-[60px] text-base text-white text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 mb-4"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <input
                              {...field}
                              type="tel"
                              placeholder={t("Phone Number")}
                              className="w-full h-[60px] text-base text-white text-[rgba(163, 163, 163, 0.6)] bg-[rgba(13,13,13,0.5)] rounded-[20px] pl-5 mb-4"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="interests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base sm:text-xl font-semibold font-gilroy text-white">
                            {t("I am interested in knowing about")}
                          </FormLabel>
                          <FormControl>
                            <div className="flex flex-col gap-7 py-8">
                              {interestsOptions.map((option) => (
                                <label
                                  key={option}
                                  className="flex items-center"
                                >
                                  <Checkbox
                                    checked={field.value.includes(option)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        field.onChange([
                                          ...field.value,
                                          option,
                                        ]);
                                      } else {
                                        field.onChange(
                                          field.value.filter(
                                            (value: string) => value !== option
                                          )
                                        );
                                      }
                                    }}
                                    className="bg-blue-500 text-white"
                                  />

                                  <span className="ml-2 text-base sm:text-xl font-semibold font-gilroy text-white">
                                    {option}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="h-[60px] px-[25px] py-[15px] bg-[#4a60ff] rounded-[14px] border border-[#6971a2] justify-center items-center gap-2.5 w-full flex flex-row"
                    >
                      <div className="text-white text-base font-medium font-['Gilroy'] leading-tight">
                        {t("Book a Demo")}
                      </div>
                      <FaChevronRight />
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
