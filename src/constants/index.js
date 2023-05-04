import {
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
  threejs,
  aws,
  golang,
  hadoop,
  java,
  jest,
  postgres,
  sql,
  LoaderSDC,
  FEC,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Dev',
    icon: reactjs,
  },
  {
    title: 'Backend Dev',
    icon: postgres,
  },
  {
    title: 'Test',
    icon: jest,
  },
  {
    title: 'UI/UX',
    icon: figma,
  },
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Golang',
    icon: golang,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'PostgresSQL',
    icon: postgres,
  },
];

const extraTechnologies = [
  {
    name: 'Hadoop',
    icon: hadoop,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'SASS',
    icon: redux,
  },
];

const experiences = [
  {
    title: 'Full-Stack Developer',
    company_name: 'Block Clinical Inc.',
    icon: java,
    iconBg: '#383E56',
    date: 'August 2021 - March 2022',
    points: [
      'Developing and maintaining web applications using Java, JQuery and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Human Clothes',
    description:
      'Highly polished E-Commerce front end and image carousel built with custom CSS (no carousel libraries). E-Commerce product page clone with functionality similar to amazon.com',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'SASS',
        color: 'green-text-gradient',
      },
      {
        name: 'Jest',
        color: 'pink-text-gradient',
      },
    ],
    image: FEC,
    source_code_link: 'https://github.com/RFP-MOUTON/FEC',
  },
  {
    name: 'Omen API',
    description:
      'E-Commerce System Design. I rebuilt an existing Rest API with latency and throughput in mind. The new backend boasts a 40x increase in throughput when compared with the legacy API.',
    tags: [
      {
        name: 'Express.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'PostgreSQL',
        color: 'green-text-gradient',
      },
      {
        name: 'AWS',
        color: 'pink-text-gradient',
      },
    ],
    image: LoaderSDC,
    source_code_link: 'https://github.com/SDC-Haskell/QuestionsandAnswers',
  },
  {
    name: 'Album8 MVP',
    description:
      'An MVP that serves as an image sharing service with full CRUD functionality. Uses Postgres arrays to store image tags for fast lookup and insertion when compared to a traditional join table.',
    tags: [
      {
        name: 'Golang',
        color: 'blue-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'green-text-gradient',
      },
      {
        name: 'PostgreSQL',
        color: 'pink-text-gradient',
      },
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
    ],
    image: golang,
    source_code_link: 'https://github.com/Symbuh/Album8',
  },
];

export {
  services,
  technologies,
  extraTechnologies,
  experiences,
  testimonials,
  projects,
};
