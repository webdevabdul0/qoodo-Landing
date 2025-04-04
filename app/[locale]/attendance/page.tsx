import Hero from "./components/Hero";
import Attendance from "./components/Attendance";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import initTranslations from "../../i18n";
import TranslationsProvider from "../TranslationsProvider";
import CookieConsent from "../components/CookieConsent";
import SeatCard from "./components/SeatCard";

const i18nNamespaces = ["home"];

const page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <Header />
        <Hero t={t} />
        <Attendance t={t} />
        <SeatCard t={t} />
        <Footer />
        <CookieConsent />
      </TranslationsProvider>
    </div>
  );
};

export default page;
