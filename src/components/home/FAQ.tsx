'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How can I search for properties?",
    answer:
      "Use the search bar and filters to browse apartments, houses, villas, offices, and commercial properties based on your preferred location and budget.",
  },
  {
    question: "Are all properties verified?",
    answer:
      "Yes. Every property goes through a verification process before it is published to ensure accurate and trustworthy listings.",
  },
  {
    question: "Can I list my own property?",
    answer:
      "Absolutely! Simply create an account, go to your dashboard, and submit your property details with images.",
  },
  {
    question: "Is there any fee for buyers?",
    answer:
      "No. Buyers can browse properties and contact sellers without any additional platform fee.",
  },
  {
    question: "How do I contact the property owner?",
    answer:
      "Open the property details page and use the contact information or inquiry form to get in touch with the owner or agent.",
  },
  {
    question: "Can I schedule a property visit?",
    answer:
      "Yes. You can request a property visit directly from the property details page.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
            FAQ
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-muted-foreground">
            Find answers to the most common questions about buying,
            selling, renting, and managing properties.
          </p>
        </div>

        <Accordion
          defaultValue={["item-0"]}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border bg-white px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="pb-5 text-base leading-7 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;