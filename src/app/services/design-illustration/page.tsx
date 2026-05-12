import Link from "next/link";
import UspClickThrough from "@/src/components/UspClickthrough";
import Image from "next/image";
import HowWeHelpSteps from "@/src/components/HowWeHelpSteps";

export default function DesignIllustrationPage() {
  return (
    <main className="">
      {/* add structured data regards schemas */}
      <div className="bg-linear-to-b from-brand-main to-transparent">
        <div className="text-center grid place-content-center px-8 pt-60 pb-40">
          <h1 className="font-bold text-balance mb-4 max-w-[24ch] text-[40px] sm:text-[60px] leading-none tracking-tight">
            Design + Illustration
          </h1>
          <p className="font-light text-balance mb-8 max-w-[60ch] mx-auto">
            We create thoughtful design and illustration that strengthen your
            brand, communicate ideas clearly and help your business stand out
            across your website, marketing and digital content.
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
        <div className="lg:flex max-w-300 mx-auto">
          <div className="order-2 px-8 lg:grid lg:place-content-end">
            <div className="h-fit relative w-full max-w-140 mx-auto">
              <Image
                src="/images/design-illustration.png"
                alt="update this"
                width={2500}
                height={1458}
                priority
                className="w-full rounded-xl"
              />
            </div>
          </div>
          <div>
            <UspClickThrough
              heading="Design That Delivers"
              subHeading="Visually driven"
              paragraph={`Good design helps your business communicate ideas clearly and present itself professionally to strengthen your brand, support your marketing and help your business stand out across every touchpoint.`}
              usps={[
                {
                  heading: "Communicate Clearly",
                  description:
                    "Design helps simplify complex ideas and present information in a way that people can quickly understand.",
                },
                {
                  heading: "Strengthen Your Brand",
                  description:
                    "Consistent design supports your brand identity and ensures your business looks professional wherever it appears.",
                },
                {
                  heading: "Stand Our Visually",
                  description:
                    "Strong visual design helps your business capture attention and differentiate itself from competitors.",
                },
                {
                  heading: "Support Your Marketing",
                  description:
                    "Well-designed visuals make marketing materials more engaging and effective across digital and print channels.",
                },
                {
                  heading: "Use It Everywhere",
                  description:
                    "Design and illustration can be applied across websites, social media, presentations and marketing materials to create a consistent visual presence.",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="px-8">
        <HowWeHelpSteps data="design" title="How we work" />
      </div>
    </main>
  );
}
