import Partner1Logo from "../../assets/2027/partners/partner-1.webp";
import Partner2Logo from "../../assets/2027/partners/partner-2.webp";
import Partner3Logo from "../../assets/2027/partners/partner-3.webp";

import Ateneo from "../../assets/2027/delegates/ateneo.webp";
import Macau from "../../assets/2027/delegates/macau.webp";
import Malaya from "../../assets/2027/delegates/malaya.webp";
import Mara from "../../assets/2027/delegates/mara.webp";
import Sunway from "../../assets/2027/delegates/sunway.webp";
import Ums from "../../assets/2027/delegates/ums.webp";
import Usm from "../../assets/2027/delegates/usm.webp";

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
  {
    name: "Universiti Teknologi MARA (UiTM)",
    country: "Malaysia",
    image: Mara,
  },
  {
    name: "Universiti Malaysia Sabah",
    country: "Malaysia",
    image: Ums,
  },
  {
    name: "Universiti Malaya",
    country: "Malaysia",
    image: Malaya,
  },
  {
    name: "Universiti Sains Malaysia",
    country: "Malaysia",
    image: Usm,
  },
  {
    name: "Sunway University",
    country: "Malaysia",
    image: Sunway,
  }
];

export { communityPartners, partnerInstitutions };
