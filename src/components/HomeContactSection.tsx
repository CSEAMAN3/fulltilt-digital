import Link from "next/link";
import Image from "next/image";

interface HomeContactSectionProps {
  heading: string;
  paragraph: string;
}

export default function HomeContactSection({
  heading,
  paragraph,
}: HomeContactSectionProps) {
  return (
    <div className="max-w-300 mx-auto px-8 flex flex-col sm:flex-row gap-8 mb-8">
      <div className="py-8">
        <h5 className="font-bold text-4xl max-w-[20ch] mb-4 tracking-tight text-balance">
          <span className="block text-2xl mb-2">Let&#39;s talk</span>
          {heading}
        </h5>
        <p className="max-w-[44ch] mb-8">{paragraph}</p>
        <Link href={"/contact"} className="font-bold w-fit flex gap-2 group">
          Book a time to chat
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
      <div className="">
        <Image
          src="/images/team-photo-seven-bw.jpg"
          alt="website design for first response drainage a local drainage company in the East of England"
          width={1000}
          height={1000}
          priority
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
