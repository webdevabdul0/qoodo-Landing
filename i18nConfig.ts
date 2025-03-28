import { Config } from "next-i18n-router/dist/types";

const i18nConfig: Config = {
  locales: ["es", "hu", "en"], // Order matters! Ensure "es" is first
  defaultLocale: "hu", // Default should be "es"
  localeDetector: (request) => {
    return "es"; // Force "es" as the detected locale
  },
};

export default i18nConfig;
