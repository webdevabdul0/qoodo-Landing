import React from "react";
import initTranslations from "../../i18n";
import TranslationsProvider from "../TranslationsProvider";
import Demo from "./Demo";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import CookieConsent from "../components/CookieConsent";
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
      <Demo />
      <Footer t={t} />
      <CookieConsent />
    </TranslationsProvider>
  );
};

export default Page;
