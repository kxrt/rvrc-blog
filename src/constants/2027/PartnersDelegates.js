import Partner1Logo from "../../assets/2027/partners/partner-1.webp";
import Partner2Logo from "../../assets/2027/partners/partner-2.webp";
import Partner3Logo from "../../assets/2027/partners/partner-3.webp";

import Ateneo from "../../assets/2027/delegates/ateneo.png";
import Macau from "../../assets/2027/delegates/macau.png";

const communityPartners = [
  {
    name: "Partner 1",
    title: "Partner 1 Title",
    biography: "Biography for Partner 1.",
    image: Partner1Logo,
  },
  {
    name: "Partner 2",
    title: "Partner 2 Title",
    biography: "Biography for Partner 2.",
    image: Partner2Logo,
  },
  {
    name: "Partner 3",
    title: "Partner 3 Title",
    biography: "Biography for Partner 3.",
    image: Partner3Logo,
  },
];

const partnerInstitutions = [
  {
    name: "Ateneo Institute of Sustainability",
    country: "Philippines",
    image: Ateneo,
  },
  {
    name: "Macau University",
    country: "Macau",
    image: Macau,
  },
];

export { communityPartners, partnerInstitutions };
