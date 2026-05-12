"use client";

import { Usp } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface UspClickThroughProps {
  heading: string;
  subHeading: string;
  paragraph: string;
  usps: Usp[];
}

export default function UspClickThrough({
  heading,
  subHeading,
  paragraph,
  usps,
}: UspClickThroughProps) {
  const [activeUsp, setActiveUsp] = useState(usps[0]);

  return (
    <div className="text-black px-8 pt-12 pb-8 md:pt-16 md:pb-16 lg:pt-0 lg:pb-4 max-w-300 mx-auto">
      <h2 className="text-3xl md:text-4xl mb-2 font-bold">
        <span className="block text-2xl">{subHeading}</span>
        {heading}
      </h2>
      <p className="text-balance max-w-[80ch] mb-6 md:mb-8 font-light">
        {paragraph}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-200">
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-1 md:gap-y-4 md:overflow-visible pb-2 md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none]">
          {usps.map((u) => {
            const isActive = activeUsp.heading === u.heading;

            return (
              <button
                key={u.heading}
                type="button"
                onClick={() => setActiveUsp(u)}
                className={[
                  "shrink-0 snap-start border px-4 py-2 text-sm sm:text-base md:w-fit md:rounded-none md:border-0 md:border-l-2 md:px-0 md:pl-3 md:py-0 md:text-left md:text-xl transition-all duration-200 cursor-pointer rounded-sm",
                  isActive
                    ? "text-black bg-brand-accent-one font-bold border-brand-main-dark md:bg-transparent"
                    : "text-background border-background/30 md:border-transparent hover:text-accent-three",
                ].join(" ")}
              >
                {u.heading}
              </button>
            );
          })}
        </div>

        <div className="min-h-36 md:min-h-32 pt-1 md:pt-2">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeUsp.heading}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-xl sm:text-2xl lg:text-xl max-w-[34ch] text-balance font-light text-black italic"
            >
              {activeUsp.description}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
