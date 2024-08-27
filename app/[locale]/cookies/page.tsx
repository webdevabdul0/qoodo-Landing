import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import CookieEn from "./components/Cookies";
import CookieConsent from "../components/CookieConsent";

import initTranslations from "../../i18n";
import TranslationsProvider from "../TranslationsProvider";

const i18nNamespaces = ["home"];

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <div>
      {" "}
      <Header />
      <CookieEn />
      <Footer t={t} />
      <CookieConsent />
    </div>
  );
};

export default page;
