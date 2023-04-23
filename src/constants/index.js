import {
  react_dev,
  python_dev,
  web_dev,
  three_dev,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  mainone,
  freelancer,
  trilopay,
  oreegi,
  umbranded,
  threejs,
  flask,
  next,
  python,
  sql,
  expo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const services = [
  {
    title: "Web Developer",
    icon: web_dev,
  },
  {
    title: "Mobile(RN) Developer",
    icon: react_dev,
  },
  {
    title: "Python Developer",
    icon: python_dev,
  },
  {
    title: "Threejs Novice",
    icon: three_dev,
  },
];

const technologies = [
  {
    id: 0,
    name: "HTML 5",
    icon: html,
  },
  {
    id: 1,
    name: "CSS 3",
    icon: css,
  },
  {
    id:2,
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    id: 3,
    name: "React JS",
    icon: reactjs,
  },
  {
    id: 4,
    name: "Next JS",
    icon: next,
  },
  {
    id: 5,
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    id: 7,
    name: "Node JS",
    icon: nodejs,
  },
  {
    id: 8,
    name: "Python",
    icon: python,
  },
  {
    id: 9,
    name: "Flask",
    icon: flask,
  },
  {
    id: 10,
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "SQL",
  //   icon: sql,
  // },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: freelancer,
    iconBg: "#383E56",
    date: "February 2022 - Present",
    points: [
      "Develops and maintains web applications using React.js and other related technologies.",
      "Collaborates with team members on product design & architecture.",
    ],
  },
  {
    title: "Technical Support Engineer",
    company_name: "MainOne, an Equinix Company",
    icon: mainone,
    iconBg: "#E6DEDD",
    date: "October 2022 - Present",
    points: [
      "Coordinates Microsoft 365 Cloud proposition, deployment and support.",
      "Oversees domain hosting, virtual servers, C-panels and SSL deployments and support.",
      "Leads all third-party engagement on M365 cloud and SME-SOHO internet(fiber) deployments.",
      "Performs FTTH & FTTO virtual deployment surveys for prospects.",
    ],
  },
  {
    title: "Technical Support Intern",
    company_name: "MainOne, an Equinix Company",
    icon: mainone,
    iconBg: "#383E56",
    date: "April 2021 - Sept 2022",
    points: [
      "Assisted customers(remotely & onsite) in configuring their network devices and troubleshooting their Local Area Network(LAN).",
      "Provided recommendations to customers on network devices, architecture and security.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "With Mike, it's more than just web development.",
    name: "Emeka Okafor",
    designation: "Founder",
    company: "Kiwinative",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    testimonial:
      "Give him enough time and he can deliver any S/W project. Thanks to him our final year project was a success.",
    name: "Patrick Ekwedike",
    designation: "Engineer",
    company: "Lambert Electromec",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "You can trust Michael to learn on the job and still deliver excellent results.",
    name: "John Doe",
    designation: "Manager, SME-SOHO Div.",
    company: "MainOne, an Equinix Company",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
];

const projects = [
  {
    name: "Triopay",
    description:
      "Mobile app(RN expo) that allows user register for an account, receive money and make transactions. Other financial use cases are embedded but inactive.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: trilopay,
    source_code_link: "https://github.com/Odikanwa/TriloPay",
  },
  {
    name: "Oreegi",
    description:
      "An ecommerce web-based application that allows users place orders purchase original wines from the comfort of their homes. Payments are made online.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity.io",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: oreegi,
    source_code_link: "https://github.com/Odikanwa/Oreegi",
    web_link: "https://oreegi.vercel.app/",
  },
  {
    name: "Umbranded",
    description:
      "A modern official website for a branding company(hypothetical) that allows users create custom logos, flyers and cards. Features are inactive.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "styled components",
        color: "green-text-gradient",
      },
    ],
    image: umbranded,
    source_code_link: "https://github.com/Odikanwa/umbranded",
    web_link: "https://umbranded.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
