"use client";
import { faqType } from "@/types/faqType";
import Accordion from "@/components/accordion";
import { SetStateAction, useState } from "react";

interface FAQPropTypes {
  faqItems: faqType[];
}

const FAQSection = ({ faqItems }: FAQPropTypes) => {
  const [selectedFAQ, setSelectedFAQ] = useState(faqItems[0].id);
  const onOptionChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSelectedFAQ(e.target.value);
  };

  return (
    <section className="flex flex-col align-middle" id="faq">
      <h2 className="text-center my-4">Frequently Asked Questions</h2>
      <fieldset className="accordion">
        {faqItems.map((faq) => (
          <Accordion
            faqData={faq}
            key={faq.id}
            selectedID={selectedFAQ}
            setSelectedFAQID={onOptionChange}
          />
        ))}
      </fieldset>
    </section>
  );
};

export default FAQSection;
