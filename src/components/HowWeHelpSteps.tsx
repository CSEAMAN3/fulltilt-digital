"use client";

import { howWeWorkSteps } from "../lib/howWeWorkSteps";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HowWeHelpStepsProps {
  data: string;
  title: string;
}

export default function HowWeHelpSteps({ data, title }: HowWeHelpStepsProps) {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenStep((prev) => (prev === id ? null : id));
  };

  const filteredSteps = howWeWorkSteps.filter(
    (steps) => steps.catagory === data,
  );

  return (
    <div className="py-16 max-w-240 mx-auto">
      <h5 className="font-bold tracking-tight text-3xl sm:text-[40px] mb-8">
        {title}
      </h5>
      <div className="grid gap-4">
        {filteredSteps.map((step) => {
          const isOpen = openStep === step.id;
          const contentId = `step-${step.id}-content`;
          return (
            <div
              key={step.id}
              className="bg-brand-accent-one p-4 rounded-xl border border-brand-main relative"
            >
              <button
                onClick={() => toggleQuestion(step.id)}
                className="flex justify-between items-center w-full text-left font-semibold text-lg focus:outline-none cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={contentId}
              >
                <span
                  className={`text-background group-hover:text-accent-three text-balance`}
                >
                  {step.title}
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
                    <p className="py-2">{step.paragraph}</p>
                    <p className="py-2">{step.paragraphTwo}</p>
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
