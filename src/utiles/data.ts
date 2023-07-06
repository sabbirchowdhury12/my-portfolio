import {
  AboutCardType,
  ContactDataType,
  NavbarType,
  ProjectDataType,
  SkillType,
} from "./model";
import img1 from "../assets/phone.png";
import img2 from "../assets/tour.png";
import img3 from "../assets/chat.png";

export const listNavBar: NavbarType[] = [
  {
    id: 1,
    name: "Home",
    icon: "uil uil-home",
    href: "home",
  },
  {
    id: 2,
    name: "About",
    icon: "uil uil-user",
    href: "about",
  },
  {
    id: 3,
    name: "Skills",
    icon: "uil uil-file-alt",
    href: "skills",
  },
  {
    id: 4,
    name: "Qualifications",
    icon: "uil uil-graduation-cap",
    href: "qualification",
  },
  {
    id: 5,
    name: "Projects",
    icon: "uil uil-briefcase-alt",
    href: "projects",
  },
  {
    id: 6,
    name: "Contact",
    icon: "uil uil-envelope",
    href: "contact",
  },
];

export const aboutCards: AboutCardType[] = [
  {
    icon: "fa-solid fa-flag",
    name: "Nationality",
    desc: "Bangladeshi",
  },
  {
    icon: "fa-solid fa-location-dot",
    name: "Location",
    desc: "Manikganj, Dhaka",
  },
  {
    icon: "fa-solid fa-message",
    name: "Support",
    desc: "24/7 -- online",
  },
];

export const frontedFristGroupSkills: SkillType[] = [
  {
    icon: "bx bx-badge-check",
    name: "HTML",
    level: "Advanced",
  },
  {
    icon: "bx bx-badge-check",
    name: "Typescript",
    level: "Intermediate",
  },
  {
    icon: "bx bx-badge-check",
    name: "BOOTSTRAP",
    level: "Advanced",
  },
  {
    icon: "bx bx-badge-check",
    name: "GIT",
    level: "Intermediate",
  },
];

export const frontedSecondGroupSkills: SkillType[] = [
  {
    icon: "bx bx-badge-check",
    name: "CSS",
    level: "Advanced",
  },
  // {
  //   icon: "bx bx-badge-check",
  //   name: "Styled-components",
  //   level: "Advanced",
  // },
  {
    icon: "bx bx-badge-check",
    name: "JAVASCRIPT",
    level: "Intermediate",
  },
  {
    icon: "bx bx-badge-check",
    name: "React JS",
    level: "Intermediate",
  },
  {
    icon: "bx bx-badge-check",
    name: "TAILWIND",
    level: "Advanced",
  },
];

export const backEndFristGroupSkills: SkillType[] = [
  {
    icon: "bx bx-badge-check",
    name: "Node  JS",
    level: "Beginner",
  },
  {
    icon: "bx bx-badge-check",
    name: "Mongoose",
    level: "Beginner",
  },
  {
    icon: "bx bx-badge-check",
    name: "Firbase",
    level: "Intermediate",
  },
  {
    icon: "bx bx-badge-check",
    name: "Vercel",
    level: "Intermediate",
  },
];
export const backEndSecondGroupSkills: SkillType[] = [
  {
    icon: "bx bx-badge-check",
    name: "Express JS",
    level: "Intermediate",
  },
  {
    icon: "bx bx-badge-check",
    name: "MongoDB",
    level: "Intermediate",
  },
  {
    icon: "bx bx-badge-check",
    name: "JWT",
    level: "Advanced",
  },
  {
    icon: "bx bx-badge-check",
    name: "Shocket io",
    level: "Beginner",
  },
];

export const projectData: ProjectDataType[] = [
  {
    id: 1,
    title: "Resale Phone",
    img_url: img1,
    client:
      "https://github.com/sabbirchowdhury12/sabbirchowdhury12-mern-stack-repair-resale-phone-client",
    server:
      "https://github.com/sabbirchowdhury12/mern-stack-Repair-Resale-Phone-server",
    live: "https://resale-repair-phone.web.app/",
    name: "Resale and Buy Phone",
  },
  {
    id: 2,
    title: "Tour Website",
    img_url: img2,
    client:
      "https://github.com/sabbirchowdhury12/mern-stack-tourist-service-website-client",
    server:
      "https://github.com/sabbirchowdhury12/mern-stack-tourist-service-website-server",
    live: "https://world-tourist-website.web.app/",
    name: "Tour Website",
  },

  {
    id: 3,
    title: "Chat App",
    img_url: img3,
    client:
      "https://github.com/sabbirchowdhury12/-mern-stack-chat-application-client-side",
    server:
      "https://github.com/sabbirchowdhury12/mern-stack-chat-application-server-side",
    live: "https://mern-stack-chat-app.netlify.app/profile",
    name: "Chat Application",
  },
];

export const contactInfoData: ContactDataType[] = [
  {
    icon: "fa-regular fa-envelope",
    name: "Email",
    address: "email@gmail.com",
    link: "mailto:sabbirchowdhury40854@gmail.com",
  },
  {
    icon: "fa-brands fa-whatsapp",
    name: "Whatsapp",
    address: "+8801989969238",
    link: "https://api.whatsapp.com/send?phone=01989969238&text=Hello",
  },
  {
    icon: "fa-brands fa-facebook-messenger",
    name: "Messenger",
    address: "Sabbir Chowdhury",
    link: "https://www.facebook.com/profile.php?id=100075403486886",
  },
];
