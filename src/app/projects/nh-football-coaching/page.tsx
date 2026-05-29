import Image from "next/image";
import ProjectDetailsCard from "@/src/components/ProjectDetailsCard";
import HomeContactSection from "@/src/components/HomeContactSection";

export default function page() {
  return (
    <main>
      <div className="bg-linear-to-b from-brand-main to-transparent pt-56 mb-16">
        <div className="max-w-300 mx-auto px-8">
          <Image
            src="/images/nh-football-coaching-laptop-mockup.png"
            alt="website design for first response drainage a local drainage company in the East of England"
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="px-8 max-w-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
        <ProjectDetailsCard
          title="NH Football Coaching"
          content="Logo identity, bespoke Next.js website and professional photography created for NH Football Coaching, helping launch the business with a stronger visual presence and a website focused on generating enquiries from parents across Norwich."
          liveSite="https://www.amnorfolkroofingservices.co.uk"
          site="nhfootballcoaching.co.uk"
          services="Brand + Website + Photography"
        />
        <div className="lg:col-span-3">
          <p className="font-bold mb-8 text-xl text-pretty">
            Brand identity, bespoke website and photography for a Norwich
            football coaching business focused on youth player development.
          </p>
          <h3 className="text-3xl text-balance font-bold text-brand-main-dark mb-8">
            Creating A Coaching Brand Built To Stand Out
          </h3>
          <p className="mb-4">
            NH Football Coaching was launched by Norwich-based football coach
            Noah Hunt, offering one-to-one coaching, group sessions, holiday
            camps and football birthday parties for children aged 6-16.
          </p>
          <p className="mb-4">
            Before approaching us, the business had no professional online
            presence. Enquiries mainly came through word of mouth and direct
            messages to local football coaches, while the existing logo —
            originally generated using AI — lacked originality, personality and
            professionalism.
          </p>
          <p className="mb-4">
            Without a website or strong visual identity, there was no central
            platform for parents to learn more about the coaching sessions,
            build trust in the business or make enquiries easily.
          </p>
          <h4 className="font-bold text-brand-main-dark">Challenge</h4>
          <p className="mb-4">
            Create a professional visual identity and website that would help NH
            Football Coaching stand out locally, build trust with parents and
            generate more direct enquiries.
          </p>
          <p className="mb-4">
            The brand needed to feel modern, energetic and football-focused
            while remaining clear and approachable for both children and
            parents. It also needed enough flexibility to work consistently
            across digital platforms, social media and future marketing
            materials.
          </p>
          <p className="mb-4">
            The website itself needed to be simple, easy to navigate and focused
            around showcasing services clearly while driving enquiries.
          </p>
          <p className="mb-4">
            Professional imagery was also a major part of the project. Without
            strong visuals, the website would struggle to communicate the
            energy, atmosphere and quality of the coaching sessions.
          </p>
          <h4 className="font-bold text-brand-main-dark">Solution</h4>
          <p className="mb-4">
            We created a new visual identity, bespoke Next.js website and
            professional photography library designed specifically around the NH
            Football Coaching brand.
          </p>
          <p className="mb-4">
            The logo was built using an italic “NH” monogram with circular
            negative space elements inspired by football pitch halfway line
            markings, helping create a visual identity that felt both sporty and
            distinctive. Supporting logo variations and standalone icon formats
            were also created to ensure flexibility across social media, print
            and digital applications.
          </p>
          <p className="mb-4">
            The wider visual direction combined a clean black and white base
            with an electric blue accent colour used strategically throughout
            the website for calls-to-action and interactive elements. To
            reinforce the football-inspired feel of the brand, subtle painted
            white line graphics — inspired by football pitch markings — were
            introduced throughout the design system.
          </p>
          <p className="mb-4">
            Alongside the branding and website build, we carried out a
            professional photography shoot during a half-term football camp. The
            imagery became a key part of the project, helping bring energy,
            personality and authenticity to the website while showcasing
            children actively participating in coaching sessions.
          </p>
          <p className="mb-4">
            The website itself was designed with simplicity and lead generation
            in mind, featuring a clear homepage, service information, FAQ
            section, about page and streamlined contact experience focused on
            encouraging enquiries from parents.
          </p>
          <h4 className="font-bold text-brand-main-dark">Outcome</h4>
          <p className="mb-4">
            NH Football Coaching launched with a far more professional and
            recognisable presence both online and offline.
          </p>
          <p className="mb-4">
            The new branding and photography helped establish stronger
            credibility with parents, while the website now provides a clear
            platform for potential customers to explore services, understand the
            coaching approach and make contact easily.
          </p>
          <p className="mb-4">
            Most importantly, the business now has a website actively generating
            enquiries and supporting long-term growth — helping move the
            business away from relying solely on word of mouth and manual
            outreach.
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
