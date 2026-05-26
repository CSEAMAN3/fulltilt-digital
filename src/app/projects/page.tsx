import { portfolio } from "@/src/lib/portfolio";
import ProjectCard from "@/src/components/ProjectCard";

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
      <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-8 max-w-300 mx-auto">
        <ProjectCard
          title={frdProject?.name}
          intro={frdProject?.intro}
          services={frdProject?.services}
          coverImg={frdProject?.mockup.src}
          projectLink={frdProject?.projectLink}
        />
        <ProjectCard
          title={amnrsProject?.name}
          intro={amnrsProject?.intro}
          services={amnrsProject?.services}
          coverImg={amnrsProject?.mockup.src}
          projectLink={amnrsProject?.projectLink}
        />
        <ProjectCard
          title={nhfcProject?.name}
          intro={nhfcProject?.intro}
          services={nhfcProject?.services}
          coverImg={nhfcProject?.mockup.src}
          projectLink={nhfcProject?.projectLink}
        />
        <ProjectCard
          title={techProject?.name}
          intro={techProject?.intro}
          services={techProject?.services}
          coverImg={techProject?.mockup.src}
          projectLink={techProject?.projectLink}
        />
        <ProjectCard
          title={flowProject?.name}
          intro={flowProject?.intro}
          services={flowProject?.services}
          coverImg={flowProject?.mockup.src}
          projectLink={flowProject?.projectLink}
        />
      </div>
    </main>
  );
}
