import ProjectDetailsCard from "@/src/components/ProjectDetailsCard";
import VideoPlayer from "@/src/components/VideoPlayer";
import HomeContactSection from "@/src/components/HomeContactSection";

export default function page() {
  return (
    <main>
      <div className="bg-linear-to-b from-brand-main to-transparent pt-56 mb-16">
        <div className="max-w-240 mx-auto px-8">
          <VideoPlayer />
        </div>
      </div>
      <div className="px-8 max-w-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
        <ProjectDetailsCard
          title="Tech Educators"
          content="Three-day event filming and video production for HackEd — a large-scale tech hackathon delivered by Tech Educators designed to showcase the energy, collaboration and impact of the event."
          liveSite="https://www.techeducators.co.uk/hacked/norwich-2025"
          site="techeducators.co.uk"
          services="Video Production"
        />
        <div className="lg:col-span-3">
          <p className="font-bold mb-8 text-xl text-pretty">
            Event filming, interviews and video production for a three-day tech
            hackathon delivered by Tech Educators.
          </p>
          <h3 className="text-3xl text-balance font-bold text-brand-main-extra-dark mb-8">
            Capturing The Energy Behind HackEd
          </h3>
          <p className="mb-4">
            HackEd is an immersive three-day hackathon experience designed to
            bring together young people, technology and innovation through
            collaborative problem-solving and real-world challenges.
          </p>
          <p className="mb-4">
            Delivered by Tech Educators the event brought together students,
            mentors and industry professionals for three intensive days of
            coding, workshops, collaboration and live presentations.
          </p>
          <p className="mb-4">
            Our role was to capture the energy, atmosphere and scale of the
            event through video production — creating content that could both
            showcase the experience itself and support future promotion,
            sponsorship and growth.
          </p>
          <h4 className="font-bold text-brand-main-extra-dark">Challenge</h4>
          <p className="mb-4">
            Create a high-energy video campaign that captured the full HackEd
            experience while communicating the impact and value of the event to
            future students, partners and sponsors.
          </p>
          <p className="mb-4">
            The challenge was documenting a fast-moving, live environment across
            multiple locations and activities over three days — from
            collaborative coding sessions and mentoring to Innovation Alley
            showcases and final stage presentations.
          </p>
          <p className="mb-4">
            The content needed to feel authentic, energetic and immersive while
            still maintaining a professional finish suitable for wider
            promotional use across multiple platforms.
          </p>
          <p className="mb-4">
            Alongside the main event coverage, interviews also needed to be
            captured with organisers, mentors and students to help communicate
            the purpose and impact of HackEd more clearly.
          </p>
          <h4 className="font-bold text-brand-main-extra-dark">Solution</h4>
          <p className="mb-4">
            We provided full event filming and post-production coverage across
            all three days of HackEd.
          </p>
          <p className="mb-4">
            Throughout the event, we documented the experience as it unfolded —
            capturing students collaborating on projects, mentors supporting
            teams, live coding sessions, Innovation Alley demonstrations and the
            final presentations delivered on stage at the Norwich University of
            the Arts.
          </p>
          <p className="mb-4">
            The production approach focused heavily on movement, atmosphere and
            authenticity, helping create a final film that reflected both the
            intensity and excitement of the event itself.
          </p>
          <p className="mb-4">
            Alongside the live event coverage, we also filmed a series of
            interviews with mentors, organisers and students to provide
            additional context, insight and personality throughout the final
            content.
          </p>
          <p className="mb-4">
            Following filming, the footage was edited into a high-energy sizzle
            reel designed to showcase the scale, creativity and impact of
            HackEd. Final deliverables were exported in multiple formats for use
            across social media, promotional campaigns and future sponsor
            outreach.
          </p>
          <p className="mb-4">
            The end result was a versatile collection of video content designed
            not only to document the event, but to actively support the future
            growth and visibility of HackEd itself.
          </p>
          <h4 className="font-bold text-brand-main-extra-dark">Outcome</h4>
          <p className="mb-4">
            The final content gave Tech Educators a professional, engaging
            showcase piece capable of communicating the atmosphere and impact of
            HackEd far beyond the event itself.
          </p>
          <p className="mb-4">
            The video content is now used across multiple platforms to help
            promote future HackEd events, support sponsorship opportunities and
            showcase the value of the initiative to prospective students,
            partners and industry organisations.
          </p>
          <p className="mb-4">
            Most importantly, the production successfully captured the energy,
            collaboration and creativity that made the event unique — turning a
            live experience into long-term promotional content with ongoing
            value.
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
