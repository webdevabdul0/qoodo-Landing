import { Config } from "next-i18n-router/dist/types";

const i18nConfig: Config = {
  locales: ["es", "en", "hu"],
  defaultLocale: "es",
  localeDetector: false,
};

export default i18nConfig;
