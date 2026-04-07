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
  url?: UrlList;
};

export type Project = {
  name: string;
  logo: string;
  description: string | string[];
  url?: UrlList;
};

/**
 * A single URL entry for a project or company.
 * Plain links use only `type`, `title`, and `url`.
 * Modal-triggered entries add one or more optional fields
 * (description, QR code, APK download, test accounts, or the
 * explicit website button for web-only modals).
 */
export type Url = {
  type: string;
  title: string;
  url: string;
  description?: string;
  qrUrl?: string;
  apkUrl?: string;
  testAccounts?: string[];
  password?: string;
  accountNote?: string;
  showWebsiteButton?: boolean;
};

export type UrlList = string | Url[];

export enum DeviceTypes {
  android = 'Android',
  ios = 'IOS',
  androidAndIos = 'Android/IOS',
  web = 'Web',
}

export enum Breakpoints {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  '2xl' = 1536,
}

export type ModalPropsType = {
  visible?: boolean;
  title?: string;
  children?: React.ReactNode;
};

export interface ModalRefType {
  show(): void;
  hide(): void;
}

export type PopupPropsType = {
  type?: 'success' | 'failure';
  title?: string;
  content?: string;
  visible?: boolean;
};

export interface PopupRefType {
  show(duration?: number): void;
  hide(): void;
  showSuccess(title: string, content: string, duration?: number): void;
  showFailure(title: string, content: string, duration?: number): void;
}
