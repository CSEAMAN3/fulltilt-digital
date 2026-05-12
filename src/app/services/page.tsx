import HomeContactSection from "@/src/components/HomeContactSection";
import { services } from "@/src/lib/services";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="">
      {/* add structured data regards schemas - this was pasted from another page may be relevant */}
      <div className="bg-linear-to-b from-brand-main to-transparent">
        <div className="text-center grid place-content-center px-8 pt-60 pb-40">
          <h1 className="font-bold text-balance mb-4 max-w-[24ch] text-[40px] sm:text-[60px] leading-none tracking-tight">
            We Mean Business
          </h1>
          <p className="font-light text-balance mb-8 max-w-[60ch] mx-auto">
            We help local businesses grow online through bespoke websites,
            branding, content, visuals and SEO. All designed to work together
            and support your business long-term.
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-foreground/60">
              Scroll down to explore our services.
            </p>

            <span className="block mt-4 animate-bounce">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/arrow.svg"
                alt=""
                width={10}
                style={{ width: "24px", height: "auto" }}
                className="rotate-90 transition-all duration-300"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-240 gap-4 mx-auto px-8 mb-16">
        {services.map((s) => {
          const Icon = s.cardIcon;
          return (
            <div
              key={s.slug}
              className="rounded-sm overflow-hidden bg-brand-accent-one relative group border border-[#c090ff]"
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
                  <p className="mb-8 font-light text-balance text-shadow-brand-accent-one text-shadow-lg group-hover:text-shadow-brand-accent-two ">
                    {s.cardParas[0]}
                  </p>
                  <p className="mb-8 font-light text-balance text-shadow-brand-accent-one text-shadow-lg group-hover:text-shadow-brand-accent-two ">
                    {s.cardParas[1]}
                  </p>
                  <p className="mb-8 font-light text-balance text-shadow-brand-accent-one text-shadow-lg group-hover:text-shadow-brand-accent-two ">
                    {s.cardParas[2]}
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
      <HomeContactSection
        heading="Services designed to help local businesses"
        paragraph="We offer a range of creative and digital services designed to help businesses grow online. Whether you need a high-performing website, stronger branding, better content or improved visibility, we'll help you find the right approach for your business."
      />
    </main>
  );
}
