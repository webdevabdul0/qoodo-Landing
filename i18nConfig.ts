import { Config } from "next-i18n-router/dist/types";

const i18nConfig: Config = {
  locales: ["hu", "en", "es"], // Order matters! Ensure "es" is first
  defaultLocale: "hu", // Default should be "es"
};

export default i18nConfig;
