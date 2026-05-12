import Link from "next/link";
import Hero from "../components/Hero";
import HomeServicesSection from "../components/HomeServicesSection";
import HomeContactSection from "../components/HomeContactSection";
// import Image from "next/image";
import { BiSolidQuoteLeft } from "react-icons/bi";
import HowWeHelp from "../components/HowWeHelp";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="relative max-w-300 mx-auto px-16 w-fit grid gap-2 sm:grid-cols-2 mb-8">
        <BiSolidQuoteLeft className="absolute top-0 left-6 w-fit h-fit text-4xl" />
        <p className="font-bold text-4xl max-w-85 text-balance tracking-tight">
          Super pleased with our brand refresh and new website.
        </p>
        <div className="grid gap-y-2">
          <p className="font-light max-w-[38ch] sm:max-w-[34ch]">
            We&#39;re generating more leads and gaining more work than ever
            before. Lots is coming from the website, it&#39;s really allowed us
            to push on as a business.&#34;
          </p>
          <p className="font-bold text-sm text-brand-main-dark">
            Andy Broadley - 1st Response Drainage
          </p>
        </div>
      </div>
      <div className="grid gap-y-4 sm:grid-cols-2 px-16 max-w-132 sm:max-w-210 mx-auto">
        <Link href={"/"} className="font-bold flex gap-x-2 group w-fit">
          View Case Study
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/arrow.svg"
            alt=""
            width={10}
            style={{ width: "20px", height: "auto" }}
            className="group-hover:-rotate-45 transition-all duration-300"
          />
        </Link>
        <Link href={"/"} className="font-bold flex gap-x-2 group w-fit">
          View More Projects
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/arrow.svg"
            alt=""
            width={10}
            style={{ width: "20px", height: "auto" }}
            className="group-hover:-rotate-45 transition-all duration-300"
          />
        </Link>
      </div>
      <HomeServicesSection />
      <HowWeHelp data="main" title="Our process" />
      <HomeContactSection
        heading="Helping local businesses throughout the UK"
        paragraph="Every project starts with a discovery meeting. We'll take the time to understand your business, your goals and the challenges you're looking to solve."
      />
    </main>
  );
}
