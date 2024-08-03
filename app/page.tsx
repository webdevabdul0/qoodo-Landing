import React from "react";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import QoodoFeatures from "@/components/QoodoFeatures";
import QoodoLogs from "@/components/QoodoLogs";
import QoodoInAction from "@/components/QoodoInAction";
import QoodoIndustries from "@/components/QoodoIndustries";
import QoodoStandards from "@/components/QoodoStandards";
import BookDemo from "@/components/BookDemo";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="w-full">
        <Header />

        <Hero />
        <div className="mt-[-55px]">
          <Partners />
        </div>

        <div className="px-5 sm:px-12">
          <QoodoFeatures />
        </div>
        <QoodoLogs />
        {/*<QoodoInAction />*/}
        <QoodoIndustries />

        <BookDemo />
        <CaseStudies />
        <FAQ />
        <ContactForm />
        <QoodoStandards />
        <Footer />
      </div>
    </main>
  );
};

export default Page;
