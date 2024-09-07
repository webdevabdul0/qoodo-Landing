import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/[locale]/components/ui/accordion";

import { TFunction } from "i18next";

interface FAQProps {
  t: TFunction<["translation", ...string[]], undefined>;
}

const FAQ: React.FC<FAQProps> = ({ t }) => {
  const QnA = [
    {
      question: t(
        "What benefits does Qoodo's quality management software provide?"
      ),
      answer: t(
        "Qoodo's quality management software enhances operational efficiency, improves safety and compliance, streamlines tracking and reporting processes, and integrates seamlessly with other tools, leading to increased productivity and profitability."
      ),
    },
    {
      question: t("What key features does Qoodo offer for quality management?"),
      answer: t(
        "Qoodo includes essential features such as customizable checklist creation, detailed inspection and audit capabilities, real-time analytics and reporting, mobile accessibility for on-the-go inspections, task assignment and notifications, and centralized data storage."
      ),
    },
    {
      question: t("How does Qoodo improve safety and compliance?"),
      answer: t(
        "Qoodo enhances safety and compliance through regular inspections and audits, real-time tracking of compliance metrics, incident reporting and follow-up alerts, and in-app safety and compliance training, ensuring a secure environment for all stakeholders."
      ),
    },
    {
      question: t("Is Qoodo suitable for various industries and businesses?"),
      answer: t(
        "Yes, Qoodo is versatile and ideal for a wide range of industries and businesses, including:\n- Food Manufacturers\n- Food Service Providers\n- Safety Managers\n- Compliance Officers\n- Quality Assurance Teams\n- Internal and External Auditors\n- Hospitality Industry\n- Healthcare Facilities\n- Manufacturing Plants\n- Retail Chains"
      ),
    },
  ];

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
              <AccordionTrigger className="text-start text-white text-xl md:text-2xl font-semibold font-gilroy leading-10 ">
                {qna.question}
              </AccordionTrigger>
              <AccordionContent className="text-white text-[16px] md:text-xl font-normal font-gilroy leading-[30px]">
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
