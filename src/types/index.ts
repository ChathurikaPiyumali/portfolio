export interface TabProps {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface SkillProps {
  name: string;
  percentage: number;
}

export interface ProjectProps {
  id: string;
  title: string;
  category: string;
  image: string;
  technologies: string[];
  description: string;
  github?: string;
  figma?: string;
}

export interface CertificateProps {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export interface ServiceProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

export interface EducationProps {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface SocialLinkProps {
  url: string;
  icon: React.ReactNode;
  label: string;
}