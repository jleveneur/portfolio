import { type Icon } from "@/components/shared/icons";

export type Link = {
  label: string;
  url: string;
  icon: Icon;
};

export type EducationItem = {
  degree: string;
  institution: string;
  dates: string;
  description: string;
  projects: {
    title: string;
    description: string;
  }[];
};

export type ExperienceItem = {
  position: string;
  location: string;
  dates: string;
  description: string;
  projects: {
    title: string;
    description: string;
  }[];
};

export type TimelineItem = EducationItem | ExperienceItem;

export type Skill = {
  code?: string;
  title: string;
  category: string;
  knowledge: string;
  experience: string;
  level: string;
  type: string;
  description?: string;
};
