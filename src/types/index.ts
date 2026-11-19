import React from 'react';

export interface TabProps {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface SkillCategoryProps {
  category: string;
  description?: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
    featured?: boolean;
  }[];
}

export interface SkillProps {
  name: string;
  percentage: number;
  category?: string;
}

export interface ProjectProps {
  id: string;
  title: string;
  subtitle?: string;
  category: 'AI & Data Science' | 'Web Development' | 'IoT & Cloud' | 'UI/UX & Mobile' | 'All';
  image: string;
  technologies: string[];
  description: string;
  highlights?: string[];
  github?: string;
  figma?: string;
  demo?: string;
  isFeatured?: boolean;
}

export interface ExperienceProps {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  badge?: string;
  description: string[];
  skills: string[];
}

export interface ResearchProjectProps {
  title: string;
  role: string;
  period: string;
  tag: string;
  overview: string;
  keyContributions: string[];
  technologies: string[];
  datasets?: string[];
}

export interface CertificateProps {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  url?: string;
  badge?: string;
}

export interface ExtracurricularProps {
  title: string;
  organization: string;
  awardType: 'Award' | 'Leadership' | 'Community';
  description?: string;
}

export interface ReferenceProps {
  name: string;
  designation: string;
  department: string;
  organization: string;
  phone: string;
  email: string;
}

export interface ServiceProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  tags?: string[];
}

export interface EducationProps {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  description?: string;
  location?: string;
}

export interface SocialLinkProps {
  url: string;
  icon: React.ReactNode;
  label: string;
}
