import ProjectDetailsCard from "@/src/components/ProjectDetailsCard";
import Image from "next/image";

export default function FirstResponseDrainageProjectPage() {
  return (
    <main>
      <div className="bg-linear-to-b from-brand-main to-transparent pt-56 mb-16">
        <div className="max-w-300 mx-auto px-8">
          <Image
            src="/images/first-response-drainage-laptop-mockup.png"
            alt="website design for first response drainage a local drainage company in the East of England"
            width={1000}
            height={1000}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="px-8 max-w-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
        <ProjectDetailsCard
          title="1st Response Drainage"
          content="Refreshed branding and bespoke Next.js website designed and built to help 1st Response Drainage generate more direct enquiries through improved visibility, stronger messaging and 40+ targeted local landing pages across East Anglia."
          liveSite="https://www.1stresponsedrainage.co.uk"
          site="1stresponsedrainage.co.uk"
          services="Brand Refresh + Website"
        />
        <div className="lg:col-span-3">
          <p className="font-bold mb-8 text-xl text-pretty">
            Brand refresh and high-performance website for a drainage specialist
            serving homeowners and businesses throughout East Anglia.
          </p>
          <h3 className="text-3xl text-balance font-bold text-brand-main-dark mb-8">
            Making Drainage Issues Less Scary
          </h3>
          <p className="mb-4">
            In a short space of time, 1st Response Drainage had built a strong
            reputation for reliable drainage services across East Anglia. Backed
            by a growing number of five-star Google reviews and a consistent
            stream of contract work, the business had developed solid
            foundations and clear potential for growth.
          </p>
          <p className="mb-4">
            Despite this, the existing brand and website were holding the
            business back.
          </p>
          <p className="mb-4">
            The previous website lacked structure, clarity and visibility. It
            generated little to no enquiries and failed to reflect the
            professionalism of the company or the quality of service being
            delivered. With most new work coming through contracts rather than
            direct enquiries, the business was heavily reliant on external
            sources of work and missing opportunities to grow its residential
            customer base.
          </p>
          <h4 className="font-bold text-brand-main-dark">Challenge</h4>
          <p className="mb-4">
            Create a modern, trustworthy brand and website that would help 1st
            Response Drainage stand out locally, improve visibility across East
            Anglia and generate direct enquiries from homeowners and businesses.
          </p>
          <p className="mb-4">
            The new site needed to make drainage issues feel less overwhelming
            and position the company as approachable, reliable and professional
            — while also supporting long-term SEO growth through a scalable
            structure and location-focused content strategy.
          </p>
          <p className="mb-4">
            Communicating trust quickly was essential. Customers dealing with
            drainage issues are often stressed and looking for fast reassurance,
            so the website needed to feel clear, dependable and easy to use from
            the very first interaction.
          </p>
          <h4 className="font-bold text-brand-main-dark">Solution</h4>
          <p className="mb-4">
            We delivered a complete brand refresh alongside a fully bespoke
            website designed around performance, trust and long-term growth.
          </p>
          <p className="mb-4">
            The brand work included refining the existing logo, expanding the
            colour palette and introducing the “Monster Drainage Crew” - a set
            of friendly illustrated characters designed to make the business
            feel more approachable and memorable. The aim was to soften the
            often stressful nature of drainage issues while helping the brand
            stand out visually from competitors in the industry.
          </p>
          <p className="mb-4">
            The wider visual identity was modernised to feel cleaner, more
            professional and more recognisable across digital platforms.
            Messaging throughout the site was also rewritten to simplify
            technical language and communicate services in a clearer, more
            customer-focused way.
          </p>
          <p className="mb-4">
            The website itself was completely restructured with user experience
            and SEO at the core of the build. Service pages were expanded and
            supported by over 40 location-focused landing pages targeting key
            areas throughout East Anglia, helping improve local search
            visibility and allowing the business to compete more effectively in
            surrounding service areas.
          </p>
          <p className="mb-4">
            Performance and usability were prioritised throughout the build,
            with a fast, mobile-first experience designed to make it as easy as
            possible for users to understand services, build trust and make
            contact quickly.
          </p>
          <p className="mb-4">
            The result was a website designed not just to look better — but to
            actively support business growth.
          </p>
          <h4 className="font-bold text-brand-main-dark">Outcome</h4>
          <p className="mb-4">
            The new brand and website gave 1st Response Drainage a far stronger
            online presence and a platform built for long-term visibility and
            lead generation.
          </p>
          <p className="mb-4">
            The business now has a professional, scalable website capable of
            supporting both residential and commercial growth across East
            Anglia, while the improved structure and SEO foundations have
            positioned the company far more effectively in local search.
          </p>
          <p className="mb-4">
            Most importantly, the site now works as a genuine business tool -
            helping generate enquiries, build trust with new customers and
            reduce reliance on contract-only work.
          </p>
        </div>
      </div>
    </main>
  );
}
