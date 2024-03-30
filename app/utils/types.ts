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

export type Project = {
  name: string;
  logo: string;
  description: string;
}

export enum Breakpoints {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  '2xl' = 1536,
}

export type PopupPropsType = {
  type?: 'success' | 'failure';
  title?: string;
  content?: string;
  visible?: boolean;
};

export interface PopupRefType {
  show(duration?:number): void;
  hide(): void;
  showSuccess(title: string, content: string, duration?: number): void;
  showFailure(title: string, content: string, duration?: number): void;
}
