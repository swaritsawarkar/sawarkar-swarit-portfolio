export interface Achievement {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  highlight?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  websiteUrl?: string;
  image?: string;
  status: "live" | "in-progress" | "completed";
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "achievement" | "experience" | "education" | "project";
  websiteUrl?: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: string;
}

export interface IdeaLabItem {
  id: string;
  title: string;
  description: string;
  status: string;
  tags: string[];
}
