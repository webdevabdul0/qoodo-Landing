import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import CookieConsent from "../components/CookieConsent";

import initTranslations from "../../i18n";
import TranslationsProvider from "../TranslationsProvider";
import Terms from "./components/Terms";

const i18nNamespaces = ["home"];

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div>
        <Header />
        <Terms />
        <Footer />
        <CookieConsent />
      </div>
    </TranslationsProvider>
  );
};

export default page;
