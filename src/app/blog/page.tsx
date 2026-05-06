import { getSortedPostData } from "@/src/lib/posts";
// import getFormattedDate from "@/src/utils/getFormattedDate";
// import CloudinaryImage from "@/src/components/CloudinaryOptImage";
// import { fulltiltImages as Images } from "@/src/lib/fulltiltImages";
import { Metadata } from "next";
import BlogPostFilter from "@/src/components/BlogPostFilter";

// const SITE_URL =
//   process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fulltiltdigital.co.uk";

export const metadata: Metadata = {
  title: "update this",
  description: "update this",
  // upcomment below
  // alternates: {canonical: `${SITE_URL}/blog`}
};

export default async function BlogPage() {
  const posts = await getSortedPostData();

  // This was regards to building the schema
  // One small practical tip
  // If you end up with lots of posts, you can cap the ItemList to (say) the most recent 12:
  // const recent = posts.slice(0, 12);

  //   const recent = posts.slice(0, 12);

  return (
    <main className="">
      {/* add structured data regards schemas */}
      <div className="bg-linear-to-b from-brand-main to-transparent">
        <div className="text-center grid place-content-center px-8 pt-60 pb-40">
          <h1 className="font-bold text-balance mb-4 max-w-[24ch] text-[40px] sm:text-[60px] leading-none tracking-tight">
            Insights That Help Your Business Grow
          </h1>
          <p className="font-light text-balance mb-8 max-w-[60ch] mx-auto">
            Practical advice, insights and strategies to help local service
            businesses improve their online presence, generate more enquiries
            and grow with confidence.
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-foreground/60">
              Scroll down to explore our latest insights and guides.
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
      <BlogPostFilter posts={posts} />
    </main>
  );
}
