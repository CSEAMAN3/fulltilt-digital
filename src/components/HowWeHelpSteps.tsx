"use client";

import { howWeWorkSteps } from "../lib/howWeWorkSteps";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HowWeHelpSteps() {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenStep((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-16 max-w-240 mx-auto">
      <h5 className="font-bold tracking-tight text-3xl sm:text-[40px] mb-8">
        Our process
      </h5>
      <div className="grid gap-4">
        {howWeWorkSteps.map((step) => {
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
                  animate={{ rotate: isOpen ? 225 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`text-background group-hover:text-accent-three border border-black w-8 h-8 rounded-full grid place-content-center hover:bg-brand-main`}
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

//  <h6 className="font-bold tex-2xl">{step.title}</h6>
//               {/* <p>{step.paragraph}</p> */}
//               <button className="absolute h-12 w-12 right-2 top-1">+</button>
