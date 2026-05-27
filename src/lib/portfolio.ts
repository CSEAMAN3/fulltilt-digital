import { portfolioItem } from "@/types";

export const portfolio: portfolioItem[] = [
  {
    name: "1st Response Drainage",
    intro:
      "High-performance website build with 40+ local landing pages, designed to improve rankings and drive consistent enquiries.",
    services: [
      { service: "Website + Digital", colour: "text-accent-one" },
      { service: "Brand + Identity", colour: "text-accent-two" },
      { service: "design+ Illustration", colour: "text-accent-five" },
      { service: "SEO", colour: "text-accent-six" },
    ],
    mockup: {
      src: "frdMockup",
      alt: "change this",
    },
    projectLink: "/first-response-drainage",
  },
  {
    name: "AM Norfolk Roofing Services",
    intro:
      "Clean website design and build for a Norfolk roofing company, built to showcase services clearly and generate enquiries.",
    services: [
      { service: "Website + Digital", colour: "text-accent-one" },
      { service: "Brand + Identity", colour: "text-accent-two" },
      { service: "Stock Photography", colour: "text-accent-three" },
    ],
    mockup: {
      src: "amMockup",
      alt: "change this",
    },
    projectLink: "/am-norfolk-roofing-services",
  },
  {
    name: "NH Football Coaching",
    intro:
      "Bold website design, build and photography for a football coaching business focused on growth and local visibility.",
    services: [
      { service: "Website + Digital", colour: "text-accent-one" },
      { service: "Brand + Identity", colour: "text-accent-two" },
      { service: "Video + Photography", colour: "text-accent-three" },
    ],
    mockup: {
      src: "nhMockup",
      alt: "change this",
    },
    projectLink: "/nh-football-coaching",
  },
  {
    name: "Flow Plumbing & Drainage",
    intro:
      "Modern website design and build for a plumbing and drainage company, focused on clarity, trust and lead generation.",
    services: [{ service: "Website + Digital", colour: "text-accent-one" }],
    mockup: {
      src: "flowMockup",
      alt: "change this",
    },
    projectLink: "/",
  },
  {
    name: "Tech Educators",
    intro:
      "Event videography and editing for a fast-paced hackathon, capturing energy, collaboration and the impact of the event.",
    services: [{ service: "Video + Photography", colour: "text-accent-three" }],
    mockup: {
      src: "techEdMockup",
      alt: "change this",
    },
    projectLink: "/",
  },
];
