import Link from "next/link";

import HomeContactSection from "@/src/components/HomeContactSection";
import Faq from "@/src/components/Faq";
import HowWeHelpSlider from "@/src/components/HowWeHelpSlider";
import Image from "next/image";
import UspClickThrough from "@/src/components/UspClickthrough";

export default function SocialContentPage() {
  return (
    <main className="">
      {/* add structured data regards schemas */}
      <div className="bg-linear-to-b from-brand-main to-transparent">
        <div className="text-center grid place-content-center px-8 pt-60 pb-40">
          <h1 className="font-bold text-balance mb-4 max-w-[24ch] text-[40px] sm:text-[60px] leading-none tracking-tight">
            Social + Content
          </h1>
          <p className="font-light text-balance mb-8 max-w-[60ch] mx-auto">
            We create clear, consistent social media content that keeps your
            business visible, builds trust with your audience and helps tell the
            story behind the work you do.
          </p>
          <Link
            href={"/contact"}
            className="font-bold w-fit mx-auto mb-8 flex gap-2 group bg-brand-main py-4 px-8 rounded-full hover:bg-brand-main-dark transition-all duration-300"
          >
            Lets get your story told
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
      {/* missing section here */}
      <div className="lg:flex max-w-300 mx-auto">
        <div className="order-2 px-8 lg:grid lg:place-content-end">
          <div className="h-fit relative w-full max-w-140 mx-auto">
            <Image
              src="/images/socialcontentgraphic.png"
              alt="update this"
              width={1000}
              height={1000}
              priority
              className="w-full rounded-xl"
            />
          </div>
        </div>
        <div className="order-1">
          <UspClickThrough
            heading="Content That Connects"
            subHeading="Build trust"
            paragraph={`Strong visual content helps people understand your business quickly and builds confidence in the quality of your work.`}
            usps={[
              {
                heading: "Stay Visible",
                description:
                  "Regular content keeps your business appearing in front of customers and reminds people that you're active and available.",
              },
              {
                heading: "Show Your Work",
                description:
                  "Social content is the perfect place to showcase the projects you complete, the process behind them and the results you deliver.",
              },
              {
                heading: "Build Familiarity",
                description:
                  "The more people see your business online, the more familiar and trusted your brand becomes.",
              },
              {
                heading: "Share Your Story",
                description:
                  "Content gives you the opportunity to show the personality behind your business and the people who make it happen.",
              },
              {
                heading: "Support Your Marketing",
                description:
                  "Good social content strengthens everything else you do, from your website to advertising and brand awareness.",
              },
            ]}
          />
        </div>
      </div>
      <div className="px-8 py-8 sm:py-16 max-w-300 mx-auto">
        <h2 className="font-bold tracking-tight text-balance mx-auto text-3xl sm:text-[40px] mb-8 w-fit">
          <span className="block text-xl ml-4 md:ml-8">How we work</span>
          Our social content process
        </h2>
        <HowWeHelpSlider data="social" />
      </div>
      <div>
        <HomeContactSection
          heading="Content that keeps your business visible"
          paragraph="Consistent content helps businesses stay relevant, build trust and attract attention online. We help create structured, high-quality content that supports your brand and keeps your business visible to the right audience."
        />
      </div>
      <div className="px-8">
        <Faq
          data="social"
          title="Frequently Asked Questions"
          subheading="Social + Content"
          paragraph="Everything you need to know about content creation, social media support and building a consistent online presence that keeps your business visible and engaging."
        />
      </div>
    </main>
  );
}
