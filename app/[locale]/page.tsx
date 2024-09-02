import React from "react";
import Hero from "@/app/[locale]/components/Hero";
import Partners from "@/app/[locale]/components/Partners";
import QoodoFeatures from "@/app/[locale]/components/QoodoFeatures";
import QoodoLogs from "@/app/[locale]/components/QoodoLogs";
import QoodoIndustries from "@/app/[locale]/components/QoodoIndustries";
import QoodoStandards from "@/app/[locale]/components/QoodoStandards";
import QoodoEfficiency from "@/app/[locale]/components/QoodoEfficiency";
import BookDemo from "@/app/[locale]/components/BookDemo";
import CaseStudies from "@/app/[locale]/components/CaseStudies";
import FAQ from "@/app/[locale]/components/FAQ";
import ContactForm from "@/app/[locale]/components/ContactForm";
import initTranslations from "../i18n";
import TranslationsProvider from "./TranslationsProvider";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import CookieConsent from "./components/CookieConsent";
const i18nNamespaces = ["home"];
const Page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Header />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
        <div className="w-full">
          <Hero />
          <div className="mt-[-55px]">
            <Partners t={t} />
          </div>

          <QoodoEfficiency />

          <div id="features" className="px-5 sm:px-12">
            <QoodoFeatures />
          </div>
          <div id="logs">
            <QoodoLogs t={t} />
          </div>
          <div id="industries">
            <QoodoIndustries />
          </div>
          <BookDemo t={t} />
          <CaseStudies />
          <FAQ t={t} />

          <div id="standards">
            <QoodoStandards t={t} />
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />

      <CookieConsent />
    </TranslationsProvider>
  );
};

export default Page;
