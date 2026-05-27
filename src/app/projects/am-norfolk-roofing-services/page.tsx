import Image from "next/image";
import ProjectDetailsCard from "@/src/components/ProjectDetailsCard";

export default function AmNorfolkRoofingServicesPage() {
  return (
    <main>
      <div className="bg-linear-to-b from-brand-main to-transparent pt-56 mb-16">
        <div className="max-w-300 mx-auto px-8">
          <Image
            src="/images/am-norfolk-roofing-laptop-mockup.png"
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
          title="AM Norfolk Roofing Services"
          content="Complete brand identity and bespoke Next.js website designed and built for AM Norfolk Roofing Services, helping launch the business with a professional online presence focused on trust, visibility and generating enquiries across Norfolk."
          liveSite="https://www.amnorfolkroofingservices.co.uk"
          site="amnorfolkroofingservices.co.uk"
          services="Brand + Website"
        />
        <div className="lg:col-span-3">
          <p className="font-bold mb-8 text-xl text-pretty">
            Brand identity and bespoke website for a Norfolk roofing company
            focused on residential and commercial roofing services.
          </p>
          <h3 className="text-3xl text-balance font-bold text-brand-main-dark mb-8">
            Building a Roofing Brand People Could Trust
          </h3>
          <p className="mb-4">
            AM Norfolk Roofing Services was a newly established roofing business
            looking to launch with a professional identity and a strong online
            presence from day one.
          </p>
          <p className="mb-4">
            Offering both domestic and commercial roofing services across
            Norfolk, the business needed more than just a website — it needed a
            brand that would build trust quickly, communicate professionalism
            and help generate enquiries in a competitive local market.
          </p>
          <p className="mb-4">
            Without an existing visual identity or online presence, there was no
            clear platform for customers to learn about the business, explore
            services or make contact.
          </p>
          <h4 className="font-bold text-brand-main-dark">Challenge</h4>
          <p className="mb-4">
            Create a trustworthy, modern brand and lead-focused website that
            would help establish credibility, improve visibility and support
            long-term business growth.
          </p>
          <p className="mb-4">
            As a new business, building trust quickly was essential. The
            branding needed to feel bold and professional while still remaining
            approachable to homeowners and commercial clients alike.
          </p>
          <p className="mb-4">
            The website also needed to work hard from the beginning — providing
            clear service information, showcasing professionalism and creating a
            simple path for customers to make enquiries across both mobile and
            desktop devices.
          </p>
          <h4 className="font-bold text-brand-main-dark">Solution</h4>
          <p className="mb-4">
            We developed a complete visual identity and bespoke Next.js website
            designed around trust, clarity and lead generation.
          </p>
          <p className="mb-4">
            The branding was built around a modern overlapping “A” and “M” logo
            mark designed to subtly form rooftop shapes within the lettering.
            Combined with a rich dark red, cream and warm neutral colour
            palette, the identity was created to feel bold, established and
            trustworthy while helping the business stand out visually from
            competitors in the local roofing industry.
          </p>
          <p className="mb-4">
            Alongside the logo and wider brand system, we also created
            supporting visual assets including van mockups, business cards and
            social media templates to ensure consistency across both digital and
            physical touchpoints.
          </p>
          <p className="mb-4">
            The website itself was designed and built with a mobile-first
            approach, focusing on usability, clear service structure and
            generating enquiries. Service pages were carefully structured around
            both residential and commercial roofing services, while customer
            reviews, FAQs, business schema implementation and clear contact
            pathways helped strengthen trust and improve visibility.
          </p>
          <p className="mb-4">
            Despite relying on carefully selected stock photography during
            launch, the website was designed to feel professional, consistent
            and scalable — giving the business a strong platform to grow from.
          </p>
          <h4 className="font-bold text-brand-main-dark">Outcome</h4>
          <p className="mb-4">
            AM Norfolk Roofing Services launched with a professional brand
            identity and high-performing website that immediately gave the
            business a far stronger presence online.
          </p>
          <p className="mb-4">
            The new website now acts as a central platform for enquiries,
            helping potential customers quickly understand services, build
            confidence in the business and make contact easily across all
            devices.
          </p>
          <p className="mb-4">
            Since launch, the business has started generating direct online
            enquiries while receiving positive customer feedback around the
            professionalism and trustworthiness of the brand and website.
          </p>
          <p className="mb-4">
            Most importantly, the business now has strong foundations in place —
            with a scalable identity and website built to support long-term
            growth throughout Norfolk.
          </p>
        </div>
      </div>
    </main>
  );
}
