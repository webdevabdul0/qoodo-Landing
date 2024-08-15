import React from "react";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import QoodoFeatures from "@/components/QoodoFeatures";
import QoodoLogs from "@/components/QoodoLogs";
import QoodoIndustries from "@/components/QoodoIndustries";
import QoodoStandards from "@/components/QoodoStandards";
import QoodoEfficiency from "@/components/QoodoEfficiency";
import BookDemo from "@/components/BookDemo";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "./Footer";

const Page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="w-full">
        <Hero />
        <div className="mt-[-55px]">
          <Partners />
        </div>

        <QoodoEfficiency />

        <div id="features" className="px-5 sm:px-12">
          <QoodoFeatures />
        </div>
        <div id="logs">
          <QoodoLogs />
        </div>
        <div id="industries">
          <QoodoIndustries />
        </div>
        <BookDemo />
        <CaseStudies />
        <FAQ />

        <div id="standards">
          <QoodoStandards />
        </div>
        <ContactForm />
      </div>
    </main>
  );
};

export default Page;
