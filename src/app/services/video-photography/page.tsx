import UspClickThrough from "@/src/components/UspClickthrough";
import Link from "next/link";
import Image from "next/image";

export default function VideoPhotographyPage() {
  return (
    <main className="">
      {/* add structured data regards schemas */}
      <div className="bg-linear-to-b from-brand-main to-transparent">
        <div className="text-center grid place-content-center px-8 pt-60 pb-40">
          <h1 className="font-bold text-balance mb-4 max-w-[24ch] text-[40px] sm:text-[60px] leading-none tracking-tight">
            Video + Photography
          </h1>
          <p className="font-light text-balance mb-8 max-w-[60ch] mx-auto">
            We create professional photography and video that showcase your
            business clearly, build trust with potential customers and bring
            your brand to life across your website, social media and marketing.
          </p>
          <Link
            href={"/contact"}
            className="font-bold w-fit mx-auto mb-8 flex gap-2 group bg-brand-main py-4 px-8 rounded-full hover:bg-brand-main-dark transition-all duration-300"
          >
            Lets show your audience
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
                src="/images/nhfc-coaching.jpg"
                alt="update this"
                width={2500}
                height={1458}
                priority
                className="w-full rounded-xl"
              />
              <p className="text-white text-xs absolute bottom-4 left-4">
                NHFC photography
              </p>
            </div>
          </div>
          <div>
            <UspClickThrough
              heading="Visuals that connect"
              subHeading="Captured professionally"
              paragraph={`Strong visual content helps people understand your business quickly and builds confidence in the quality of your work.`}
              usps={[
                {
                  heading: "Show Your Work",
                  description:
                    "Customers want to see the quality of what you do. Professional photography and video showcase your work in a way that builds confidence and credibility.",
                },
                {
                  heading: "Build Instant Trust",
                  description:
                    "Authentic visuals of your team, process and finished work help people feel more confident choosing your business.",
                },
                {
                  heading: "Capture Attention",
                  description:
                    "Strong imagery stops people scrolling and encourages them to engage with your content across your website and social platforms.",
                },
                {
                  heading: "Tell Your Story",
                  description:
                    "Video and photography help communicate the personality behind your business, giving customers a clearer understanding of who you are and how you work.",
                },
                {
                  heading: "Use It Everywhere",
                  description:
                    "Your visual content can be used across your website, social media, marketing materials and advertising, creating a consistent and professional presence.",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
