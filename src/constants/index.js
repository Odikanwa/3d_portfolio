import {
  mobile,
  backend,
  creator,
  web,
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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
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
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Freelance",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November 2022 - Present",
    points: [
      "Develops and maintains web applications using React.js and other related technologies.",
      "Collaborates with team members on product design & architecture.",
      "Works on both front-end and back-end stacks with respect to the team's strength.",
    ],
  },
  {
    title: "Technical Support Engineer",
    company_name: "MainOne, an Equinix Company",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "October 2022 - Present",
    points: [
      "Lead",
      "Coordinates Microsoft 365 Cloud proposition, deployment and support.",
      "Oversees domain hosting, virtual servers, C-panels and SSL deployments and support.",
      "Leads all third-party engagement on Microsoft 365 cloud and SME-SOHO internet(fiber) deployments.",
      "Performs Fiber-to-the-Home & Fiber-to-the-Office deployment surveys for prospects.",
    ],
  },
  {
    title: "Technical Support Intern",
    company_name: "MainOne, an Equinix Company",
    icon: shopify,
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
