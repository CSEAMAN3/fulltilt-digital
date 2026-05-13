"use client";

import { useEffect, useRef, useState } from "react";
import { howWeWorkSteps } from "../lib/howWeWorkSteps";

interface HowWeHelpSliderProps {
  data: string;
}

export default function HowWeHelpSlider({ data }: HowWeHelpSliderProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafId = useRef<number | null>(null);

  const steps = howWeWorkSteps.filter((s) => s.catagory === data);

  const count = steps.length;

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

  useEffect(() => {
    // ✅ schedule initial sync, not synchronous setState in effect body
    rafId.current = requestAnimationFrame(updateActiveFromScroll);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const setEndPadding = () => {
      const first = cardRefs.current[0];
      if (!first) return;

      // padding so the last card can align to left edge
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

  return (
    <div className="relative">
      {/* buttons */}
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
            className="group-hover:-rotate-45 transition-all duration-300 scale-x-[-1]"
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
            className="group-hover:-rotate-45 transition-all duration-300"
          />
        </button>
      </div>
      {/* scroller */}
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="flex gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] mb-8 md:mb-12"
      >
        {steps.map((s, i) => {
          return (
            <div
              key={s.id}
              ref={(node) => {
                cardRefs.current[i] = node;
              }}
              className="snap-start shrink-0 w-[70vw] sm:w-[50vw] md:w-[38vw] lg:w-[34vw] max-w-96 rounded-sm overflow-hidden bg-brand-accent-one relative group border border-[#c090ff]"
            >
              <div className="w-full px-8 pt-16 pb-8 h-full block group hover:bg-brand-accent-two transition-colors duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/points-v2.svg"
                  // src="/images/purple-green-points-small.svg"
                  // src="/images/shape.png"
                  alt=""
                  width={10}
                  style={{ width: "240px", height: "auto" }}
                  className="absolute bottom-0 right-0"
                />
                <h3
                  className={`mb-2 text-lg font-bold transition-colors duration-300 top-16 left-8`}
                >
                  {s.title}
                </h3>
                <div className="relative z-10 grid place-content-center">
                  <p className="mb-8 font-light text-balance text-shadow-brand-accent-one text-shadow-lg group-hover:text-shadow-brand-accent-two">
                    {s.paragraph}
                  </p>
                  <p className="mb-8 font-light text-balance text-shadow-brand-accent-one text-shadow-lg group-hover:text-shadow-brand-accent-two">
                    {s.paragraphTwo}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
