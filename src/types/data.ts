export interface PersonalDetails {
    name: string;
    title: string;
    phone: string;
    email: string;
    location: string;
    summary: string;
}

export interface SkillSet {
    programmingLanguages: string[];
    frameworks: string[];
    tools: string[];
    cloud: string[];
    devOps: string[];
    frontend: string[];
    databases: string[];
}

export interface ExperienceItem {
    company: string;
    role: string;
    duration: string;
    highlights: string[];
}

export interface Project {
    name: string;
    stack: string[];
    cloud?: string[];
    notes?: string[];
    type: "Contract" | "Freelance" | "Full-Time";
}

export interface EducationItem {
    university?: string;
    degree?: string;
    major?: string;
    course?: string;
    platform?: string;
    instructor?: string;
    institution?: string;
    type: "Degree" | "Diploma" | "Certificate";
}

export type SoftSkill = string;
