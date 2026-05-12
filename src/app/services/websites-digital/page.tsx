import Link from "next/link";
import Image from "next/image";
import UspClickThrough from "@/src/components/UspClickthrough";

export default function WebsiteDigitalPage() {
  return (
    <main className="">
      {/* add structured data regards schemas */}
      <div className="bg-linear-to-b from-brand-main to-transparent">
        <div className="text-center grid place-content-center px-8 pt-60 pb-40">
          <h1 className="font-bold text-balance mb-4 max-w-[24ch] text-[40px] sm:text-[60px] leading-none tracking-tight">
            Websites + Digital
          </h1>
          <p className="font-light text-balance mb-8 max-w-[60ch] mx-auto">
            We design and build high-performance websites for local service
            businesses, built to rank, convert, and support long-term growth.
          </p>
          <Link
            href={"/contact"}
            className="font-bold w-fit mx-auto mb-8 flex gap-2 group bg-brand-main py-4 px-8 rounded-full hover:bg-brand-main-dark transition-all duration-300"
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
        </div>
      </div>
      <div>
        <div className="lg:flex max-w-300 mx-auto">
          <div className="order-2 px-8 lg:grid lg:place-content-end">
            <Image
              src="/images/am-norfolk-roofing-laptop-mockup.png"
              alt="website design for first response drainage a local drainage company in the East of England"
              width={1000}
              height={1000}
              priority
              className="w-full max-w-140 mx-auto"
            />
          </div>
          <div className="order-1">
            <UspClickThrough
              heading="Websites that perform"
              subHeading="Designed to convert"
              paragraph={`A website shouldn't just exist! It should actively support your
        growth. Every build we deliver is structured around performance, speed,
        visibility, and long-term scalability.`}
              usps={[
                {
                  heading: "Load Instantly",
                  description:
                    "Speed isn't optional. Built with modern frameworks like Next.js, our websites are engineered for performance from the ground up.",
                },
                {
                  heading: "Rank Locally",
                  description:
                    "Structured properly with strong technical foundations, clean code, and SEO best practices baked in.",
                },
                {
                  heading: "Convert Consistently",
                  description:
                    "Clear user journeys, strategic layouts, and focused messaging designed to turn visitors into enquiries.",
                },
                {
                  heading: "Work On Every Device",
                  description:
                    "Mobile-first, responsive builds that look sharp and perform seamlessly across all screens.",
                },
                {
                  heading: "Scale With Your Business",
                  description:
                    "Built to evolve, whether you're adding services, locations, content, or growth campaigns.",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
