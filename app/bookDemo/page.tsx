"use client";

import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { FaChevronRight } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import ContactModal from "@/components/ui/ContactModal";

const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone Number is required"),
  interests: z
    .array(z.string())
    .min(1, "At least one interest must be selected"),
});

const interestsOptions = [
  "Online logging",
  "Audit and inspection",
  "Digital Attendance",
  "Education",
  "HACCP/IFS/ISO",
  "Applying the new self-monitoring regulation",
  "Something else",
];

const items = [
  { id: 1, title: "Qoodo digital logging", imgSrc: "/solutions/log.svg" },
  { id: 2, title: "Qoodo Audit", imgSrc: "/solutions/log.svg" },
  { id: 3, title: "Qoodo Attendance assistance", imgSrc: "/solutions/log.svg" },
  { id: 4, title: "Qoodo Education", imgSrc: "/solutions/log.svg" },
  { id: 5, title: "Qoodo digital logging", imgSrc: "/solutions/log.svg" },
  {
    id: 6,
    title: 'Qoodo "perform to earn" program',
    imgSrc: "/solutions/log.svg",
  },

  // Add more items as needed
];

const Page = () => {
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

  function onSubmit(data: z.infer<typeof FormSchema>) {
    axios
      .post("https://apis.naplozz.hu/api/v1/users/sendmail?server=qoodo", data)
      .then(() => {
        setPopUp(true);
        toast({
          title: "Form Submitted",
          description: "Your demo request has been sent successfully.",
        });
        form.reset();
      })
      .catch(() => {
        toast({
          title: "Submission Failed",
          description: "There was an issue submitting your request.",
        });
      });
  }

  return (
    <div className="w-full bg-black-100">
      <Header />

      <div className="pt-[100px] pb-[100px] mx-auto relative flex flex-col px-[50px]">
        <div className="w-full flex flex-col md:flex-row  gap-12">
          <div className="flex-1 flex-col items-start justify-center md:justify-start">
            <h3 className="text-white text-3xl md:text-h2 text-start font-bold mb-12">
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
                  clipRule="evenodd"
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
                  clipRule="evenodd"
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
                  clipRule="evenodd"
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
              <h3 className="text-white text-2xl md:text-h2 text-start font-bold mb-8 md:mb-12 mt-12">
                Our Solutions
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="w-full h-auto px-2.5 py-[15px] bg-gradient-to-r from-[#04071d] to-[#0c0e23] rounded-[15px] border border-[#363749] flex flex-col justify-start items-center gap-5"
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
                    <div className="self-stretch text-center text-white text-lg font-semibold font-['Gilroy'] capitalize">
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
                  Book a Demo
                </h3>
                <p className="text-white-100 subtitle font-gilroy mb-8">
                  Fill out the form below to book a demo and see how our
                  solutions can optimize workflows.
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
                              placeholder="Name"
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
                              placeholder="Email"
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
                              placeholder="Phone Number"
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
                          <FormLabel className="text-xl font-semibold font-gilroy text-white">
                            I am interested in knowing about
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

                                  <span className="ml-2 text-xl font-semibold font-gilroy text-white">
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
                        Book a Demo
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
      <Footer />
    </div>
  );
};

export default Page;
