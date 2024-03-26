import { Company, Skill } from './types';

const styles = {
  testBackground: 'bg-[#441999]',
};

const skills: Skill[] = [
  {
    title: 'HTML5',
    icon: 'html5.svg',
  },
  {
    title: 'CSS3',
    icon: 'css3.svg',
    description: 'I can also work with Tailwind, Bootstrap and other libraries',
  },
  {
    title: 'Javascript',
    icon: 'javascript.svg',
  },
  {
    title: 'Typescript',
    icon: 'typescript.svg',
  },
  {
    title: 'Reactjs',
    icon: 'reactjs.svg',
    description:
      'I can also work with React Native (native or Expo), Redux (Saga/Thunk)',
  },
  {
    title: 'Vuejs',
    icon: 'vuejs.svg',
    description: 'Worked with Vuetify, Vuex',
  },
  {
    title: 'Nextjs',
    icon: 'nextjs.svg',
    description: 'Worked with Threejs, react-three-fiber, react-three/drei',
  },
  {
    title: 'Git',
    icon: 'git.svg',
    description: 'GitHub, GitLab',
  },
];

const introduction =
  "I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!";

const companies: Company[] = [
  {
    name: 'Zigvy Corporation',
    logo: 'zigvy.webp',
    position: 'Front-end developer',
    time: '9/2021 - 9/2022',
    description: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    name: 'Rooxim Computer Science',
    logo: 'rooxim.webp',
    position: 'Front-end developer',
    time: '12/2022 - 8/2023',
    description: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
];

export { styles, skills, introduction, companies };
