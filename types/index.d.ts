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