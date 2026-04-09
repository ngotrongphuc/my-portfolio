import { Company, NavbarItem, Project, Skill } from './types';

/** Navigation items rendered in the header and mobile menu. */
export const NAVBAR_ITEMS: NavbarItem[] = [
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Work', href: '/#work' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

export const HERO_HEAD_TEXT: string = '';
export const HERO_SUB_TEXT: string = 'Front-end developer';
export const HERO_DESCRIPTION_TEXT: string =
  'I craft pixel-perfect, user-friendly interfaces with passion and precision.';

export const INTRODUCTION: string =
  "I'm a front-end developer with more than 4 years of experience, passionate about crafting pixel-perfect, user-friendly interfaces. I'm a fast learner and a perfectionist, and I consider them my strengths.";

/** Google Drive file ID for the CV preview and download. */
export const CV_FILE_ID: string = process.env.NEXT_PUBLIC_CV_FILE_ID ?? '';

/** Skill cards shown in the Skills section. */
export const SKILLS: Skill[] = [
  {
    title: 'HTML5',
    icon: 'html5.svg',
    description:
      'Proficient in HTML5, adept at crafting well-structured and semantically meaningful web content',
  },
  {
    title: 'CSS3',
    icon: 'css3.svg',
    description:
      'Skilled in CSS3 and responsive design across devices and browsers. Familiar with Tailwind CSS, Ant Design, GSAP, and Framer Motion for animation-rich interfaces',
  },
  {
    title: 'JavaScript',
    icon: 'javascript.svg',
    description:
      'Fluent in JavaScript, able to handle complex algorithms and optimize code to enhance performance and efficiency',
  },
  {
    title: 'TypeScript',
    icon: 'typescript.svg',
    description:
      'Competent in TypeScript for building robust and type-safe applications with enhanced code readability and maintainability',
  },
  {
    title: 'ReactJS',
    icon: 'reactjs.svg',
    description:
      'Specialize in ReactJS and React Native (Expo). Familiar with Redux, Zustand, React Router, React Hook Form, and Zod',
  },
  {
    title: 'NextJS',
    icon: 'nextjs.svg',
    description:
      'Knowledgeable in SSR, CSR, and the App Router. Familiar with Three.js, React Three Fiber, Web3 (Wagmi, Viem), Next Auth, i18next, Contentful, and Strapi',
  },
  {
    title: 'VueJS',
    icon: 'vuejs.svg',
    description: 'Experienced in VueJS. Familiar with Vuetify and Vuex',
  },
  {
    title: 'Git',
    icon: 'git.svg',
    description: 'Familiar with GitHub and GitLab workflows',
  },
];

/** Work history shown in the Work timeline. */
export const COMPANIES: Company[] = [
  {
    name: 'Orochi Network',
    logo: '/companies/orochi.svg',
    position: 'Front-end developer',
    time: '7/2024 - 4/2026',
    description:
      'Developing landing pages, web apps, and dashboards across a Zero-Knowledge infrastructure ecosystem, delivering animation-rich experiences and Web3 applications with seamless on-chain interactions.',
  },
  {
    name: 'Rooxim Computer Science',
    logo: '/companies/rooxim.webp',
    position: 'Front-end developer',
    time: '12/2022 - 8/2023',
    description:
      'Developing POS software for Japanese businesses using VueJS, ElectronJS, and other related technologies. Integrating and implementing features for a Web3 project using NextJS.',
  },
  {
    name: 'Zigvy Corporation',
    logo: '/companies/zigvy.webp',
    position: 'Front-end developer',
    time: '9/2021 - 9/2022',
    description:
      'Developing and maintaining resource management web application using ReactJS, React Native, and other related technologies.',
  },
];

/** Projects shown in the Projects section. */
export const PROJECTS: Project[] = [
  {
    name: 'HR Octo Pro',
    logo: '/projects/hr-octo-pro.svg',
    description: 'A management web app for Human Resources',
    url: 'https://www.hrforte.com/',
  },
  {
    name: 'TCG POS Siegfried',
    logo: '/projects/tcg-pos-siegfried.ico',
    description: 'A desktop app for POS system of trading card game in Japan',
  },
  {
    name: 'Super Vietnam',
    logo: '/projects/super-vietnam.svg',
    description:
      'A landing page for Top Blockchain & AI Week 2025, organized by Orochi Network, DSAC, VnExpress, and FPT Online',
    url: 'https://supervietnam.com/',
  },
  {
    name: '@orochi-network/ui',
    logo: '/companies/orochi.svg',
    description:
      'An internal React component library for Orochi Network',
    url: 'https://main--6927c7e4da46cf459bc59a90.chromatic.com',
  },
  {
    name: 'TGE',
    logo: '/companies/orochi.svg',
    description:
      'A Web3 token distribution platform with on-chain vesting and claiming',
    url: 'https://tge.orochi.network/',
  },
];

/** Contact info used by the Contact form and EmailJS templates. */
export const CONTACT = {
  myName: 'Ngo Trong Phuc',
  myEmail: 'phucngo4499@gmail.com',
};
