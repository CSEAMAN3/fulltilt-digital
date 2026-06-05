"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "../lib/services";

export default function ServicesSlider() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafId = useRef<number | null>(null);
  // const [activeParas, setActiveParas] = useState<number[]>(
  //   services.map(() => 0),
  // );

  // const setActiveParaForCard = (cardIndex: number, paraIndex: number) => {
  //   setActiveParas((prev) => {
  //     const next = [...prev];
  //     next[cardIndex] = paraIndex;
  //     return next;
  //   });
  // };

  const count = services.length;

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
        {services.map((s, i) => {
          const Icon = s.cardIcon;
          return (
            <div
              key={s.slug}
              ref={(node) => {
                cardRefs.current[i] = node;
              }}
              className="snap-start shrink-0 w-[70vw] sm:w-[50vw] md:w-[38vw] lg:w-[34vw] max-w-96 rounded-sm overflow-hidden bg-brand-accent-one relative group border border-brand-main-dark"
            >
              <Link
                className="w-full px-8 pt-24 pb-16 h-full block group hover:bg-brand-accent-two transition-colors duration-300"
                href={`/services/${s.slug}`}
              >
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
                <Icon size={32} className={`absolute top-6 right-8`} />
                <h3
                  className={`mb-2 text-lg font-bold transition-colors duration-300 absolute top-16 left-8`}
                >
                  {s.name}
                </h3>
                <div className="relative z-10 grid place-content-center">
                  <p className="mb-8 font-light text-balance text-shadow-brand-accent-one text-shadow-lg group-hover:text-shadow-brand-accent-two">
                    {s.cardParas[1]}
                  </p>
                </div>
                <h6
                  className={`font-bold absolute bottom-4 transition-colors duration-300 flex gap-x-4`}
                >
                  Explore more
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/arrow.svg"
                    alt=""
                    width={10}
                    style={{ width: "20px", height: "auto" }}
                    className="group-hover:-rotate-45 transition-all duration-300"
                  />
                </h6>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
