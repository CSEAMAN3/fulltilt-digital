// "use client";

// import { useEffect, useRef, useState } from "react";
// import { pricing } from "../lib/pricing";

// interface PricingSliderProps {
//   data: string;
// }

// export default function PricingSlider({ data }: PricingSliderProps) {
//   const scrollerRef = useRef<HTMLDivElement | null>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const rafId = useRef<number | null>(null);

//   const servicePackages = pricing.filter((s) => s.service === data);

//   const count = servicePackages.length;

//   const updateActiveFromScroll = () => {
//     const root = scrollerRef.current;
//     if (!root) return;

//     const left = root.scrollLeft;

//     let bestIndex = 0;
//     let bestDistance = Number.POSITIVE_INFINITY;

//     cardRefs.current.forEach((node, i) => {
//       if (!node) return;
//       const dist = Math.abs(left - node.offsetLeft);
//       if (dist < bestDistance) {
//         bestDistance = dist;
//         bestIndex = i;
//       }
//     });

//     setActiveIndex((prev) => (prev === bestIndex ? prev : bestIndex));
//   };

//   const onScroll = () => {
//     if (rafId.current) cancelAnimationFrame(rafId.current);
//     rafId.current = requestAnimationFrame(updateActiveFromScroll);
//   };

//   const scrollToIndex = (index: number) => {
//     const el = cardRefs.current[index];
//     if (!el) return;

//     el.scrollIntoView({
//       behavior: "smooth",
//       inline: "start",
//       block: "nearest",
//     });
//   };

//   const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
//   const goNext = () => scrollToIndex(Math.min(count - 1, activeIndex + 1));

//   useEffect(() => {
//     // ✅ schedule initial sync, not synchronous setState in effect body
//     rafId.current = requestAnimationFrame(updateActiveFromScroll);

//     return () => {
//       if (rafId.current) cancelAnimationFrame(rafId.current);
//     };
//   }, []);

//   useEffect(() => {
//     const root = scrollerRef.current;
//     if (!root) return;

//     const setEndPadding = () => {
//       const first = cardRefs.current[0];
//       if (!first) return;

//       // padding so the last card can align to left edge
//       const padRight = Math.max(0, root.clientWidth - first.offsetWidth);
//       root.style.paddingRight = `${padRight}px`;
//     };

//     const id = requestAnimationFrame(setEndPadding);
//     window.addEventListener("resize", setEndPadding);

//     return () => {
//       cancelAnimationFrame(id);
//       window.removeEventListener("resize", setEndPadding);
//     };
//   }, []);

//   return (
//     <div className="relative">
//       {/* buttons */}
//       <div className="w-fit grid grid-cols-2 gap-2 mb-4 md:mb-8 ml-auto">
//         <button
//           type="button"
//           onClick={goPrev}
//           disabled={activeIndex === 0}
//           className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
//           aria-label="Previous Service"
//         >
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src="/images/arrow.svg"
//             alt=""
//             width={10}
//             style={{ width: "20px", height: "auto" }}
//             className="group-hover:-rotate-45 transition-all duration-300 scale-x-[-1]"
//           />
//         </button>

//         <button
//           type="button"
//           onClick={goNext}
//           disabled={activeIndex === count - 1}
//           className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
//           aria-label="Next Service"
//         >
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src="/images/arrow.svg"
//             alt=""
//             width={10}
//             style={{ width: "20px", height: "auto" }}
//             className="group-hover:-rotate-45 transition-all duration-300"
//           />
//         </button>
//       </div>
//       {/* scroller */}
//       <div
//         ref={scrollerRef}
//         onScroll={onScroll}
//         className="flex gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] mb-8 md:mb-12"
//       >
//         {servicePackages.map((s, i) => {
//           return (
//             <div
//               key={s.id}
//               ref={(node) => {
//                 cardRefs.current[i] = node;
//               }}
//               className="snap-start shrink-0 w-[70vw] sm:w-[50vw] md:w-[38vw] lg:w-[34vw] max-w-96 rounded-sm bg-brand-accent-one relative group border border-[#c090ff] "
//             >
//               <div className="w-full px-8 pt-16 pb-8 h-full block group">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src="/images/points-v2.svg"
//                   // src="/images/purple-green-points-small.svg"
//                   // src="/images/shape.png"
//                   alt=""
//                   width={10}
//                   style={{ width: "140px", height: "auto" }}
//                   className="absolute bottom-0 right-0"
//                 />
//                 <h3
//                   className={`mb-2 text-lg font-bold transition-colors duration-300 top-16 left-8`}
//                 >
//                   <span className="text-sm block">{s.headingSmall}</span>
//                   {s.headingLarge}
//                 </h3>
//                 <div className="relative z-10 grid place-content-center">
//                   <p className="mb-8 font-light text-balance text-shadow-brand-accent-one text-shadow-lg group-hover:text-shadow-brand-accent-two text-sm">
//                     {s.paragraph}
//                   </p>
//                 </div>
//                 <h3 className="font-bold text-brand-main-dark mb-2">
//                   Starting from
//                 </h3>
//                 <p className="font-bold text-sm mb-8">
//                   <span className="text-3xl">{s.priceLarge} </span>
//                   {s.priceSmall}
//                 </p>
//                 {s.monthlyCarePlan && (
//                   <>
//                     <h4 className="font-bold text-brand-main-extra-dark">
//                       Monthly Care plan
//                     </h4>
//                     <p className="text-xl font-bold mb-4">
//                       {s.monthlyCarePlanPrice}
//                       <span className="text-sm"> + VAT per month</span>
//                     </p>
//                     <h5 className="font-semibold text-sm">
//                       Monthly Care Plan Includes:
//                     </h5>
//                     <p className="font-light text-sm">
//                       secure hosting, technical maintenance, software updates,
//                       website monitoring, Email Support
//                     </p>
//                   </>
//                 )}
//               </div>
//               {s.badge && (
//                 <div className="absolute px-8 py-1 bg-brand-main-dark top-4 left-8 rounded-full text-sm font-bold">
//                   <h6>{s.badgeText}</h6>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { pricing } from "../lib/pricing";

// interface PricingSliderProps {
//   data: string;
// }

// export default function PricingSlider({ data }: PricingSliderProps) {
//   const scrollerRef = useRef<HTMLDivElement | null>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [openCardId, setOpenCardId] = useState<number | null>(null);
//   const rafId = useRef<number | null>(null);

//   const servicePackages = pricing.filter((s) => s.service === data);
//   const count = servicePackages.length;

//   const updateActiveFromScroll = () => {
//     const root = scrollerRef.current;
//     if (!root) return;

//     const left = root.scrollLeft;
//     let bestIndex = 0;
//     let bestDistance = Number.POSITIVE_INFINITY;

//     cardRefs.current.forEach((node, i) => {
//       if (!node) return;

//       const dist = Math.abs(left - node.offsetLeft);

//       if (dist < bestDistance) {
//         bestDistance = dist;
//         bestIndex = i;
//       }
//     });

//     setActiveIndex((prev) => (prev === bestIndex ? prev : bestIndex));
//   };

//   const onScroll = () => {
//     if (rafId.current) cancelAnimationFrame(rafId.current);
//     rafId.current = requestAnimationFrame(updateActiveFromScroll);
//   };

//   const scrollToIndex = (index: number) => {
//     const el = cardRefs.current[index];
//     if (!el) return;

//     el.scrollIntoView({
//       behavior: "smooth",
//       inline: "start",
//       block: "nearest",
//     });
//   };

//   const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
//   const goNext = () => scrollToIndex(Math.min(count - 1, activeIndex + 1));

//   useEffect(() => {
//     rafId.current = requestAnimationFrame(updateActiveFromScroll);

//     return () => {
//       if (rafId.current) cancelAnimationFrame(rafId.current);
//     };
//   }, []);

//   useEffect(() => {
//     const root = scrollerRef.current;
//     if (!root) return;

//     const setEndPadding = () => {
//       const first = cardRefs.current[0];
//       if (!first) return;

//       const padRight = Math.max(0, root.clientWidth - first.offsetWidth);
//       root.style.paddingRight = `${padRight}px`;
//     };

//     const id = requestAnimationFrame(setEndPadding);
//     window.addEventListener("resize", setEndPadding);

//     return () => {
//       cancelAnimationFrame(id);
//       window.removeEventListener("resize", setEndPadding);
//     };
//   }, []);

//   return (
//     <div className="relative">
//       <div className="w-fit grid grid-cols-2 gap-2 mb-4 md:mb-8 ml-auto">
//         <button
//           type="button"
//           onClick={goPrev}
//           disabled={activeIndex === 0}
//           className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
//           aria-label="Previous Service"
//         >
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src="/images/arrow.svg"
//             alt=""
//             width={10}
//             style={{ width: "20px", height: "auto" }}
//             className="group-hover:-rotate-45 transition-all duration-300 scale-x-[-1]"
//           />
//         </button>

//         <button
//           type="button"
//           onClick={goNext}
//           disabled={activeIndex === count - 1}
//           className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
//           aria-label="Next Service"
//         >
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src="/images/arrow.svg"
//             alt=""
//             width={10}
//             style={{ width: "20px", height: "auto" }}
//             className="group-hover:-rotate-45 transition-all duration-300"
//           />
//         </button>
//       </div>

//       <div
//         ref={scrollerRef}
//         onScroll={onScroll}
//         className="flex gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] mb-8 md:mb-12"
//       >
//         {servicePackages.map((s, i) => {
//           const isOpen = openCardId === s.id;

//           return (
//             <div
//               key={s.id}
//               ref={(node) => {
//                 cardRefs.current[i] = node;
//               }}
//               className={`
//                 snap-start
//                 shrink-0
//                 rounded-sm
//                 bg-brand-accent-one
//                 relative
//                 group
//                 border
//                 border-[#c090ff]
//                 transition-all
//                 duration-500
//                 ease-in-out
//                 ${
//                   isOpen
//                     ? "w-[70vw] sm:w-[80vw] md:w-[64vw] lg:w-[56vw] max-w-[720px]"
//                     : "w-[70vw] sm:w-[50vw] md:w-[38vw] lg:w-[34vw] max-w-96"
//                 }
//               `}
//             >
//               <button
//                 type="button"
//                 onClick={() =>
//                   setOpenCardId((prev) => (prev === s.id ? null : s.id))
//                 }
//                 className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full border border-black grid place-items-center font-bold hover:bg-brand-main transition cursor-pointer"
//                 aria-expanded={isOpen}
//                 aria-label={
//                   isOpen ? "Hide package details" : "Show package details"
//                 }
//               >
//                 {isOpen ? "−" : "+"}
//               </button>

//               {s.badge && (
//                 <div className="absolute px-8 py-1 bg-brand-main-dark top-4 left-8 rounded-full text-sm font-bold">
//                   <h6>{s.badgeText}</h6>
//                 </div>
//               )}

//               <div
//                 className={`
//                   w-full
//                   px-8
//                   pt-16
//                   pb-8
//                   h-full
//                   relative
//                   z-10
//                   ${
//                     isOpen
//                       ? "sm:grid sm:grid-cols-2 sm:gap-10 sm:items-start"
//                       : ""
//                   }
//                 `}
//               >
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src="/images/points-v2.svg"
//                   alt=""
//                   width={10}
//                   style={{ width: "140px", height: "auto" }}
//                   className="absolute bottom-0 right-0 z-0"
//                 />

//                 <div className="relative z-10">
//                   <h3 className="mb-2 text-lg font-bold transition-colors duration-300">
//                     <span className="text-sm block">{s.headingSmall}</span>
//                     {s.headingLarge}
//                   </h3>

//                   <p className="mb-8 font-light text-balance text-sm">
//                     {s.paragraph}
//                   </p>

//                   <h3 className="font-bold text-brand-main-extra-dark mb-2">
//                     Starting from
//                   </h3>

//                   <p className="font-bold text-sm mb-8">
//                     <span className="text-3xl">{s.priceLarge} </span>
//                     {s.priceSmall}
//                   </p>

//                   {s.monthlyCarePlan && (
//                     <div className="relative z-10">
//                       <h4 className="font-bold text-brand-main-extra-dark">
//                         Monthly Care Plan
//                       </h4>

//                       <p className="text-xl font-bold mb-4">
//                         {s.monthlyCarePlanPrice}
//                         <span className="text-sm"> + VAT per month</span>
//                       </p>

//                       <h5 className="font-semibold text-sm">
//                         Monthly Care Plan Includes:
//                       </h5>

//                       <p className="font-light text-sm">
//                         Secure hosting, technical maintenance, software updates,
//                         website monitoring, email support.
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 {isOpen && (
//                   <div className="mt-8 sm:mt-0 relative z-10">
//                     <h4 className="font-bold mb-4">{s.bulletHeading}</h4>

//                     <ul className="space-y-2 text-sm font-light">
//                       {s.bulletList.map((item) => (
//                         <li key={item} className="flex gap-2">
//                           <span className="font-bold">•</span>
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { pricing } from "../lib/pricing";

// interface PricingSliderProps {
//   data: string;
// }

// export default function PricingSlider({ data }: PricingSliderProps) {
//   const scrollerRef = useRef<HTMLDivElement | null>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [openCardId, setOpenCardId] = useState<number | null>(null);
//   const rafId = useRef<number | null>(null);

//   const servicePackages = pricing.filter((s) => s.service === data);
//   const count = servicePackages.length;

//   const updateActiveFromScroll = () => {
//     const root = scrollerRef.current;
//     if (!root) return;

//     const left = root.scrollLeft;
//     let bestIndex = 0;
//     let bestDistance = Number.POSITIVE_INFINITY;

//     cardRefs.current.forEach((node, i) => {
//       if (!node) return;

//       const dist = Math.abs(left - node.offsetLeft);

//       if (dist < bestDistance) {
//         bestDistance = dist;
//         bestIndex = i;
//       }
//     });

//     setActiveIndex((prev) => (prev === bestIndex ? prev : bestIndex));
//   };

//   const onScroll = () => {
//     if (rafId.current) cancelAnimationFrame(rafId.current);
//     rafId.current = requestAnimationFrame(updateActiveFromScroll);
//   };

//   const scrollToIndex = (index: number) => {
//     const el = cardRefs.current[index];
//     if (!el) return;

//     el.scrollIntoView({
//       behavior: "smooth",
//       inline: "start",
//       block: "nearest",
//     });
//   };

//   const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
//   const goNext = () => scrollToIndex(Math.min(count - 1, activeIndex + 1));

//   useEffect(() => {
//     rafId.current = requestAnimationFrame(updateActiveFromScroll);

//     return () => {
//       if (rafId.current) cancelAnimationFrame(rafId.current);
//     };
//   }, []);

//   useEffect(() => {
//     const root = scrollerRef.current;
//     if (!root) return;

//     const setEndPadding = () => {
//       const first = cardRefs.current[0];
//       if (!first) return;

//       const padRight = Math.max(0, root.clientWidth - first.offsetWidth);
//       root.style.paddingRight = `${padRight}px`;
//     };

//     const id = requestAnimationFrame(setEndPadding);
//     window.addEventListener("resize", setEndPadding);

//     return () => {
//       cancelAnimationFrame(id);
//       window.removeEventListener("resize", setEndPadding);
//     };
//   }, []);

//   return (
//     <div className="relative">
//       <div className="w-fit grid grid-cols-2 gap-2 mb-4 md:mb-8 ml-auto">
//         <button
//           type="button"
//           onClick={goPrev}
//           disabled={activeIndex === 0}
//           className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
//           aria-label="Previous Service"
//         >
//           <img
//             src="/images/arrow.svg"
//             alt=""
//             width={10}
//             style={{ width: "20px", height: "auto" }}
//             className="group-hover:-rotate-45 transition-all duration-300 scale-x-[-1]"
//           />
//         </button>

//         <button
//           type="button"
//           onClick={goNext}
//           disabled={activeIndex === count - 1}
//           className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
//           aria-label="Next Service"
//         >
//           <img
//             src="/images/arrow.svg"
//             alt=""
//             width={10}
//             style={{ width: "20px", height: "auto" }}
//             className="group-hover:-rotate-45 transition-all duration-300"
//           />
//         </button>
//       </div>

//       <div
//         ref={scrollerRef}
//         onScroll={onScroll}
//         className="flex gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] mb-8 md:mb-12"
//       >
//         {servicePackages.map((s, i) => {
//           const isOpen = openCardId === s.id;

//           return (
//             <motion.div
//               layout
//               key={s.id}
//               ref={(node) => {
//                 cardRefs.current[i] = node;
//               }}
//               transition={{ duration: 0.45, ease: "easeInOut" }}
//               className={`
//                 snap-start
//                 shrink-0
//                 rounded-sm
//                 bg-brand-accent-one
//                 relative
//                 group
//                 border
//                 border-[#c090ff]
//                 overflow-hidden
//                 ${
//                   isOpen
//                     ? "w-[70vw] sm:w-[80vw] md:w-[64vw] lg:w-[56vw] max-w-[720px]"
//                     : "w-[70vw] sm:w-[50vw] md:w-[38vw] lg:w-[34vw] max-w-96"
//                 }
//               `}
//             >
//               <button
//                 type="button"
//                 onClick={() =>
//                   setOpenCardId((prev) => (prev === s.id ? null : s.id))
//                 }
//                 className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full border border-black grid place-items-center font-bold hover:bg-brand-main transition cursor-pointer"
//                 aria-expanded={isOpen}
//                 aria-label={
//                   isOpen ? "Hide package details" : "Show package details"
//                 }
//               >
//                 {isOpen ? "−" : "+"}
//               </button>

//               {s.badge && (
//                 <div className="absolute px-8 py-1 bg-brand-main-dark top-4 left-8 rounded-full text-sm font-bold z-20">
//                   <h6>{s.badgeText}</h6>
//                 </div>
//               )}

//               <motion.div
//                 layout
//                 className={`
//                   w-full
//                   px-8
//                   pt-16
//                   pb-8
//                   h-full
//                   relative
//                   z-10
//                   ${
//                     isOpen
//                       ? "sm:grid sm:grid-cols-2 sm:gap-10 sm:items-start"
//                       : ""
//                   }
//                 `}
//               >
//                 <img
//                   src="/images/points-v2.svg"
//                   alt=""
//                   width={10}
//                   style={{ width: "140px", height: "auto" }}
//                   className="absolute bottom-0 right-0 z-0"
//                 />

//                 <motion.div layout className="relative z-10">
//                   <h3 className="mb-2 text-lg font-bold transition-colors duration-300">
//                     <span className="text-sm block">{s.headingSmall}</span>
//                     {s.headingLarge}
//                   </h3>

//                   <p className="mb-8 font-light text-balance text-sm">
//                     {s.paragraph}
//                   </p>

//                   <h3 className="font-bold text-brand-main-extra-dark mb-2">
//                     Starting from
//                   </h3>

//                   <p className="font-bold text-sm mb-8">
//                     <span className="text-3xl">{s.priceLarge} </span>
//                     {s.priceSmall}
//                   </p>

//                   {s.monthlyCarePlan && (
//                     <div className="relative z-10">
//                       <h4 className="font-bold text-brand-main-extra-dark">
//                         Monthly Care Plan
//                       </h4>

//                       <p className="text-xl font-bold mb-4">
//                         {s.monthlyCarePlanPrice}
//                         <span className="text-sm"> + VAT per month</span>
//                       </p>

//                       <h5 className="font-semibold text-sm">
//                         Monthly Care Plan Includes:
//                       </h5>

//                       <p className="font-light text-sm">
//                         Secure hosting, technical maintenance, software updates,
//                         website monitoring, email support.
//                       </p>
//                     </div>
//                   )}
//                 </motion.div>

//                 <AnimatePresence mode="wait">
//                   {isOpen && (
//                     <motion.div
//                       key="details"
//                       initial={{ opacity: 0, y: 12 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 12 }}
//                       transition={{
//                         duration: 0.25,
//                         delay: 0.18,
//                         ease: "easeOut",
//                       }}
//                       className="mt-8 sm:mt-0 relative z-10"
//                     >
//                       <h4 className="font-bold mb-4">{s.bulletHeading}</h4>

//                       <ul className="space-y-2 text-sm font-light">
//                         {s.bulletList.map((item) => (
//                           <li key={item} className="flex gap-2">
//                             <span className="font-bold">•</span>
//                             <span>{item}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { pricing } from "../lib/pricing";

// interface PricingSliderProps {
//   data: string;
// }

// export default function PricingSlider({ data }: PricingSliderProps) {
//   const scrollerRef = useRef<HTMLDivElement | null>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [openCardId, setOpenCardId] = useState<number | null>(null);
//   const rafId = useRef<number | null>(null);

//   const servicePackages = pricing.filter((s) => s.service === data);
//   const count = servicePackages.length;

//   const updateActiveFromScroll = () => {
//     const root = scrollerRef.current;
//     if (!root) return;

//     const left = root.scrollLeft;
//     let bestIndex = 0;
//     let bestDistance = Number.POSITIVE_INFINITY;

//     cardRefs.current.forEach((node, i) => {
//       if (!node) return;

//       const dist = Math.abs(left - node.offsetLeft);

//       if (dist < bestDistance) {
//         bestDistance = dist;
//         bestIndex = i;
//       }
//     });

//     setActiveIndex((prev) => (prev === bestIndex ? prev : bestIndex));
//   };

//   const onScroll = () => {
//     if (rafId.current) cancelAnimationFrame(rafId.current);
//     rafId.current = requestAnimationFrame(updateActiveFromScroll);
//   };

//   const scrollToIndex = (index: number) => {
//     const el = cardRefs.current[index];
//     if (!el) return;

//     el.scrollIntoView({
//       behavior: "smooth",
//       inline: "start",
//       block: "nearest",
//     });
//   };

//   const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
//   const goNext = () => scrollToIndex(Math.min(count - 1, activeIndex + 1));

//   useEffect(() => {
//     rafId.current = requestAnimationFrame(updateActiveFromScroll);

//     return () => {
//       if (rafId.current) cancelAnimationFrame(rafId.current);
//     };
//   }, []);

//   useEffect(() => {
//     const root = scrollerRef.current;
//     if (!root) return;

//     const setEndPadding = () => {
//       const first = cardRefs.current[0];
//       if (!first) return;

//       const padRight = Math.max(0, root.clientWidth - first.offsetWidth);
//       root.style.paddingRight = `${padRight}px`;
//     };

//     const id = requestAnimationFrame(setEndPadding);
//     window.addEventListener("resize", setEndPadding);

//     return () => {
//       cancelAnimationFrame(id);
//       window.removeEventListener("resize", setEndPadding);
//     };
//   }, []);

//   return (
//     <div className="relative">
//       <div className="w-fit grid grid-cols-2 gap-2 mb-4 md:mb-8 ml-auto">
//         <button
//           type="button"
//           onClick={goPrev}
//           disabled={activeIndex === 0}
//           className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
//           aria-label="Previous Service"
//         >
//           <img
//             src="/images/arrow.svg"
//             alt=""
//             width={10}
//             style={{ width: "20px", height: "auto" }}
//             className="group-hover:-rotate-45 transition-all duration-300 scale-x-[-1]"
//           />
//         </button>

//         <button
//           type="button"
//           onClick={goNext}
//           disabled={activeIndex === count - 1}
//           className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
//           aria-label="Next Service"
//         >
//           <img
//             src="/images/arrow.svg"
//             alt=""
//             width={10}
//             style={{ width: "20px", height: "auto" }}
//             className="group-hover:-rotate-45 transition-all duration-300"
//           />
//         </button>
//       </div>

//       <div
//         ref={scrollerRef}
//         onScroll={onScroll}
//         className="flex gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] mb-8 md:mb-12"
//       >
//         {servicePackages.map((s, i) => {
//           const isOpen = openCardId === s.id;

//           return (
//             <motion.div
//               key={s.id}
//               layout
//               ref={(node) => {
//                 cardRefs.current[i] = node;
//               }}
//               transition={{ duration: 0.45, ease: "easeInOut" }}
//               className={`
//                 snap-start
//                 shrink-0
//                 rounded-sm
//                 bg-brand-accent-one
//                 relative
//                 group
//                 border
//                 border-[#c090ff]
//                 overflow-hidden
//                 ${
//                   isOpen
//                     ? "w-[70vw] sm:w-[80vw] md:w-[64vw] lg:w-[56vw] max-w-[720px]"
//                     : "w-[70vw] sm:w-[50vw] md:w-[38vw] lg:w-[34vw] max-w-96"
//                 }
//               `}
//             >
//               <button
//                 type="button"
//                 onClick={() =>
//                   setOpenCardId((prev) => (prev === s.id ? null : s.id))
//                 }
//                 className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full border border-black grid place-items-center font-bold hover:bg-brand-main transition cursor-pointer"
//                 aria-expanded={isOpen}
//                 aria-label={
//                   isOpen ? "Hide package details" : "Show package details"
//                 }
//               >
//                 {isOpen ? "−" : "+"}
//               </button>

//               {s.badge && (
//                 <div className="absolute px-8 py-1 bg-brand-main-dark top-4 left-8 rounded-full text-sm font-bold z-20">
//                   <h6>{s.badgeText}</h6>
//                 </div>
//               )}

//               <motion.div
//                 layout
//                 className="w-full px-8 pt-16 pb-8 h-full relative z-10 flex gap-10"
//               >
//                 <img
//                   src="/images/points-v2.svg"
//                   alt=""
//                   width={10}
//                   style={{ width: "140px", height: "auto" }}
//                   className="absolute bottom-0 right-0 z-0"
//                 />

//                 <motion.div
//                   layout="position"
//                   className="relative z-10 shrink-0 w-full sm:w-[320px]"
//                 >
//                   <h3 className="mb-2 text-lg font-bold">
//                     <span className="text-sm block">{s.headingSmall}</span>
//                     {s.headingLarge}
//                   </h3>

//                   <p className="mb-8 font-light text-balance text-sm">
//                     {s.paragraph}
//                   </p>

//                   <h3 className="font-bold text-brand-main-extra-dark mb-2">
//                     Starting from
//                   </h3>

//                   <p className="font-bold text-sm mb-8">
//                     <span className="text-3xl">{s.priceLarge} </span>
//                     {s.priceSmall}
//                   </p>

//                   {s.monthlyCarePlan && (
//                     <div className="relative z-10">
//                       <h4 className="font-bold text-brand-main-extra-dark">
//                         Monthly Care Plan
//                       </h4>

//                       <p className="text-xl font-bold mb-4">
//                         {s.monthlyCarePlanPrice}
//                         <span className="text-sm"> + VAT per month</span>
//                       </p>

//                       <h5 className="font-semibold text-sm">
//                         Monthly Care Plan Includes:
//                       </h5>

//                       <p className="font-light text-sm">
//                         Secure hosting, technical maintenance, software updates,
//                         website monitoring, email support.
//                       </p>
//                     </div>
//                   )}

//                   <AnimatePresence>
//                     {isOpen && (
//                       <motion.div
//                         key="mobile-details"
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                         className="sm:hidden mt-8 overflow-hidden relative z-10"
//                       >
//                         <h4 className="font-bold mb-4">{s.bulletHeading}</h4>

//                         <ul className="space-y-2 text-sm font-light">
//                           {s.bulletList.map((item) => (
//                             <li key={item} className="flex gap-2">
//                               <span className="font-bold">•</span>
//                               <span>{item}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>

//                 <AnimatePresence>
//                   {isOpen && (
//                     <motion.div
//                       key="desktop-details"
//                       initial={{ opacity: 0, x: 24 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: 24 }}
//                       transition={{
//                         duration: 0.25,
//                         delay: 0.25,
//                         ease: "easeOut",
//                       }}
//                       className="hidden sm:block relative z-10 flex-1"
//                     >
//                       <h4 className="font-bold mb-4">{s.bulletHeading}</h4>

//                       <ul className="space-y-2 text-sm font-light">
//                         {s.bulletList.map((item) => (
//                           <li key={item} className="flex gap-2">
//                             <span className="font-bold">•</span>
//                             <span>{item}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { pricing } from "../lib/pricing";

// interface PricingSliderProps {
//   data: string;
// }

// export default function PricingSlider({ data }: PricingSliderProps) {
//   const scrollerRef = useRef<HTMLDivElement | null>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
//   const [visibleDetailsId, setVisibleDetailsId] = useState<number | null>(null);

//   const rafId = useRef<number | null>(null);
//   const detailsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const shrinkTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const servicePackages = pricing.filter((s) => s.service === data);
//   const count = servicePackages.length;

//   const updateActiveFromScroll = () => {
//     const root = scrollerRef.current;
//     if (!root) return;

//     const left = root.scrollLeft;
//     let bestIndex = 0;
//     let bestDistance = Number.POSITIVE_INFINITY;

//     cardRefs.current.forEach((node, i) => {
//       if (!node) return;

//       const dist = Math.abs(left - node.offsetLeft);

//       if (dist < bestDistance) {
//         bestDistance = dist;
//         bestIndex = i;
//       }
//     });

//     setActiveIndex((prev) => (prev === bestIndex ? prev : bestIndex));
//   };

//   const onScroll = () => {
//     if (rafId.current) cancelAnimationFrame(rafId.current);
//     rafId.current = requestAnimationFrame(updateActiveFromScroll);
//   };

//   const scrollToIndex = (index: number) => {
//     const el = cardRefs.current[index];
//     if (!el) return;

//     el.scrollIntoView({
//       behavior: "smooth",
//       inline: "start",
//       block: "nearest",
//     });
//   };

//   const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
//   const goNext = () => scrollToIndex(Math.min(count - 1, activeIndex + 1));

//   const toggleCard = (id: number) => {
//     if (detailsTimer.current) clearTimeout(detailsTimer.current);
//     if (shrinkTimer.current) clearTimeout(shrinkTimer.current);

//     const isCurrentlyOpen = expandedCardId === id;

//     if (isCurrentlyOpen) {
//       setVisibleDetailsId(null);

//       shrinkTimer.current = setTimeout(() => {
//         setExpandedCardId(null);
//       }, 180);

//       return;
//     }

//     setVisibleDetailsId(null);
//     setExpandedCardId(id);

//     detailsTimer.current = setTimeout(() => {
//       setVisibleDetailsId(id);
//     }, 280);
//   };

//   useEffect(() => {
//     rafId.current = requestAnimationFrame(updateActiveFromScroll);

//     return () => {
//       if (rafId.current) cancelAnimationFrame(rafId.current);
//       if (detailsTimer.current) clearTimeout(detailsTimer.current);
//       if (shrinkTimer.current) clearTimeout(shrinkTimer.current);
//     };
//   }, []);

//   useEffect(() => {
//     const root = scrollerRef.current;
//     if (!root) return;

//     const setEndPadding = () => {
//       const first = cardRefs.current[0];
//       if (!first) return;

//       const padRight = Math.max(0, root.clientWidth - first.offsetWidth);
//       root.style.paddingRight = `${padRight}px`;
//     };

//     const id = requestAnimationFrame(setEndPadding);
//     window.addEventListener("resize", setEndPadding);

//     return () => {
//       cancelAnimationFrame(id);
//       window.removeEventListener("resize", setEndPadding);
//     };
//   }, []);

//   return (
//     <div className="relative">
//       <div className="w-fit grid grid-cols-2 gap-2 mb-4 md:mb-8 ml-auto">
//         <button
//           type="button"
//           onClick={goPrev}
//           disabled={activeIndex === 0}
//           className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
//           aria-label="Previous Service"
//         >
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src="/images/arrow.svg"
//             alt=""
//             width={10}
//             style={{ width: "20px", height: "auto" }}
//             className="group-hover:-rotate-45 transition-all duration-300 scale-x-[-1]"
//           />
//         </button>

//         <button
//           type="button"
//           onClick={goNext}
//           disabled={activeIndex === count - 1}
//           className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
//           aria-label="Next Service"
//         >
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src="/images/arrow.svg"
//             alt=""
//             width={10}
//             style={{ width: "20px", height: "auto" }}
//             className="group-hover:-rotate-45 transition-all duration-300"
//           />
//         </button>
//       </div>

//       <div
//         ref={scrollerRef}
//         onScroll={onScroll}
//         className="flex gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] mb-8 md:mb-12"
//       >
//         {servicePackages.map((s, i) => {
//           const isExpanded = expandedCardId === s.id;
//           const showDetails = visibleDetailsId === s.id;

//           return (
//             <motion.div
//               key={s.id}
//               layout
//               ref={(node) => {
//                 cardRefs.current[i] = node;
//               }}
//               transition={{ duration: 0.45, ease: "easeInOut" }}
//               className={`
//                 snap-start shrink-0 rounded-sm bg-brand-accent-one relative group
//                 border border-[#c090ff] overflow-hidden
//                 ${
//                   isExpanded
//                     ? "w-[70vw] sm:w-[80vw] md:w-[64vw] lg:w-[56vw] max-w-180"
//                     : "w-[70vw] sm:w-[50vw] md:w-[38vw] lg:w-[34vw] max-w-96"
//                 }
//               `}
//             >
//               <motion.button
//                 type="button"
//                 animate={{ rotate: isExpanded ? 45 : 0 }}
//                 transition={{ duration: 0.2 }}
//                 onClick={() => toggleCard(s.id)}
//                 className={`absolute top-4 right-4 z-20 w-10 h-10 rounded-full border border-black grid place-items-center font-bold hover:bg-brand-main transition cursor-pointer shrink-0 aspect square whitespace-nowrap`}
//                 aria-expanded={isExpanded}
//                 aria-label={
//                   isExpanded ? "Hide package details" : "Show package details"
//                 }
//               >
//                 +
//               </motion.button>

//               {s.badge && (
//                 <div className="absolute px-8 py-1 bg-brand-main-dark top-4 left-8 rounded-full text-sm font-bold z-20 ">
//                   <h6>{s.badgeText}</h6>
//                 </div>
//               )}

//               <motion.div
//                 layout
//                 className="w-full px-8 pt-16 pb-8 h-full relative z-10 flex gap-10"
//               >
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src="/images/points-v2.svg"
//                   alt=""
//                   width={10}
//                   style={{ width: "140px", height: "auto" }}
//                   className="absolute bottom-0 right-0 z-0"
//                 />

//                 <motion.div
//                   layout="position"
//                   className="relative z-10 shrink-0 w-full sm:w-[320px]"
//                 >
//                   <h3 className="mb-2 text-lg font-bold">
//                     <span className="text-sm block">{s.headingSmall}</span>
//                     {s.headingLarge}
//                   </h3>

//                   <p className="mb-8 font-light text-balance text-sm">
//                     {s.paragraph}
//                   </p>

//                   <h3 className="font-bold text-brand-main-extra-dark mb-2">
//                     Starting from
//                   </h3>

//                   <p className="font-bold text-sm mb-8">
//                     <span className="text-3xl">{s.priceLarge} </span>
//                     {s.priceSmall}
//                   </p>

//                   {s.monthlyCarePlan && (
//                     <div className="relative z-10">
//                       <h4 className="font-bold text-brand-main-extra-dark">
//                         Monthly Care Plan
//                       </h4>

//                       <p className="text-xl font-bold mb-4">
//                         {s.monthlyCarePlanPrice}
//                         <span className="text-sm"> + VAT per month</span>
//                       </p>

//                       <h5 className="font-semibold text-sm">
//                         Monthly Care Plan Includes:
//                       </h5>

//                       <p className="font-light text-sm">
//                         Secure hosting, technical maintenance, software updates,
//                         website monitoring, email support.
//                       </p>
//                     </div>
//                   )}

//                   {showDetails && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       transition={{ duration: 0.3, ease: "easeInOut" }}
//                       className="sm:hidden mt-8 overflow-hidden relative z-10"
//                     >
//                       <h4 className="font-bold mb-4">{s.bulletHeading}</h4>

//                       <ul className="space-y-2 text-sm font-light">
//                         {s.bulletList.map((item) => (
//                           <li key={item} className="flex gap-2">
//                             <span className="font-bold">•</span>
//                             <span>{item}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
//                 </motion.div>

//                 {showDetails && (
//                   <motion.div
//                     initial={{ opacity: 0, x: 24 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{
//                       duration: 0.25,
//                       ease: "easeOut",
//                     }}
//                     className="hidden sm:block relative z-10 flex-1"
//                   >
//                     <h4 className="font-bold mb-4">{s.bulletHeading}</h4>

//                     <ul className="space-y-2 text-sm font-light">
//                       {s.bulletList.map((item) => (
//                         <li key={item} className="flex gap-2">
//                           <span className="font-bold">•</span>
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 )}
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { pricing } from "../lib/pricing";

// interface PricingSliderProps {
//   data: string;
// }

// export default function PricingSlider({ data }: PricingSliderProps) {
//   const scrollerRef = useRef<HTMLDivElement | null>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
//   const [visibleDetailsId, setVisibleDetailsId] = useState<number | null>(null);

//   const rafId = useRef<number | null>(null);
//   const detailsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const shrinkTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const servicePackages = pricing.filter((s) => s.service === data);
//   const count = servicePackages.length;

//   const updateActiveFromScroll = () => {
//     const root = scrollerRef.current;
//     if (!root) return;

//     const left = root.scrollLeft;
//     let bestIndex = 0;
//     let bestDistance = Number.POSITIVE_INFINITY;

//     cardRefs.current.forEach((node, i) => {
//       if (!node) return;

//       const dist = Math.abs(left - node.offsetLeft);

//       if (dist < bestDistance) {
//         bestDistance = dist;
//         bestIndex = i;
//       }
//     });

//     setActiveIndex((prev) => (prev === bestIndex ? prev : bestIndex));
//   };

//   const onScroll = () => {
//     if (rafId.current) cancelAnimationFrame(rafId.current);
//     rafId.current = requestAnimationFrame(updateActiveFromScroll);
//   };

//   const scrollToIndex = (index: number) => {
//     const el = cardRefs.current[index];
//     if (!el) return;

//     el.scrollIntoView({
//       behavior: "smooth",
//       inline: "start",
//       block: "nearest",
//     });
//   };

//   const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
//   const goNext = () => scrollToIndex(Math.min(count - 1, activeIndex + 1));

//   const clearTimers = () => {
//     if (detailsTimer.current) clearTimeout(detailsTimer.current);
//     if (shrinkTimer.current) clearTimeout(shrinkTimer.current);
//   };

//   const toggleCard = (id: number) => {
//     clearTimers();

//     const isCurrentlyOpen = expandedCardId === id;

//     if (isCurrentlyOpen) {
//       setVisibleDetailsId(null);

//       shrinkTimer.current = setTimeout(() => {
//         setExpandedCardId(null);
//       }, 320);

//       return;
//     }

//     setVisibleDetailsId(null);
//     setExpandedCardId(id);

//     detailsTimer.current = setTimeout(() => {
//       setVisibleDetailsId(id);
//     }, 320);
//   };

//   useEffect(() => {
//     rafId.current = requestAnimationFrame(updateActiveFromScroll);

//     return () => {
//       if (rafId.current) cancelAnimationFrame(rafId.current);
//       clearTimers();
//     };
//   }, []);

//   useEffect(() => {
//     const root = scrollerRef.current;
//     if (!root) return;

//     const setEndPadding = () => {
//       const first = cardRefs.current[0];
//       if (!first) return;

//       const padRight = Math.max(0, root.clientWidth - first.offsetWidth);
//       root.style.paddingRight = `${padRight}px`;
//     };

//     const id = requestAnimationFrame(setEndPadding);
//     window.addEventListener("resize", setEndPadding);

//     return () => {
//       cancelAnimationFrame(id);
//       window.removeEventListener("resize", setEndPadding);
//     };
//   }, []);

//   return (
//     <div className="relative">
//       <div className="w-fit grid grid-cols-2 gap-2 mb-4 md:mb-8 ml-auto">
//         <button
//           type="button"
//           onClick={goPrev}
//           disabled={activeIndex === 0}
//           className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
//           aria-label="Previous Service"
//         >
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src="/images/arrow.svg"
//             alt=""
//             width={10}
//             style={{ width: "20px", height: "auto" }}
//             className="transition-all duration-300 scale-x-[-1]"
//           />
//         </button>

//         <button
//           type="button"
//           onClick={goNext}
//           disabled={activeIndex === count - 1}
//           className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
//           aria-label="Next Service"
//         >
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src="/images/arrow.svg"
//             alt=""
//             width={10}
//             style={{ width: "20px", height: "auto" }}
//             className="transition-all duration-300"
//           />
//         </button>
//       </div>

//       <div
//         ref={scrollerRef}
//         onScroll={onScroll}
//         className="flex gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] mb-8 md:mb-12"
//       >
//         {servicePackages.map((s, i) => {
//           const isExpanded = expandedCardId === s.id;
//           const showDetails = visibleDetailsId === s.id;

//           return (
//             <motion.div
//               key={s.id}
//               ref={(node) => {
//                 cardRefs.current[i] = node;
//               }}
//               transition={{ duration: 0.45, ease: "easeInOut" }}
//               className={`snap-start shrink-0 rounded-sm bg-brand-accent-one relative group border border-[#c090ff] overflow-hidden transition-[width,max-width] duration-500 ease-in-out ${
//                 isExpanded
//                   ? "w-[70vw] sm:w-[80vw] md:w-[64vw] lg:w-[56vw] max-w-180"
//                   : "w-[70vw] sm:w-[50vw] md:w-[38vw] lg:w-[34vw] max-w-96"
//               }
// `}
//             >
//               {/* eslint-disable-next-line @next/next/no-img-element */}
//               <img
//                 src="/images/points-v2.svg"
//                 alt=""
//                 width={140}
//                 height={140}
//                 className="pointer-events-none absolute bottom-0 right-0 z-0 w-35 h-auto"
//               />

//               <button
//                 type="button"
//                 onClick={() => toggleCard(s.id)}
//                 className="
//     absolute top-4 right-4 z-30
//     size-10 min-w-10 min-h-10 max-w-10 max-h-10
//     shrink-0 grow-0
//     rounded-full border border-black
//     flex items-center justify-center
//     p-0
//     font-bold leading-none
//     hover:bg-brand-main transition-colors
//     cursor-pointer
//     transform:[translateZ(0)]
//   "
//                 style={{
//                   width: "40px",
//                   height: "40px",
//                   minWidth: "40px",
//                   minHeight: "40px",
//                   maxWidth: "40px",
//                   maxHeight: "40px",
//                 }}
//                 aria-expanded={isExpanded}
//                 aria-label={
//                   isExpanded ? "Hide package details" : "Show package details"
//                 }
//               >
//                 <div
//                   className={`
//     relative w-4 h-4
//     transition-transform
//     duration-300
//     ease-in-out
//     ${isExpanded ? "rotate-45" : ""}
//   `}
//                 >
//                   <span className="absolute left-0 top-1/2 h-0.75 w-full bg-current -translate-y-1/2" />
//                   <span className="absolute top-0 left-1/2 w-0.75 h-full bg-current -translate-x-1/2" />
//                 </div>
//               </button>

//               {s.badge && (
//                 <div
//                   className="
//                     absolute top-4 left-8 z-30
//                     px-8 py-1
//                     bg-brand-main-dark rounded-full
//                     text-sm font-bold leading-none
//                     whitespace-nowrap shrink-0
//                   "
//                 >
//                   <h6 className="leading-none">{s.badgeText}</h6>
//                 </div>
//               )}

//               <div
//                 className={`
//     w-full px-8 pt-16 pb-8 relative z-10 flex flex-col gap-10
//     ${isExpanded ? "sm:flex-row" : ""}
//   `}
//               >
//                 <motion.div
//                   layout="position"
//                   className="relative z-10 shrink-0 w-full sm:w-full md:w-[320px] min-w-0"
//                 >
//                   <h3 className="mb-2 text-lg font-bold">
//                     <span className="text-sm block">{s.headingSmall}</span>
//                     {s.headingLarge}
//                   </h3>

//                   <p className="mb-8 font-light text-balance text-sm">
//                     {s.paragraph}
//                   </p>

//                   <h3 className="font-bold text-brand-main-extra-dark mb-2">
//                     Starting from
//                   </h3>

//                   <p className="font-bold text-sm mb-8">
//                     <span className="text-3xl">{s.priceLarge} </span>
//                     {s.priceSmall}
//                   </p>

//                   {s.monthlyCarePlan && (
//                     <div className="relative z-10">
//                       <h4 className="font-bold text-brand-main-extra-dark">
//                         Monthly Care Plan
//                       </h4>

//                       <p className="text-xl font-bold mb-4">
//                         {s.monthlyCarePlanPrice}
//                         <span className="text-sm"> + VAT per month</span>
//                       </p>

//                       <h5 className="font-semibold text-sm">
//                         Monthly Care Plan Includes:
//                       </h5>

//                       <p className="font-light text-sm">
//                         Secure hosting, technical maintenance, software updates,
//                         website monitoring, email support.
//                       </p>
//                     </div>
//                   )}

//                   {/* <motion.div
//                     initial={false}
//                     animate={{
//                       height: showDetails ? "auto" : 0,
//                       opacity: showDetails ? 1 : 0,
//                     }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="sm:hidden mt-8 overflow-hidden relative z-10"
//                   >
//                     <h4 className="font-bold mb-4">{s.bulletHeading}</h4>

//                     <ul className="space-y-2 text-sm font-light">
//                       {s.bulletList.map((item) => (
//                         <li key={item} className="flex gap-2">
//                           <span className="font-bold">•</span>
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div> */}
//                   {isExpanded && (
//                     <motion.div
//                       initial={{ opacity: 0, x: 24 }}
//                       animate={{
//                         opacity: showDetails ? 1 : 0,
//                         x: showDetails ? 0 : 24,
//                       }}
//                       transition={{ duration: 0.25, ease: "easeOut" }}
//                       className={`
//       hidden sm:block relative z-10 flex-1 min-w-0
//       ${showDetails ? "pointer-events-auto" : "pointer-events-none"}
//     `}
//                     >
//                       <h4 className="font-bold mb-4">{s.bulletHeading}</h4>

//                       <ul className="space-y-2 text-sm font-light">
//                         {s.bulletList.map((item) => (
//                           <li key={item} className="flex gap-2">
//                             <span className="font-bold">•</span>
//                             <span>{item}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
//                 </motion.div>

//                 <motion.div
//                   initial={false}
//                   animate={{
//                     opacity: showDetails ? 1 : 0,
//                     x: showDetails ? 0 : 24,
//                   }}
//                   transition={{ duration: 0.25, ease: "easeOut" }}
//                   className={`
//                     hidden sm:block relative z-10 flex-1 min-w-0
//                     ${showDetails ? "pointer-events-auto" : "pointer-events-none"}
//                   `}
//                 >
//                   <h4 className="font-bold mb-4">{s.bulletHeading}</h4>

//                   <ul className="space-y-2 text-sm font-light">
//                     {s.bulletList.map((item) => (
//                       <li key={item} className="flex gap-2">
//                         <span className="font-bold">•</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { pricing } from "../lib/pricing";

// interface PricingSliderProps {
//   data: string;
// }

// export default function PricingSlider({ data }: PricingSliderProps) {
//   const scrollerRef = useRef<HTMLDivElement | null>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
//   const [visibleDetailsId, setVisibleDetailsId] = useState<number | null>(null);

//   const rafId = useRef<number | null>(null);
//   const detailsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const shrinkTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const servicePackages = pricing.filter((s) => s.service === data);
//   const count = servicePackages.length;

//   const updateActiveFromScroll = () => {
//     const root = scrollerRef.current;
//     if (!root) return;

//     const left = root.scrollLeft;
//     let bestIndex = 0;
//     let bestDistance = Number.POSITIVE_INFINITY;

//     cardRefs.current.forEach((node, i) => {
//       if (!node) return;

//       const dist = Math.abs(left - node.offsetLeft);

//       if (dist < bestDistance) {
//         bestDistance = dist;
//         bestIndex = i;
//       }
//     });

//     setActiveIndex((prev) => (prev === bestIndex ? prev : bestIndex));
//   };

//   const onScroll = () => {
//     if (rafId.current) cancelAnimationFrame(rafId.current);
//     rafId.current = requestAnimationFrame(updateActiveFromScroll);
//   };

//   const scrollToIndex = (index: number) => {
//     const el = cardRefs.current[index];
//     if (!el) return;

//     el.scrollIntoView({
//       behavior: "smooth",
//       inline: "start",
//       block: "nearest",
//     });
//   };

//   const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
//   const goNext = () => scrollToIndex(Math.min(count - 1, activeIndex + 1));

//   const clearTimers = () => {
//     if (detailsTimer.current) clearTimeout(detailsTimer.current);
//     if (shrinkTimer.current) clearTimeout(shrinkTimer.current);
//   };

//   const toggleCard = (id: number) => {
//     clearTimers();

//     const isCurrentlyOpen = expandedCardId === id;

//     if (isCurrentlyOpen) {
//       setVisibleDetailsId(null);

//       shrinkTimer.current = setTimeout(() => {
//         setExpandedCardId(null);
//       }, 320);

//       return;
//     }

//     setVisibleDetailsId(null);
//     setExpandedCardId(id);

//     detailsTimer.current = setTimeout(() => {
//       setVisibleDetailsId(id);
//     }, 320);
//   };

//   useEffect(() => {
//     rafId.current = requestAnimationFrame(updateActiveFromScroll);

//     return () => {
//       if (rafId.current) cancelAnimationFrame(rafId.current);
//       clearTimers();
//     };
//   }, []);

//   useEffect(() => {
//     const root = scrollerRef.current;
//     if (!root) return;

//     const setEndPadding = () => {
//       const first = cardRefs.current[0];
//       if (!first) return;

//       const padRight = Math.max(0, root.clientWidth - first.offsetWidth);
//       root.style.paddingRight = `${padRight}px`;
//     };

//     const id = requestAnimationFrame(setEndPadding);
//     window.addEventListener("resize", setEndPadding);

//     return () => {
//       cancelAnimationFrame(id);
//       window.removeEventListener("resize", setEndPadding);
//     };
//   }, []);

//   return (
//     <div className="relative">
//       <div className="w-fit grid grid-cols-2 gap-2 mb-4 md:mb-8 ml-auto">
//         <button
//           type="button"
//           onClick={goPrev}
//           disabled={activeIndex === 0}
//           className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
//           aria-label="Previous Service"
//         >
//           <img
//             src="/images/arrow.svg"
//             alt=""
//             width={10}
//             style={{ width: "20px", height: "auto" }}
//             className="transition-all duration-300 scale-x-[-1]"
//           />
//         </button>

//         <button
//           type="button"
//           onClick={goNext}
//           disabled={activeIndex === count - 1}
//           className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
//           aria-label="Next Service"
//         >
//           <img
//             src="/images/arrow.svg"
//             alt=""
//             width={10}
//             style={{ width: "20px", height: "auto" }}
//             className="transition-all duration-300"
//           />
//         </button>
//       </div>

//       <div
//         ref={scrollerRef}
//         onScroll={onScroll}
//         className="flex gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] mb-8 md:mb-12"
//       >
//         {servicePackages.map((s, i) => {
//           const isExpanded = expandedCardId === s.id;
//           const showDetails = visibleDetailsId === s.id;

//           return (
//             <motion.div
//               key={s.id}
//               ref={(node) => {
//                 cardRefs.current[i] = node;
//               }}
//               className={`snap-start shrink-0 rounded-sm bg-brand-accent-one relative group border border-[#c090ff] overflow-hidden transition-[width,max-width] duration-500 ease-in-out ${
//                 isExpanded
//                   ? "w-[70vw] sm:w-[80vw] md:w-[64vw] lg:w-[56vw] max-w-180"
//                   : "w-[70vw] sm:w-[50vw] md:w-[38vw] lg:w-[34vw] max-w-96"
//               }`}
//             >
//               <img
//                 src="/images/points-v2.svg"
//                 alt=""
//                 width={140}
//                 height={140}
//                 className="pointer-events-none absolute bottom-0 right-0 z-0 w-35 h-auto"
//               />

//               <button
//                 type="button"
//                 onClick={() => toggleCard(s.id)}
//                 className="absolute top-4 right-4 z-30 size-10 min-w-10 min-h-10 max-w-10 max-h-10 shrink-0 grow-0 rounded-full border border-black flex items-center justify-center p-0 font-bold leading-none hover:bg-brand-main transition-colors cursor-pointer"
//                 style={{
//                   width: "40px",
//                   height: "40px",
//                   minWidth: "40px",
//                   minHeight: "40px",
//                   maxWidth: "40px",
//                   maxHeight: "40px",
//                 }}
//                 aria-expanded={isExpanded}
//                 aria-label={
//                   isExpanded ? "Hide package details" : "Show package details"
//                 }
//               >
//                 <div
//                   className={`relative w-4 h-4 transition-transform duration-300 ease-in-out ${
//                     isExpanded ? "rotate-45" : ""
//                   }`}
//                 >
//                   <span className="absolute left-0 top-1/2 h-0.75 w-full bg-current -translate-y-1/2" />
//                   <span className="absolute top-0 left-1/2 w-0.75 h-full bg-current -translate-x-1/2" />
//                 </div>
//               </button>

//               {s.badge && (
//                 <div className="absolute top-4 left-8 z-30 px-8 py-1 bg-brand-main-dark rounded-full text-sm font-bold leading-none whitespace-nowrap shrink-0">
//                   <h6 className="leading-none">{s.badgeText}</h6>
//                 </div>
//               )}

//               <div
//                 className={`w-full px-8 pt-16 pb-8 relative z-10 flex flex-col gap-10 ${
//                   isExpanded ? "sm:flex-row" : ""
//                 }`}
//               >
//                 <div className="relative z-10 shrink-0 w-full sm:w-full md:w-[320px] min-w-0">
//                   <h3 className="mb-2 text-lg font-bold">
//                     <span className="text-sm block">{s.headingSmall}</span>
//                     {s.headingLarge}
//                   </h3>

//                   <p className="mb-8 font-light text-balance text-sm">
//                     {s.paragraph}
//                   </p>

//                   <h3 className="font-bold text-brand-main-extra-dark mb-2">
//                     Starting from
//                   </h3>

//                   <p className="font-bold text-sm mb-8">
//                     <span className="text-3xl">{s.priceLarge} </span>
//                     {s.priceSmall}
//                   </p>

//                   {s.monthlyCarePlan && (
//                     <div className="relative z-10">
//                       <h4 className="font-bold text-brand-main-extra-dark">
//                         Monthly Care Plan
//                       </h4>

//                       <p className="text-xl font-bold mb-4">
//                         {s.monthlyCarePlanPrice}
//                         <span className="text-sm"> + VAT per month</span>
//                       </p>

//                       <h5 className="font-semibold text-sm">
//                         Monthly Care Plan Includes:
//                       </h5>

//                       <p className="font-light text-sm">
//                         Secure hosting, technical maintenance, software updates,
//                         website monitoring, email support.
//                       </p>
//                     </div>
//                   )}

//                   {isExpanded && (
//                     <motion.div
//                       initial={false}
//                       animate={{
//                         height: showDetails ? "auto" : 0,
//                         opacity: showDetails ? 1 : 0,
//                       }}
//                       transition={{ duration: 0.3, ease: "easeInOut" }}
//                       className="sm:hidden mt-8 overflow-hidden relative z-10"
//                     >
//                       <h4 className="font-bold mb-4">{s.bulletHeading}</h4>

//                       <ul className="space-y-2 text-sm font-light">
//                         {s.bulletList.map((item) => (
//                           <li key={item} className="flex gap-2">
//                             <span className="font-bold">•</span>
//                             <span>{item}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
//                 </div>

//                 {isExpanded && (
//                   <motion.div
//                     initial={{ opacity: 0, x: 24 }}
//                     animate={{
//                       opacity: showDetails ? 1 : 0,
//                       x: showDetails ? 0 : 24,
//                     }}
//                     transition={{ duration: 0.25, ease: "easeOut" }}
//                     className={`hidden sm:block relative z-10 flex-1 min-w-0 ${
//                       showDetails
//                         ? "pointer-events-auto"
//                         : "pointer-events-none"
//                     }`}
//                   >
//                     <h4 className="font-bold mb-4">{s.bulletHeading}</h4>

//                     <ul className="space-y-2 text-sm font-light">
//                       {s.bulletList.map((item) => (
//                         <li key={item} className="flex gap-2">
//                           <span className="font-bold">•</span>
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { pricing } from "../lib/pricing";

// interface PricingSliderProps {
//   data: string;
// }

// export default function PricingSlider({ data }: PricingSliderProps) {
//   const scrollerRef = useRef<HTMLDivElement | null>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
//   const [visibleDetailsId, setVisibleDetailsId] = useState<number | null>(null);

//   const rafId = useRef<number | null>(null);
//   const detailsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const shrinkTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

//   const servicePackages = pricing.filter((s) => s.service === data);
//   const count = servicePackages.length;

//   const updateActiveFromScroll = () => {
//     const root = scrollerRef.current;
//     if (!root) return;

//     const left = root.scrollLeft;
//     let bestIndex = 0;
//     let bestDistance = Number.POSITIVE_INFINITY;

//     cardRefs.current.forEach((node, i) => {
//       if (!node) return;

//       const dist = Math.abs(left - node.offsetLeft);

//       if (dist < bestDistance) {
//         bestDistance = dist;
//         bestIndex = i;
//       }
//     });

//     setActiveIndex((prev) => (prev === bestIndex ? prev : bestIndex));
//   };

//   const onScroll = () => {
//     if (rafId.current) cancelAnimationFrame(rafId.current);
//     rafId.current = requestAnimationFrame(updateActiveFromScroll);
//   };

//   const scrollToIndex = (index: number) => {
//     const el = cardRefs.current[index];
//     if (!el) return;

//     el.scrollIntoView({
//       behavior: "smooth",
//       inline: "start",
//       block: "nearest",
//     });
//   };

//   const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
//   const goNext = () => scrollToIndex(Math.min(count - 1, activeIndex + 1));

//   const clearTimers = () => {
//     if (detailsTimer.current) clearTimeout(detailsTimer.current);
//     if (shrinkTimer.current) clearTimeout(shrinkTimer.current);
//   };

//   const toggleCard = (id: number) => {
//     clearTimers();

//     const isCurrentlyOpen = expandedCardId === id;

//     if (isCurrentlyOpen) {
//       setVisibleDetailsId(null);

//       shrinkTimer.current = setTimeout(() => {
//         setExpandedCardId(null);
//       }, 300);

//       return;
//     }

//     setVisibleDetailsId(null);
//     setExpandedCardId(id);

//     detailsTimer.current = setTimeout(() => {
//       setVisibleDetailsId(id);
//     }, 520);
//   };

//   useEffect(() => {
//     rafId.current = requestAnimationFrame(updateActiveFromScroll);

//     return () => {
//       if (rafId.current) cancelAnimationFrame(rafId.current);
//       clearTimers();
//     };
//   }, []);

//   useEffect(() => {
//     const root = scrollerRef.current;
//     if (!root) return;

//     const setEndPadding = () => {
//       const first = cardRefs.current[0];
//       if (!first) return;

//       const padRight = Math.max(0, root.clientWidth - first.offsetWidth);
//       root.style.paddingRight = `${padRight}px`;
//     };

//     const id = requestAnimationFrame(setEndPadding);
//     window.addEventListener("resize", setEndPadding);

//     return () => {
//       cancelAnimationFrame(id);
//       window.removeEventListener("resize", setEndPadding);
//     };
//   }, []);

//   return (
//     <div className="relative">
//       <div className="w-fit grid grid-cols-2 gap-2 mb-4 md:mb-8 ml-auto">
//         <button
//           type="button"
//           onClick={goPrev}
//           disabled={activeIndex === 0}
//           className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
//           aria-label="Previous Service"
//         >
//           <img
//             src="/images/arrow.svg"
//             alt=""
//             width={10}
//             style={{ width: "20px", height: "auto" }}
//             className="transition-all duration-300 scale-x-[-1]"
//           />
//         </button>

//         <button
//           type="button"
//           onClick={goNext}
//           disabled={activeIndex === count - 1}
//           className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
//           aria-label="Next Service"
//         >
//           <img
//             src="/images/arrow.svg"
//             alt=""
//             width={10}
//             style={{ width: "20px", height: "auto" }}
//             className="transition-all duration-300"
//           />
//         </button>
//       </div>

//       <div
//         ref={scrollerRef}
//         onScroll={onScroll}
//         className="flex gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] mb-8 md:mb-12"
//       >
//         {servicePackages.map((s, i) => {
//           const isExpanded = expandedCardId === s.id;
//           const showDetails = visibleDetailsId === s.id;

//           return (
//             <motion.div
//               key={s.id}
//               ref={(node) => {
//                 cardRefs.current[i] = node;
//               }}
//               className={`snap-start shrink-0 rounded-sm bg-brand-accent-one relative group border border-[#c090ff] overflow-hidden transition-[width,max-width] duration-500 ease-in-out ${
//                 isExpanded
//                   ? "w-[70vw] max-w-96 sm:w-[80vw] sm:max-w-[720px] md:w-[64vw] lg:w-[56vw]"
//                   : "w-[70vw] max-w-96 sm:w-[50vw] sm:max-w-96 md:w-[38vw] lg:w-[34vw]"
//               }`}
//             >
//               <img
//                 src="/images/points-v2.svg"
//                 alt=""
//                 width={140}
//                 height={140}
//                 className="pointer-events-none absolute bottom-0 right-0 z-0 w-35 h-auto"
//               />

//               <button
//                 type="button"
//                 onClick={() => toggleCard(s.id)}
//                 className="absolute top-4 right-4 z-30 size-10 min-w-10 min-h-10 max-w-10 max-h-10 shrink-0 grow-0 rounded-full border border-black flex items-center justify-center p-0 font-bold leading-none hover:bg-brand-main transition-colors cursor-pointer"
//                 style={{
//                   width: "40px",
//                   height: "40px",
//                   minWidth: "40px",
//                   minHeight: "40px",
//                   maxWidth: "40px",
//                   maxHeight: "40px",
//                 }}
//                 aria-expanded={isExpanded}
//                 aria-label={
//                   isExpanded ? "Hide package details" : "Show package details"
//                 }
//               >
//                 <div
//                   className={`relative w-4 h-4 transition-transform duration-300 ease-in-out ${
//                     isExpanded ? "rotate-45" : ""
//                   }`}
//                 >
//                   <span className="absolute left-0 top-1/2 h-0.75 w-full bg-current -translate-y-1/2" />
//                   <span className="absolute top-0 left-1/2 w-0.75 h-full bg-current -translate-x-1/2" />
//                 </div>
//               </button>

//               {s.badge && (
//                 <div className="absolute top-4 left-8 z-30 px-8 py-1 bg-brand-main-dark rounded-full text-sm font-bold leading-none whitespace-nowrap shrink-0">
//                   <h6 className="leading-none">{s.badgeText}</h6>
//                 </div>
//               )}

//               <div
//                 className={`w-full px-8 pt-16 pb-8 relative z-10 flex flex-col gap-10 ${
//                   isExpanded ? "sm:flex-row" : ""
//                 }`}
//               >
//                 <div className="relative z-10 shrink-0 w-full sm:w-full md:w-[320px] min-w-0">
//                   <h3 className="mb-2 text-lg font-bold">
//                     <span className="text-sm block">{s.headingSmall}</span>
//                     {s.headingLarge}
//                   </h3>

//                   <p className="mb-8 font-light text-balance text-sm">
//                     {s.paragraph}
//                   </p>

//                   <h3 className="font-bold text-brand-main-extra-dark mb-2">
//                     Starting from
//                   </h3>

//                   <p className="font-bold text-sm mb-8">
//                     <span className="text-3xl">{s.priceLarge} </span>
//                     {s.priceSmall}
//                   </p>

//                   {s.monthlyCarePlan && (
//                     <div className="relative z-10">
//                       <h4 className="font-bold text-brand-main-extra-dark">
//                         Monthly Care Plan
//                       </h4>

//                       <p className="text-xl font-bold mb-4">
//                         {s.monthlyCarePlanPrice}
//                         <span className="text-sm"> + VAT per month</span>
//                       </p>

//                       <h5 className="font-semibold text-sm">
//                         Monthly Care Plan Includes:
//                       </h5>

//                       <p className="font-light text-sm">
//                         Secure hosting, technical maintenance, software updates,
//                         website monitoring, email support.
//                       </p>
//                     </div>
//                   )}

//                   {isExpanded && (
//                     <motion.div
//                       initial={false}
//                       animate={{
//                         height: showDetails ? "auto" : 0,
//                         opacity: showDetails ? 1 : 0,
//                       }}
//                       transition={{ duration: 0.3, ease: "easeInOut" }}
//                       className="sm:hidden mt-8 overflow-hidden relative z-10"
//                     >
//                       <h4 className="font-bold mb-4">{s.bulletHeading}</h4>

//                       <ul className="space-y-2 text-sm font-light">
//                         {s.bulletList.map((item) => (
//                           <li key={item} className="flex gap-2">
//                             <span className="font-bold">•</span>
//                             <span>{item}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
//                 </div>

//                 {isExpanded && (
//                   <motion.div
//                     initial={{ opacity: 0, x: 24 }}
//                     animate={{
//                       opacity: showDetails ? 1 : 0,
//                       x: showDetails ? 0 : 24,
//                     }}
//                     transition={{ duration: 0.25, ease: "easeOut" }}
//                     className={`hidden sm:block relative z-10 flex-1 min-w-0 ${
//                       showDetails
//                         ? "pointer-events-auto"
//                         : "pointer-events-none"
//                     }`}
//                   >
//                     <h4 className="font-bold mb-4">{s.bulletHeading}</h4>

//                     <ul className="space-y-2 text-sm font-light">
//                       {s.bulletList.map((item) => (
//                         <li key={item} className="flex gap-2">
//                           <span className="font-bold">•</span>
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { pricing } from "../lib/pricing";

interface PricingSliderProps {
  data: string;
}

export default function PricingSlider({ data }: PricingSliderProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  let cardHeight = "64rem";
  let cardMinHeight = "20rem";

  if (data === "web") {
    cardHeight = "64rem";
    cardMinHeight = "40rem";
  } else if (data === "brand") {
    cardHeight = "46rem";
    cardMinHeight = "32rem";
  } else if (data === "photo") {
    cardHeight = "48rem";
    cardMinHeight = "34rem";
  } else if (data === "seo") {
    cardHeight = "46rem";
    cardMinHeight = "32rem";
  } else if (data === "graphic") {
    cardHeight = "46rem";
    cardMinHeight = "32rem";
  } else if (data === "social") {
    cardHeight = "46rem";
    cardMinHeight = "32rem";
  }

  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
  const [visibleDetailsId, setVisibleDetailsId] = useState<number | null>(null);
  const [sideLayoutId, setSideLayoutId] = useState<number | null>(null);

  const rafId = useRef<number | null>(null);
  const detailsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shrinkTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const servicePackages = pricing.filter((s) => s.service === data);
  const count = servicePackages.length;

  const updateActiveFromScroll = () => {
    const root = scrollerRef.current;
    if (!root) return;

    const left = root.scrollLeft;
    let bestIndex = 0;
    let bestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((node, i) => {
      if (!node) return;

      const dist = Math.abs(left - node.offsetLeft);

      if (dist < bestDistance) {
        bestDistance = dist;
        bestIndex = i;
      }
    });

    setActiveIndex((prev) => (prev === bestIndex ? prev : bestIndex));
  };

  const onScroll = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(updateActiveFromScroll);
  };

  const scrollToIndex = (index: number) => {
    const el = cardRefs.current[index];
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const goNext = () => scrollToIndex(Math.min(count - 1, activeIndex + 1));

  const clearTimers = () => {
    if (detailsTimer.current) clearTimeout(detailsTimer.current);
    if (shrinkTimer.current) clearTimeout(shrinkTimer.current);
  };

  //   const toggleCard = (id: number) => {
  //     clearTimers();

  //     const isCurrentlyOpen = expandedCardId === id;

  //     if (isCurrentlyOpen) {
  //       setVisibleDetailsId(null);

  //       shrinkTimer.current = setTimeout(() => {
  //         setExpandedCardId(null);
  //       }, 300);

  //       return;
  //     }

  //     setVisibleDetailsId(null);
  //     setExpandedCardId(id);

  //     detailsTimer.current = setTimeout(() => {
  //       setVisibleDetailsId(id);
  //     }, 520);
  //   };

  const toggleCard = (id: number) => {
    clearTimers();

    const isCurrentlyOpen = expandedCardId === id;

    if (isCurrentlyOpen) {
      setVisibleDetailsId(null);

      shrinkTimer.current = setTimeout(() => {
        setSideLayoutId(null);
        setExpandedCardId(null);
      }, 300);

      return;
    }

    setVisibleDetailsId(null);
    setExpandedCardId(id);

    detailsTimer.current = setTimeout(() => {
      setSideLayoutId(id);
      setVisibleDetailsId(id);
    }, 520);
  };

  useEffect(() => {
    rafId.current = requestAnimationFrame(updateActiveFromScroll);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      clearTimers();
    };
  }, []);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const setEndPadding = () => {
      const first = cardRefs.current[0];
      if (!first) return;

      const padRight = Math.max(0, root.clientWidth - first.offsetWidth);
      root.style.paddingRight = `${padRight}px`;
    };

    const id = requestAnimationFrame(setEndPadding);
    window.addEventListener("resize", setEndPadding);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", setEndPadding);
    };
  }, []);

  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = () => {
      setIsMd(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div className="relative">
      <div className="w-fit grid grid-cols-2 gap-2 mb-4 md:mb-8 ml-auto">
        <button
          type="button"
          onClick={goPrev}
          disabled={activeIndex === 0}
          className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
          aria-label="Previous Service"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/arrow.svg"
            alt=""
            width={10}
            style={{ width: "20px", height: "auto" }}
            className="transition-all duration-300 scale-x-[-1]"
          />
        </button>

        <button
          type="button"
          onClick={goNext}
          disabled={activeIndex === count - 1}
          className="font-bold border border-black text-black px-4 py-2 hover:bg-brand-main transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed w-12 h-12 rounded-full"
          aria-label="Next Service"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/arrow.svg"
            alt=""
            width={10}
            style={{ width: "20px", height: "auto" }}
            className="transition-all duration-300"
          />
        </button>
      </div>
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        // className="grid gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] mb-8 md:mb-12"
        // className="grid grid-flow-col auto-cols-[80vw] sm:auto-cols-[420px] gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] mb-8 md:mb-12"
        className="grid grid-flow-col auto-cols-max items-start gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] mb-8 md:mb-12"
        // style={{
        //   gridTemplateColumns: `repeat(${servicePackages.length}, max-content)`,
        // }}
      >
        {servicePackages.map((s, i) => {
          const isExpanded = expandedCardId === s.id;
          const showDetails = visibleDetailsId === s.id;
          const useSideLayout = sideLayoutId === s.id;
          return (
            <motion.div
              //   key={s.id}
              // className={`w-[80vw] sm:w-[60vw]`}
              //   className="snap-start"
              key={s.id}
              className="snap-start border border-brand-main-dark rounded-md overflow-hidden"
              initial={false}
              animate={
                isMd
                  ? {
                      width: isExpanded ? "80vw" : "420px",
                      minWidth: "420px",
                      maxWidth: isExpanded ? "840px" : "420px",
                    }
                  : {
                      width: "80vw",
                      minWidth: "80vw",
                      maxWidth: "80vw",
                    }
              }
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            >
              <motion.div
                ref={(node) => {
                  cardRefs.current[i] = node;
                }}
                animate={
                  isMd
                    ? {
                        // width: isExpanded ? "calc(100% + 5rem)" : "100%",
                        minHeight: cardMinHeight,
                        height: "100%",
                      }
                    : {
                        // width: "100%",
                        height: isExpanded ? cardHeight : "100%",
                      }
                }
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                // className="relative bg-brand-accent-one px-8 py-16 min-w-0 overflow-hidden"
                className="relative bg-brand-accent-one px-8 py-24 w-full min-w-0 overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/points-v2.svg"
                  alt=""
                  width={140}
                  height={140}
                  className="pointer-events-none absolute bottom-0 right-0 z-0 w-40 sm:w-60 h-auto"
                />
                <button
                  type="button"
                  onClick={() => toggleCard(s.id)}
                  className="absolute top-4 right-4 z-30 size-10 min-w-10 min-h-10 max-w-10 max-h-10 shrink-0 grow-0 rounded-full border border-black flex items-center justify-center p-0 font-bold leading-none hover:bg-brand-main transition-colors cursor-pointer"
                  style={{
                    width: "40px",
                    height: "40px",
                    minWidth: "40px",
                    minHeight: "40px",
                    maxWidth: "40px",
                    maxHeight: "40px",
                  }}
                  aria-expanded={isExpanded}
                  aria-label={
                    isExpanded ? "Hide package details" : "Show package details"
                  }
                >
                  <div
                    className={`relative w-4 h-4 transition-transform duration-300 ease-in-out ${
                      isExpanded ? "rotate-45" : ""
                    }`}
                  >
                    <span className="absolute left-0 top-1/2 h-0.75 w-full bg-current -translate-y-1/2" />
                    <span className="absolute top-0 left-1/2 w-0.75 h-full bg-current -translate-x-1/2" />
                  </div>
                </button>
                {/* content */}
                <div
                  //   className={`relative z-10 ${showDetails ? "md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-8" : ""}`}
                  className={`relative z-10 ${useSideLayout ? "md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-8" : ""}`}
                >
                  <div>
                    <div>
                      <h2 className="text-2xl font-bold leading-[0.8] min-w-75 mb-8">
                        <span className="block text-base">
                          {s.headingSmall}
                        </span>
                        {s.headingLarge}
                      </h2>

                      <p className="text-pretty md:max-w-[32ch] min-h-40 mb-4">
                        {s.paragraph}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg">Starting from</h3>

                      <p className="font-bold text-4xl text-brand-main-extra-dark">
                        {s.priceLarge}{" "}
                        <span className="text-base">{s.priceSmall}</span>
                      </p>
                    </div>

                    {s.monthlyCarePlan && (
                      <div className="mt-4">
                        <h4 className="font-bold text-sm">Monthly Care Plan</h4>

                        <p className="font-semibold text-sm text-brand-main-extra-dark mb-2">
                          {s.monthlyCarePlanPrice} + VAT per month
                        </p>

                        <p className="font-light text-sm text-balance max-w-[30ch]">
                          Includes: secure hosting, technical maintenance,
                          software updates, website monitoring, Email and phone
                          Support
                        </p>
                      </div>
                    )}
                  </div>
                  <AnimatePresence>
                    {showDetails && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: isMd ? 16 : 0,
                          y: isMd ? 0 : 12,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: isMd ? 16 : 0,
                          y: isMd ? 0 : 12,
                        }}
                        transition={{
                          duration: 0.25,
                          ease: "easeOut",
                        }}
                        className="mt-8 md:mt-0"
                      >
                        <h4 className="font-bold mb-4">{s.bulletHeading}</h4>

                        <ul className="space-y-2 text-sm font-light">
                          {s.bulletList.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {s.badge && (
                  <div className="absolute top-5 left-8 bg-brand-main-extra-dark px-8 py-1 rounded-full">
                    <p className="font-bold text-sm text-white">
                      {s.badgeText}
                    </p>
                  </div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
