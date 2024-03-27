export type NavbarItem = {
  name: string;
  href: string;
};

export type Skill = {
  title: string;
  icon: string;
  description?: string | string[];
};

export type Company = {
  name: string;
  logo: string;
  position: string;
  time: string;
  description: string | string[];
};

export enum Breakpoints {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  '2xl' = 1536,
}
