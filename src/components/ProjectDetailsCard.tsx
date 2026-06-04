"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectDetailsCardProps {
  title: string;
  content: string;
  liveSite: string;
  site: string;
  services: string;
}

export default function ProjectDetailsCard({
  title,
  content,
  liveSite,
  site,
  services,
}: ProjectDetailsCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className={`bg-brand-accent-one border border-brand-main p-8 rounded-2xl h-fit lg:col-span-2 relative overflow-hidden`}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <span className="font-bold block text-lg text-black">
            Project Details
          </span>
        </div>

        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          className="z-10 shrink-0 border border-black text-brand-black w-8 h-8 rounded-full grid place-content-center font-bold cursor-pointer hover:bg-brand-main-dark"
          aria-label={isOpen ? "Close project details" : "Open project details"}
          animate={{ rotate: isOpen ? 45 : 0 }}
        >
          +
        </motion.button>
      </div>

      {/* Expandable Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={"pt-8"}>
              <h1 className="text-brand-main-extra-dark mb-8">
                <span className="font-bold block text-sm mb-2">The Client</span>

                <span className="text-black block text-3xl font-bold mb-2">
                  {title}
                </span>

                <span className="font-bold text-sm">{services}</span>
              </h1>

              <p className="font-light text-black mb-8">{content}</p>
              <a
                href={liveSite}
                target="_blank"
                className="font-bold flex gap-x-2 group w-fit text-black mb-8 hover:text-brand-main-extra-dark"
              >
                Visit {site}
              </a>

              <h2 className="font-bold text-black mb-4">
                Have a similar project in mind?
              </h2>

              <Link
                href="/contact"
                className="font-bold text-lg text-white bg-brand-main-extra-dark px-8 py-2 rounded-full block w-fit hover:bg-brand-main-dark transition-colors duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
