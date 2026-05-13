import Link from "next/link";
import UspClickThrough from "@/src/components/UspClickthrough";
import Image from "next/image";
import HowWeHelpSlider from "@/src/components/HowWeHelpSlider";

export default function SeoPage() {
  return (
    <main className="">
      {/* add structured data regards schemas */}
      <div className="bg-linear-to-b from-brand-main to-transparent">
        <div className="text-center grid place-content-center px-8 pt-60 pb-40">
          <h1 className="font-bold text-balance mb-4 max-w-[24ch] text-[40px] sm:text-[60px] leading-none tracking-tight">
            SEO
          </h1>
          <p className="font-light text-balance mb-8 max-w-[60ch] mx-auto">
            We optimise websites so your business can be found by the people
            actively searching for the services you offer, helping increase
            visibility, build credibility and generate more enquiries online.
          </p>
          <Link
            href={"/contact"}
            className="font-bold w-fit mx-auto mb-8 flex gap-2 group bg-brand-main py-4 px-8 rounded-full hover:bg-brand-main-dark transition-all duration-300"
          >
            Lets give your site a boost
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
              src="/images/seo-laptop-mockup.png"
              alt="update this"
              width={3027}
              height={1562}
              priority
              className="w-full rounded-xl"
            />
          </div>
        </div>
        <div>
          <UspClickThrough
            heading="Search that works"
            subHeading="Fully Optimised"
            paragraph={`Search engine optimisation helps your business appear when potential customers are actively looking for the services you offer. We focus on building strong technical foundations, clear site structure and optimised content that improves visibility and helps attract the right visitors.`}
            usps={[
              {
                heading: "Be Found Locally",
                description:
                  "Local SEO helps your business appear in search results when people nearby are looking for the services you offer.",
              },
              {
                heading: "Build Strong Foundations",
                description:
                  "Technical SEO ensures your website is structured properly so search engines can understand and index your pages effectively.",
              },
              {
                heading: "Improve Visibility",
                description:
                  "Optimised pages, clear content and strong site structure help improve your website's visibility in search engines.",
              },
              {
                heading: "Attract The Right Visitors",
                description:
                  "SEO focuses on bringing in people who are actively searching for the services your business provides.",
              },
              {
                heading: "Support Long-Term Growth",
                description:
                  "Unlike short-term marketing tactics, SEO builds long-term visibility that continues to benefit your business over time.",
              },
            ]}
          />
        </div>
      </div>
      <div className="px-8 py-8 sm:py-16 max-w-300 mx-auto">
        <h2 className="font-bold tracking-tight text-balance mx-auto text-3xl sm:text-[40px] mb-8 w-fit">
          <span className="block text-xl ml-4 md:ml-8">How we work</span>
          Our search engine optimisation process
        </h2>
        <HowWeHelpSlider data="seo" />
      </div>
    </main>
  );
}
