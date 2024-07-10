import { NavLink, Social } from "@/interfaces/data";
import Strings from "./strings";

export const socialList: Social[] = [
  { href: "https://www.github.com/RakaMurdiarta", icon: "mdi:github" },
  {
    href: "https://www.instagram.com/rakamurdiartaa",
    icon: "ri:instagram-fill",
  },
  {
    href: "https://www.linkedin.com/in/rakamurdiarta",
    icon: "mdi:linkedin",
  },
];

export const homeIcon: string[] = [
  "logos:react",
  "logos:vue",
  "logos:typescript-icon",
  "vscode-icons:file-type-tailwind",
  "logos:redis",
  "logos:express",
  "logos:nodejs",
  "logos:nextjs",
  "logos:python",
  "logos:go",
  "logos:rust",
];

export const portfolios = [
  {
    name: "Car Rent",
    img: "https://i.postimg.cc/dQ9LJ7Bm/Screenshot-2024-07-10-at-06-51-46.png",
    link: "https://car-showroom-next.vercel.app/",
    github: "https://github.com/RakaMurdiarta/car-showroom-next",
    techstackIcon: [
      "logos:react",
      "logos:nexjs",
      "logos:typescript-icon",
      "vscode-icons:file-type-tailwind",
    ],
  },
  {
    name: "Dhatu Gateway",
    img: "https://i.ibb.co.com/Fs8c2SJ/Screenshot-2024-07-10-at-07-06-20.png",
    link: "https://testnet-console.dhatu.io/",
    techstackIcon: [
      "logos:rust",
      "logos:nextjs",
      "logos:typescript-icon",
      "vscode-icons:file-type-tailwind",
    ],
  },
  {
    name: "Dhatu Analytics",
    img: "https://i.ibb.co.com/Kxs6tgg/Screenshot-2024-07-10-at-07-48-06.png",
    link: "https://testnet-analytics.dhatu.io/",
    techstackIcon: [
      "logos:react",
      "logos:nextjs",
      "logos:typescript-icon",
      "vscode-icons:file-type-tailwind",
    ],
  },
  {
    name: "e.id Wallet",
    img: "https://i.ibb.co.com/jJ1HtyJ/Screenshot-2024-07-10-at-07-29-11.png",
    link: "https://e.id",
    techstackIcon: [
      "logos:react",
      "logos:expressjs",
      "logos:redis",
      "logos:typescript-icon",
      "vscode-icons:file-type-tailwind",
    ],
  },
];

export const contacts = [
  {
    href: "https://wa.me/081558446458",
    icon: "ic:baseline-phone",
    text: "+62 815 584 464 58",
  },
  {
    href: "mailto:dewamurdiarta@gmail.com",
    icon: "mdi:email-fast-outline",
    text: "dewamurdiarta@gmail.com",
  },
  {
    href: "https://www.google.com/maps/dir//Denpasar,+Denpasar+City,+Bali/@-8.6703711,115.1714297,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2dd2409b0e5e80db:0xe27334e8ccb9374a!2m2!1d115.2126293!2d-8.6704582?entry=ttu",
    icon: "mdi:location",
    text: "Bali, Indonesia",
  },
];
