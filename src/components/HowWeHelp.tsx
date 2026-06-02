// import Image from "next/image";
import HowWeHelpSteps from "./HowWeHelpSteps";

interface HowWeHelpProps {
  data: string;
  title: string;
}

export default function HowWeHelp({ data, title }: HowWeHelpProps) {
  return (
    <div className="min-h-100 px-8 mb-8">
      <h4 className="font-bold tracking-tight text-3xl sm:text-[40px] w-fit mx-auto text-center">
        <span className="block ml-12 w-fit text-2xl">Built better...</span>
        Built for local businesses
      </h4>
      <p className="font-light text-center max-w-[42ch] text-balance mx-auto mb-8">
        We&#39;re built to help local businesses win online - getting found,
        building trust and turning visitors into enquiries.
      </p>
      {/* <Image
        src="/images/team-photo-seven-bw.jpg"
        alt="update this"
        width={1000}
        height={500}
        className="w-full h-auto max-w-240 max-h-160 object-cover mx-auto"
      /> */}
      <div className="max-w-180 mx-auto">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/video-poster.jpg"
          className="w-full rounded-2xl"
        >
          <source src="/videos/bw-rip-transition.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <HowWeHelpSteps data={data} title={title} />
    </div>
  );
}
