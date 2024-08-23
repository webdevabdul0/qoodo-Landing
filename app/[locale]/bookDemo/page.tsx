import React from "react";
import initTranslations from "../../i18n";
import TranslationsProvider from "../TranslationsProvider";
import Demo from "./Demo";

const i18nNamespaces = ["bookDemo"];

const Page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Demo />
    </TranslationsProvider>
  );
};

export default Page;
