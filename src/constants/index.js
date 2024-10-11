import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  chipImg,
  yellowImg,
  cocaineImg,
  tobaccoImg,
  heroImg,
  heroinImg,
  methImg,
  tvImg,
  rokokImg,
  suntik,
  buku,
} from "../utils";

export const navLists = ["Protect your own self"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "National Drug Overdose Deaths",
      "Number Among All Ages",
      "by Sex Nearly 15,000/year",
      "in the Indonesia",
    ],
    video: tvImg,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Understanding the risks", "associated with drug use"],
    video: suntik,
    videoDuration: 3,
  },
  {
    id: 3,
    textLists: [
     "Educate yourself",
      "about different types of drugs",
      "and their effects",
    ],
    video: buku,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["Drugs abuse is not only illegal, but it also harms your physical and mental health, causing negative effects to your job and life."],
    video: rokokImg,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "Cocaine",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: cocaineImg,
  },
  {
    id: 2,
    title: "Tobacco",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: tobaccoImg,
  },
  {
    id: 3,
    title: "Heroin",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: heroinImg,
  },
  {
    id: 4,
    title: "Meth",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: methImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

