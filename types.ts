import { IconType } from "react-icons";

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
