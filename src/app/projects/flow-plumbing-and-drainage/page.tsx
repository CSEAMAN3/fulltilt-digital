import Image from "next/image";
import ProjectDetailsCard from "@/src/components/ProjectDetailsCard";
import HomeContactSection from "@/src/components/HomeContactSection";

export default function page() {
  return (
    <main>
      <div className="bg-linear-to-b from-brand-main to-transparent pt-56 mb-16">
        <div className="max-w-300 mx-auto px-8">
          <Image
            src="/images/flow-plumbing-drainage-laptop-mockup.png"
            alt="website design for first response drainage a local drainage company in the East of England"
            width={3027}
            height={1562}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="px-8 max-w-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
        <ProjectDetailsCard
          title="Flow Plumbing and Drainage"
          content="Bespoke Next.js website and custom photography created for Flow Plumbing & Drainage, designed to improve trust, modernise the company&#39;s online presence and generate more direct enquiries throughout Norfolk."
          liveSite="https://www.flowplumbinganddrainage.co.uk"
          site="flowplumbinganddrainage.co.uk"
          services="Website + Photography"
        />
        <div className="lg:col-span-3">
          <p className="font-bold mb-8 text-xl text-pretty">
            Bespoke website and photography for a Norfolk plumbing and drainage
            company serving residential and commercial customers.
          </p>
          <h3 className="text-3xl text-balance font-bold text-brand-main-extra-dark mb-8">
            Creating A More Professional Online Presence
          </h3>
          <p className="mb-4">
            Flow Plumbing & Drainage provides plumbing and drainage services
            throughout Norfolk for both domestic and commercial customers,
            covering everything from blocked toilets and CCTV drain surveys to
            burst pipe repairs and drain maintenance.
          </p>
          <p className="mb-4">
            Before approaching us, the business already had an online presence
            through a website provided by Yell. However, the site relied heavily
            on low-quality stock imagery, lacked personality and failed to
            reflect the professionalism of the business or the quality of work
            being delivered.
          </p>
          <p className="mb-4">
            The website generated very few enquiries and offered little to help
            build trust with potential customers.
          </p>
          <h4 className="font-bold text-brand-main-extra-dark">Challenge</h4>
          <p className="mb-4">
            Create a modern, professional website that would improve trust,
            communicate services more clearly and help generate more direct
            enquiries.
          </p>
          <p className="mb-4">
            The new site needed to feel cleaner, more modern and more
            approachable while still maintaining the company&#39;s existing
            branding. It also needed to make it easy for customers to quickly
            understand services, build confidence in the business and get in
            touch without friction.
          </p>
          <p className="mb-4">
            Improving visibility and helping search engines better understand
            the business was also an important part of the project.
          </p>
          <h4 className="font-bold text-brand-main-extra-dark">Solution</h4>
          <p className="mb-4">
            We designed and built a bespoke Next.js website focused around
            trust, clarity and lead generation.
          </p>
          <p className="mb-4">
            While retaining the company&#39;s existing logo and core branding,
            we introduced a fresh accent colour throughout the site to modernise
            the visual identity and add more personality and contrast across the
            design. The result was a cleaner, more distinctive online presence
            that felt far more professional and visually engaging.
          </p>
          <p className="mb-4">
            The website itself was designed with usability and enquiries at the
            core of the experience. Clear service structure, streamlined contact
            pathways and strong mobile performance were prioritised throughout
            the build, while local business schema implementation helped improve
            how search engines understand and index the site.
          </p>
          <p className="mb-4">
            The overall focus was simple: create a website that looked
            professional, built trust quickly and made it easy for customers to
            enquire.
          </p>
          <h4 className="font-bold text-brand-main-extra-dark">Outcome</h4>
          <p className="mb-4">
            Flow Plumbing & Drainage now has a far stronger and more
            professional online presence that better reflects the quality of the
            business and the services provided.
          </p>
          <p className="mb-4">
            The new website has helped improve trust with potential customers
            while generating an increase in direct enquiries through the site.
            The updated visual presentation, improved structure and stronger
            user experience have given the business a much more credible and
            modern platform to grow from.
          </p>
          <p className="mb-4">
            Most importantly, the website now works as an active business tool —
            helping attract customers rather than simply existing online.
          </p>
        </div>
      </div>
      <div className="py-8">
        <HomeContactSection
          heading="Have a similar project in mind?"
          paragraph="Every project starts with a conversation. We'll take the time to understand your business, your goals and what success looks like, before recommending the right combination of strategy, design, content and technology to help you get there."
        />
      </div>
    </main>
  );
}
