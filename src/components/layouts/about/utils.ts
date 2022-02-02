import presidentImg from "@/assets/images/about.jpg";
import managerImg from "@/assets/images/wellness.jpg";
import chefImg from "@/assets/images/home.jpg";

interface founders_team_types {
  designation: string;
  name: string;
  imgSrc: StaticImageData;
  quote?: string;
}

export const founders_team_info: founders_team_types[] = [
  {
    designation: "Founder",
    name: "Mr. Vikranth Sharma",
    quote: `"By creating Once in a Lifetime, we are keen to provide a new response to meet the expectations of today's and tomorrow's travellers. This project was born from a long term observation, matured through meetings and discussions with independent hoteliers, customers and tourism industry key actors. We hope that our destinations will give a different perspective to your future travels and unveal experiences that you should experience at least once in your lifetime."
    `,
    imgSrc: presidentImg,
  },
  {
    designation: "Resort Manager",
    name: "Ms. Sushmita Sen",
    imgSrc: managerImg,
  },
  {
    designation: "Main Chef",
    name: "Mr. Nalamaharaja",
    imgSrc: chefImg,
  },
];
