import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-linear-to-b from-brand-main to-transparent">
      <div className="grid place-content-center pt-60 pb-8 px-8">
        <h1 className="font-bold text-balance text-[50px] sm:text-[60px] leading-none text-center tracking-tight max-w-[28ch] mx-auto mb-2 md:mb-4">
          Web Design, Branding, Visuals.
        </h1>
        <p className="font-light text-center text-balance max-w-[60ch] md:text-lg mx-auto mb-4">
          We design, build and maintain fast, bespoke websites that help local
          businesses across the UK rank higher, convert more visitors and grow
          their online presence.
        </p>
        <Link
          href={"/contact"}
          className="font-bold w-fit mx-auto mb-8 flex gap-2 group"
        >
          Lets build something great
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/arrow.svg"
            alt=""
            width={10}
            style={{ width: "20px", height: "auto" }}
            className="group-hover:-rotate-45 transition-all duration-300"
          />
        </Link>
        <div className="max-w-300 mx-auto">
          <Image
            src="/images/first-response-drainage-laptop-mockup.png"
            alt="website design for first response drainage a local drainage company in the East of England"
            width={1000}
            height={1000}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
