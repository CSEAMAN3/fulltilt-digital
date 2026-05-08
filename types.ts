import { IconType } from "react-icons";
import { FulltiltImageKey } from "./src/lib/fulltiltImages";
import { fulltiltImages } from "./src/lib/fulltiltImages";

export type Nav = {
  title: string;
  href: string;
};

export type Service = {
  slug: string;
  name: string;
  bgColour: string;
  bgDarkColour: string;
  textColour: string;
  textColourGroupHover: string;
  cardIcon: IconType;
  cardImg: { src: string; alt: string };
  cardParas: string[];
  servicesPageGrid: {
    // serviceImg: servicesImage;
    para: string;
  };
};

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage?: FulltiltImageKey;
  coverImageAlt?: string;
  author?: string;
  tags?: string[];
  readTime?: string;
  bgColour?: string;
  mainService?: string;
  featured: boolean;
  modified?: string;
}

export interface BlogPostWithHtml extends BlogPost {
  contentHtml: string;
}

export type Steps = {
  id: number;
  title: string;
  paragraph: string;
  paragraphTwo: string;
};

type ServicesObj = {
  service: string;
  colour: string;
};

export type portfolioItem = {
  name: string;
  intro: string;
  services: ServicesObj[];
  mockup: {
    src: keyof typeof fulltiltImages;
    alt: string;
  };
};
