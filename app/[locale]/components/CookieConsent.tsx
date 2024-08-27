"use client";

import { CookieIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface CookieConsentProps {
  demo?: boolean;
  onAcceptCallback?: () => void;
  onDeclineCallback?: () => void;
}

export default function CookieConsent({
  demo = false,
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}: CookieConsentProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(false);

  const accept = () => {
    setIsOpen(false);
    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    setTimeout(() => {
      setHide(true);
    }, 700);
    onAcceptCallback();
  };

  const decline = () => {
    setIsOpen(false);
    setTimeout(() => {
      setHide(true);
    }, 700);
    onDeclineCallback();
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (document.cookie.includes("cookieConsent=true")) {
        if (!demo) {
          setIsOpen(false);
          setTimeout(() => {
            setHide(true);
          }, 700);
        }
      }
    } catch (e) {
      // Handle error if necessary
    }
  }, [demo]);
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        "fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700 bg-black-100 bg-opacity-90 rounded-3xl",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100",
        hide && "hidden"
      )}
    >
      <div
        className="m-3 rounded-lg"
        style={{
          backgroundColor: "hsl(var(--background) / 1)",
          borderColor: "hsl(var(--border) / 1)",
        }}
      >
        <div className="flex items-center justify-between p-3">
          <h1
            className="text-lg font-medium"
            style={{ color: "hsl(var(--foreground) / 1)" }}
          >
            {t("We use cookies")}
          </h1>
          <CookieIcon
            className="h-[1.2rem] w-[1.2rem]"
            style={{ color: "hsl(var(--foreground) / 1)" }}
          />
        </div>
        <div className="p-3 -mt-2">
          <p
            className="text-sm text-left"
            style={{ color: "hsl(var(--muted-foreground) / 1)" }}
          >
            {t(
              "We use cookies to ensure you get the best experience on our website. For more information on how we use cookies, please see our"
            )}{" "}
            <a
              href="/cookies"
              style={{ color: "inherit", textDecoration: "underline" }}
            >
              {t("cookie policy")}
            </a>
            .
          </p>
        </div>
        <div
          className="p-3 flex items-center gap-2 mt-2"
          style={{
            borderTop: "1px solid hsl(var(--border) / 1)",
          }}
        >
          <Button onClick={accept} className="w-full h-9 rounded-full">
            {t("Accept")}
          </Button>
          <Button
            onClick={decline}
            className="w-full h-9 rounded-full"
            variant="outline"
          >
            {t("Decline")}
          </Button>
        </div>
      </div>
    </div>
  );
}
