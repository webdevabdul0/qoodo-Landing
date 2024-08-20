import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/[locale]/components/ui/accordion";
import { QnA } from "@/app/[locale]/data";
import { TFunction } from "i18next";

interface FAQProps {
  t: TFunction<["translation", ...string[]], undefined>;
}

const FAQ: React.FC<FAQProps> = ({ t }) => {
  return (
    <div className="px-[20px] sm:px-[50px] md:px-[100px] py-[130px]">
      <div>
        <h3 className="heading2 mb-[20px]">
          {t("Frequently Asked Questions")}
        </h3>
      </div>
      <div>
        {QnA.map((qna, index) => (
          <Accordion type="single" collapsible key={index}>
            <AccordionItem
              value={`item-${index}`}
              className="border-[#333333] mb-[30px]"
            >
              <AccordionTrigger className="text-start text-white text-xl md:text-2xl font-semibold font-['Gilroy'] leading-10 ">
                {qna.question}
              </AccordionTrigger>
              <AccordionContent className="text-white text-[16px] md:text-xl font-normal font-['Gilroy'] leading-[30px]">
                {qna.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}{" "}
      </div>
    </div>
  );
};

export default FAQ;
