import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import initTranslations from "../../i18n";
import TranslationsProvider from "../TranslationsProvider";
import Terms from "./components/Terms";

const i18nNamespaces = ["home"];

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <div>
      <Header />
      <Terms />
      <Footer t={t} />
    </div>
  );
};

export default page;
