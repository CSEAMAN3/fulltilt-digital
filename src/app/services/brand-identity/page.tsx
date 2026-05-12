import UspClickThrough from "@/src/components/UspClickthrough";
import Link from "next/link";
import Image from "next/image";

export default function BrandIdentityPage() {
  return (
    <main className="">
      {/* add structured data regards schemas */}
      <div className="bg-linear-to-b from-brand-main to-transparent">
        <div className="text-center grid place-content-center px-8 pt-60 pb-40">
          <h1 className="font-bold text-balance mb-4 max-w-[24ch] text-[40px] sm:text-[60px] leading-none tracking-tight">
            Brand + Identity
          </h1>
          <p className="font-light text-balance mb-8 max-w-[60ch] mx-auto">
            We create clear, confident brand identities that help businesses
            stand apart from competitors and build trust with the people they
            want to reach.
          </p>
          <Link
            href={"/contact"}
            className="font-bold w-fit mx-auto mb-8 flex gap-2 group bg-brand-main py-4 px-8 rounded-full hover:bg-brand-main-dark transition-all duration-300"
          >
            Lets create something great
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
      <div className="lg:flex max-w-300 mx-auto">
        <div className="order-2 px-8 lg:grid lg:place-content-end">
          <div className="h-fit relative w-full max-w-140 mx-auto">
            <Image
              src="/images/brandmain.jpg"
              alt="update this"
              width={1000}
              height={1000}
              priority
              className="w-full rounded-xl"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/am-norfolk-roofing-services-neutral-logo.svg"
              alt="fulltilt digital logo"
              className="w-50 h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
            <p className="text-white text-sm absolute bottom-4 left-4">
              AM Norfolk Roofing Services logo
            </p>
          </div>
        </div>
        <div className="order-1">
          <UspClickThrough
            heading="Brands that stand out"
            subHeading="Made memorable"
            paragraph={`A website shouldn't just exist! It should actively support your
        growth. Every build we deliver is structured around performance, speed,
        visibility, and long-term scalability.`}
            usps={[
              {
                heading: "Stand Out Clearly",
                description:
                  "In crowded markets, clarity matters. We create distinctive brand identities that make your business recognisable and memorable..",
              },
              {
                heading: "Buiild Instant Trust",
                description:
                  "A professional brand signals credibility. Thoughtful design and consistent visuals help customers feel confident choosing your business.",
              },
              {
                heading: "Stay Consistent",
                description:
                  "From your website and social media to signage and marketing materials, a clear identity keeps your business looking unified and professional.",
              },
              {
                heading: "Reflect Your Business",
                description:
                  "Your brand should represent the quality of the work you deliver. We design identities that feel authentic to your business and the people behind it.",
              },
              {
                heading: "Grow With Your Business",
                description:
                  "Your brand should be built to last. We design flexible identity systems that evolve as your business expands.",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
