import { Company, ModalIds, NavbarItem, Project, Skill } from './types';

const navbarItems: NavbarItem[] = [
  { name: 'About', href: '/#about' },
  { name: 'Work', href: '/#work' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

const heroHeadText = '';
const heroSubText = 'Front-end developer';
const heroDescriptionText = `I like to craft solid and scalable front-end products with great user experiences.`;

const introduction =
  "I'm a skilled front-end developer with experience in JavaScript and TypeScript, and expertise in frameworks like Reactjs, Nextjs, and Vuejs. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!";

const skills: Skill[] = [
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
      'Skilled in CSS3, allow me to create stunning and responsive designs, enhance user experiences across various platforms. Familiar with Tailwind, Bootstrap and other UI libraries',
  },
  {
    title: 'JavaScript',
    icon: 'javascript.svg',
    description:
      'Fluent in JavaScript, able to deal with complex algorithms, optimize functions to enhance performance and efficiency',
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
      'Specialize in ReactJS and React Native (Expo). Familiar with Redux Saga/Thunk, Redux Toolkit',
  },
  {
    title: 'NextJS',
    icon: 'nextjs.svg',
    description:
      'Knowledgeable in SSR and CSR of NextJS. Familiar with threejs, react-three-fiber, react-three/drei',
  },
  {
    title: 'VueJS',
    icon: 'vuejs.svg',
    description: 'Experienced in VueJS. Familiar with Vuetify, Vuex',
  },
  {
    title: 'Git',
    icon: 'git.svg',
    description: 'Familiar with GitHub, GitLab',
  },
];

const companies: Company[] = [
  {
    name: 'Zigvy Corporation',
    logo: 'zigvy.webp',
    position: 'Front-end developer',
    time: '9/2021 - 9/2022',
    description: [
      'Developing and maintaining resource management web application using React.js, React Native and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
    url: 'https://www.hrforte.com/hr-octopro/',
  },
  {
    name: 'Rooxim Computer Science',
    logo: 'rooxim.webp',
    position: 'Front-end developer',
    time: '12/2022 - 8/2023',
    description: [
      'Developing POS software for Japanese businesses using Vuejs, Electronjs and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility',
      'Participating in improving and optimizing product performance',
    ],
  },
];

const projects: Project[] = [
  {
    name: 'HR Octo Pro',
    logo: 'hr-octo-pro.svg',
    description: 'A management web app for Human Resources',
    url: 'https://www.hrforte.com/hr-octopro/',
  },
  {
    name: 'TCG POS Siegfried',
    logo: 'tcg-pos-siegfried.ico',
    description: 'A desktop app for POS system of trading card game in Japan',
  },
  {
    name: 'Infinity Comic',
    logo: 'infinity-comic.png',
    description:
      'A comic reader app for mobile, which has basic features made from my own experiences. Managed by an admin web',
    url: [
      {
        type: 'web',
        title: 'Website',
        url: 'https://infinity-comic.web.app/',
        modalId: ModalIds.InfinityComicWebModal,
      },
      {
        type: 'mobile',
        title: 'Android/IOS',
        url: 'https://expo.dev/preview/update?message=update%20expo%20sdk%20version%20to%2049&updateRuntimeVersion=1.0.0&createdAt=2024-04-04T17%3A45%3A39.179Z&scheme=exp&projectId=5d5007d4-d4f0-45da-af5b-c57e1235cc7f&group=c9ed96ec-3d4f-4677-baef-458728111b96',
        qrUrl:
          'https://qr.expo.dev/eas-update?appScheme=exp&projectId=5d5007d4-d4f0-45da-af5b-c57e1235cc7f&groupId=c9ed96ec-3d4f-4677-baef-458728111b96',
        apkUrl:
          'https://drive.google.com/file/d/1xtj_KcMCO9gRoNliNkeet2N4TTLOYNQr/view?usp=sharing',
        modalId: ModalIds.InfinityComicMobileModal,
      },
    ],
  },
  {
    name: 'Awesome Chatbot',
    logo: 'awesome-chatbot.png',
    description:
      'A mobile app for chatting with bots, which is a mini project of mine',
    url: [
      {
        type: 'mobile',
        title: 'Android/IOS',
        url: 'https://expo.dev/preview/update?message=remove%20bot%20avatars%20in%20assets&updateRuntimeVersion=exposdk%3A50.0.0&createdAt=2024-04-04T14%3A41%3A57.877Z&scheme=exp&projectId=22d45950-a50e-481d-8477-eea11b0501c6&group=9da9ebda-4e51-4378-bdc1-e5cede0d39ab',
        qrUrl:
          'https://qr.expo.dev/eas-update?appScheme=exp&projectId=22d45950-a50e-481d-8477-eea11b0501c6&groupId=9da9ebda-4e51-4378-bdc1-e5cede0d39ab',
        apkUrl:
          'https://drive.google.com/file/d/1xv39CGYG19S81_c1VNHm2MKDrF3IS0tM/view?usp=sharing',
        modalId: ModalIds.AwesomeChatbotModal,
      },
    ],
  },
  {
    name: 'The Movie DB Website',
    logo: 'the-movie-db-website.svg',
    description:
      'A website to search and check information of movies. Data used from themoviedb api',
    url: 'https://themoviedb-website.web.app/',
  },
];

const contact = {
  myName: 'Ngo Trong Phuc',
  myEmail: 'phucngo4499@gmail.com',
};

export {
  companies,
  contact,
  heroDescriptionText,
  heroHeadText,
  heroSubText,
  introduction,
  navbarItems,
  projects,
  skills,
};
