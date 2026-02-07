import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export interface HomeContent {
  headlinePrefix: string;
  headlineGradient: string;
  subheadline: string;
}

export interface AboutContent {
  headline: string;
  intro: string;
}

export interface DataContextType {
  projects: Project[];
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  homeContent: HomeContent;
  updateHomeContent: (content: HomeContent) => void;
  aboutContent: AboutContent;
  updateAboutContent: (content: AboutContent) => void;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}