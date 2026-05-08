import Link from "next/link";
import { portfolio } from "@/src/lib/portfolio";

export default function ProjectsPage() {
  const nhfcProject = portfolio.find(
    (project) => project.name === "NH Football Coaching",
  );
  const amnrsProject = portfolio.find(
    (project) => project.name === "AM Norfolk Roofing Services",
  );
  const frdProject = portfolio.find(
    (project) => project.name === "1st Response Drainage",
  );

  const flowProject = portfolio.find(
    (project) => project.name === "Flow Plumbing & Drainage",
  );

  const techProject = portfolio.find(
    (project) => project.name === "Tech Educators",
  );

  return (
    <main className="">
      <div className="bg-linear-to-b from-brand-main to-transparent">
        <div className="text-center grid place-content-center px-8 pt-60 pb-40">
          <h1 className="font-bold text-balance mb-4 max-w-[24ch] text-[40px] sm:text-[60px] leading-none tracking-tight">
            Bespoke Websites, Branding and Visuals For Local Businesses
          </h1>
          <p className="font-light text-balance mb-8 max-w-[60ch] mx-auto">
            A selection of websites, brands and content we&#39;ve created for
            businesses looking to grow. Every project here was built with a
            clear goal, to attract attention, build trust and generate real
            enquiries.
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-foreground/60">
              Scroll down to explore some of our latest projects.
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
      {/* <BlogPostFilter posts={posts} /> */}
    </main>
  );
}
