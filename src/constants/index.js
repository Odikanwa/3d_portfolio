import {
  mobile,
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
  carrent,
  jobit,
  tripguide,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
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
      "Performs FTTH & FTTO deployment surveys for prospects.",
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
