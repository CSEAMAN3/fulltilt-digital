import { Service } from "@/types";
import { BsWindow } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { BsPen } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

export const services: Service[] = [
  {
    slug: "websites-digital",
    name: "Websites + Digital",
    bgColour: "bg-accent-one",
    bgDarkColour: "hover:bg-accent-one-dark",
    textColour: "text-accent-one",
    textColourGroupHover: "group-hover:text-accent-one",
    cardIcon: BsWindow,
    cardImg: {
      src: "/webservices.mp4",
      alt: "change",
    },
    cardParas: [
      "We design and build bespoke websites that are fast, modern and focused on turning visitors into enquiries.",
      "No templates or shortcuts, just performance driven builds tailored to your business, your customers and your goals.",
      "From launch through to ongoing optimisation, we ensure your website continues to perform and generate results.",
    ],
    servicesPageGrid: {
      //   serviceImg: {
      //     src: "frdMockup",
      //     alt: "change",
      //   },
      para: "Fast, bespoke websites designed to rank, convert and support long-term growth.",
    },
  },
  {
    slug: "brand-identity",
    name: "Brand + Identity",
    bgColour: "bg-accent-two",
    bgDarkColour: "hover:bg-accent-two-dark",
    textColour: "text-accent-two",
    textColourGroupHover: "group-hover:text-accent-two",
    cardIcon: BsGrid,
    cardImg: {
      src: "/am-brand-clip.mp4",
      alt: "change",
    },
    cardParas: [
      "We create brand identities that are clear, confident and built to last — aligned with your business and its direction.",
      "From logo design to complete visual systems, we build brands that customers recognise, remember and choose with confidence.",
      "Strong branding builds credibility, helping your business attract attention, win trust and generate more enquiries.",
    ],
    servicesPageGrid: {
      //   serviceImg: {
      //     src: "frdMockup",
      //     alt: "change",
      //   },
      para: "Clear, confident branding that helps your business stand out and build trust.",
    },
  },
  {
    slug: "video-photography",
    name: "Video + Photography",
    bgColour: "bg-accent-three",
    bgDarkColour: "hover:bg-accent-three-dark",
    textColour: "text-accent-three",
    textColourGroupHover: "group-hover:text-accent-three",
    cardIcon: BsCamera,
    cardImg: {
      src: "/photovideoservicereel.mp4",
      alt: "change",
    },
    cardParas: [
      "We create professional photography and video that showcase your business clearly and highlight the quality of the work you deliver.",
      "We capture the people, process and personality behind what you do, helping customers connect with your business before they get in touch.",
      "Strong visuals build confidence, strengthen your brand and help your business stand out from competitors online.",
    ],
    servicesPageGrid: {
      //   serviceImg: {
      //     src: "frdMockup",
      //     alt: "change",
      //   },
      para: "Professional visuals that showcase your work and bring your business to life online.",
    },
  },
  {
    slug: "social-content",
    name: "Social + Content",
    bgColour: "bg-accent-four",
    bgDarkColour: "hover:bg-accent-four-dark",
    textColour: "text-accent-four",
    textColourGroupHover: "group-hover:text-accent-four",
    cardIcon: BsChatDots,
    cardImg: {
      src: "/webservices.mp4",
      alt: "change",
    },
    cardParas: [
      "We create consistent content that keeps your business visible and active across the platforms your customers use.",
      "Content is planned to showcase your work, communicate your services and reflect your brand clearly.",
      "Consistent posting builds trust, keeps your business front of mind and supports long-term growth.",
    ],
    servicesPageGrid: {
      //   serviceImg: {
      //     src: "frdMockup",
      //     alt: "change",
      //   },
      para: "Content that keeps your business visible and communicates what you do clearly.",
    },
  },
  {
    slug: "design-illustration",
    name: "Design + Illiustration",
    bgColour: "bg-accent-five",
    bgDarkColour: "hover:bg-accent-five-dark",
    textColour: "text-accent-five",
    textColourGroupHover: "group-hover:text-accent-five",
    cardIcon: BsPen,
    cardImg: {
      src: "/illustrationservice.mp4",
      alt: "change",
    },
    cardParas: [
      "We create graphic design and illustration that present your business clearly and strengthen your brand across every platform.",
      "From marketing materials to digital graphics, every asset is designed to communicate your message effectively.",
      "Strong design builds trust, improves clarity and helps your business stand out from competitors.",
    ],
    servicesPageGrid: {
      //   serviceImg: {
      //     src: "frdMockup",
      //     alt: "change",
      //   },
      para: "Strengthens your brand and supports your marketing across every platform.",
    },
  },
  {
    slug: "seo",
    name: "SEO",
    bgColour: "bg-accent-six",
    bgDarkColour: "hover:bg-accent-six-dark",
    textColour: "text-accent-six",
    textColourGroupHover: "group-hover:text-accent-six",
    cardIcon: BsSearch,
    cardImg: {
      src: "/GSCseoservice.mp4",
      alt: "change",
    },
    cardParas: [
      "We optimise your website so your business can be found by the right customers when they're searching for your services.",
      "From technical foundations to content and structure, everything is improved to increase visibility and attract relevant traffic.",
      "Better visibility leads to more enquiries, more work and long-term growth for your business.",
    ],
    servicesPageGrid: {
      //   serviceImg: {
      //     src: "frdMockup",
      //     alt: "change",
      //   },
      para: "Focused on improving visibility, attracting the right traffic and generating more enquiries.",
    },
  },
];
