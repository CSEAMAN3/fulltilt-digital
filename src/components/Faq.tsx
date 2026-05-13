"use client";

import { faqs } from "../lib/faqs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqProps {
  data: string;
  title: string;
  subheading?: string;
  paragraph: string;
}

export default function HowWeHelpSteps({
  data,
  title,
  subheading,
  paragraph,
}: FaqProps) {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenStep((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = faqs.filter((faq) => faq.service === data);

  return (
    <div className=" py-16 max-w-240 mx-auto">
      <h5 className="font-bold tracking-tight text-balance text-center sm:text-left mx-auto text-3xl sm:text-[40px] mb-2 w-fit">
        {subheading && (
          <span className="block text-base sm:text-xl sm:ml-4 md:ml-8">
            {subheading}
          </span>
        )}
        {title}
      </h5>
      <p className="mb-8 text-center text-balance font-light max-w-[80ch] mx-auto">
        {paragraph}
      </p>
      <div className="grid gap-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openStep === faq.id;
          const contentId = `step-${faq.id}-content`;
          return (
            <div
              key={faq.id}
              className="bg-brand-accent-one p-4 rounded-xl border border-brand-main relative"
            >
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="flex justify-between items-center w-full text-left font-semibold text-lg focus:outline-none cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={contentId}
              >
                <span
                  className={`text-background group-hover:text-accent-three text-balance`}
                >
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`text-background group-hover:text-accent-three border border-black w-8 h-8 rounded-full grid place-content-center hover:bg-brand-main font-bold`}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    id={contentId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden text-background font-light"
                  >
                    <p className="py-2 max-w-[80ch] text-pretty">
                      {faq.answer}
                    </p>
                    {/* <p className="py-2 max-w-[80ch] text-pretty">
                      {step.paragraphTwo}
                    </p> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
