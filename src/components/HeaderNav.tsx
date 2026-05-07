"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { navigations, servicesNav } from "../lib/navigations";

const overlayVariants = {
  open: {
    opacity: 1,
    pointerEvents: "auto" as const,
    visibility: "visible" as const,
    transition: {
      duration: 0.3,
      when: "beforeChildren" as const,
    },
  },
  close: {
    opacity: 0,
    pointerEvents: "none" as const,
    visibility: "hidden" as const,
    transition: {
      duration: 0.3,
      when: "afterChildren" as const,
    },
  },
};

const navListVariants = {
  open: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.08,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1 as const,
    },
  },
};

const navItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.22,
      ease: "easeOut" as const,
    },
  },
  close: {
    opacity: 0,
    y: 8,
    transition: {
      duration: 0.18,
      ease: "easeIn" as const,
    },
  },
};

const servicesDropdownVariants = {
  open: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut" as const,
    },
  },
  close: {
    opacity: 0,
    height: 0,
    y: -8,
    transition: {
      duration: 0.2,
      ease: "easeIn" as const,
    },
  },
};

const servicesListVariants = {
  open: {
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.05,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1 as const,
    },
  },
};

const servicesItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.18,
      ease: "easeOut" as const,
    },
  },
  close: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.14,
      ease: "easeIn" as const,
    },
  },
};

export default function HeaderNav() {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleServices, setToggleServices] = useState(false);

  useEffect(() => {
    if (toggleNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [toggleNav]);

  const pathname = usePathname();

  const handleCloseNav = () => {
    setToggleNav(false);
    setToggleServices(false);
  };

  return (
    <div>
      <motion.div animate={toggleNav ? "open" : "close"} initial="close">
        <motion.div
          id="mobile-navigation"
          className="bg-brand-main-dark fixed top-0 left-0 z-50 w-screen h-screen overflow-y-auto"
          variants={overlayVariants}
        >
          <motion.div
            className="mx-auto mt-24 sm:mt-32 w-64 grid gap-4 px-8 pb-8"
            variants={navListVariants}
          >
            {navigations.map((item) => {
              const isActive = pathname === item.href;
              const isServicesItem =
                item.title.toLowerCase() === "services" ||
                item.href === "/services";

              if (isServicesItem) {
                const hasActiveService = servicesNav.some(
                  (service) => pathname === service.href,
                );

                return (
                  <motion.div
                    key={item.title}
                    className="w-fit"
                    variants={navItemVariants}
                  >
                    <button
                      type="button"
                      onClick={() => setToggleServices((prev) => !prev)}
                      className={`gradient-link flex w-fit items-center gap-3 font-bold text-4xl transition-colors duration-300 cursor-pointer ${
                        isActive || hasActiveService
                          ? "text-accent-one"
                          : "text-black hover:text-brand-accent-one"
                      }`}
                      aria-expanded={toggleServices}
                      aria-controls="services-submenu"
                    >
                      <span>{item.title}</span>
                      <motion.span
                        animate={{ rotate: toggleServices ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-2xl"
                      >
                        +
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {toggleServices && (
                        <motion.div
                          id="services-submenu"
                          variants={servicesDropdownVariants}
                          initial="close"
                          animate="open"
                          exit="close"
                          className="mt-4 ml-4"
                        >
                          <motion.div
                            className="grid gap-3"
                            variants={servicesListVariants}
                            initial="close"
                            animate="open"
                            exit="close"
                          >
                            <motion.div variants={servicesItemVariants}>
                              <Link
                                href={item.href}
                                onClick={handleCloseNav}
                                className={`gradient-link w-fit text-lg font-semibold transition-colors duration-300 ${
                                  isActive
                                    ? "text-accent-one"
                                    : "text-black hover:text-brand-accent-one"
                                }`}
                              >
                                All Services
                              </Link>
                            </motion.div>

                            {servicesNav.map((service) => {
                              const isServiceActive = pathname === service.href;

                              return (
                                <motion.div
                                  key={service.title}
                                  variants={servicesItemVariants}
                                >
                                  <Link
                                    href={service.href}
                                    onClick={handleCloseNav}
                                    className={`gradient-link w-fit text-lg transition-colors duration-300 ${
                                      isServiceActive
                                        ? "text-accent-one"
                                        : "text-black hover:text-brand-accent-one"
                                    }`}
                                  >
                                    {service.title}
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              }

              return (
                <motion.div key={item.title} variants={navItemVariants}>
                  <Link
                    href={item.href}
                    onClick={handleCloseNav}
                    className={`gradient-link w-fit font-bold text-4xl transition-colors duration-300 ${
                      isActive
                        ? "text-brand-accent-one"
                        : "text-black hover:text-brand-accent-one"
                    }`}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.button
        className={`group z-50 h-6 w-8 cursor-pointer ${
          toggleNav ? "fixed" : "absolute"
        } right-8 top-8`}
        onClick={() => setToggleNav(!toggleNav)}
        initial={false}
        animate={toggleNav ? "open" : "close"}
        type="button"
        aria-label="Toggle navigation menu"
        aria-controls="mobile-navigation"
        aria-expanded={toggleNav}
      >
        <motion.div
          className="absolute h-1 w-full bg-black transition-colors duration-300 group-hover:bg-brand-accent-one rounded-full"
          style={{
            top: "0%",
            y: "0%",
            rotate: "0deg",
          }}
          variants={{
            open: {
              top: ["0%", "50%", "50%"],
              y: ["0%", "-50%", "-50%"],
              rotate: ["0deg", "0deg", "45deg"],
            },
            close: {
              top: ["50%", "50%", "0%"],
              y: ["-50%", "-50%", "0%"],
              rotate: ["45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.div
          className="absolute h-1 w-full bg-black transition-colors duration-300 group-hover:bg-brand-accent-one rounded-full"
          style={{
            top: "50%",
            y: "-50%",
            rotate: "0deg",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.div
          className="absolute h-1 w-full bg-black transition-colors duration-300 group-hover:bg-brand-accent-one rounded-full"
          style={{
            top: "100%",
            y: "-100%",
            rotate: "0deg",
          }}
          variants={{
            open: {
              top: ["100%", "50%", "50%"],
              y: ["-100%", "-50%", "-50%"],
              rotate: ["0deg", "0deg", "-45deg"],
            },
            close: {
              top: ["50%", "50%", "100%"],
              y: ["-50%", "-50%", "-100%"],
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
      </motion.button>
    </div>
  );
}
