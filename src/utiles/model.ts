export interface darkModeContextType {
  isDarkMode: boolean;
  toggleIsDarkMode: () => void;
}

export interface NavbarType {
  id: number;
  name: string;
  icon: string;
  href: string;
}

export interface AboutCardType {
  icon: string;
  name: string;
  desc: string;
}
export interface SkillType {
  icon: string;
  name: string;
  level: string;
}
export interface ProjectDataType {
  id: number;
  title: string;
  img_url: string;
  client: string;
  server: string;
  live: string;
  name: string;
}
export interface ContactDataType {
  icon: string;
  name: string;
  address: string;
  link: string;
}
