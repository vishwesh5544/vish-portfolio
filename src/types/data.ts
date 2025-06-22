export interface PersonalDetails {
    name: string;
    title: string;
    phone: string;
    email: string;
    location: string;
    summary: string;
}

export interface Skill {
    name: string;
    proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    yearsOfExperience?: number;
    description?: string;
    category?: string;
}

export interface SkillSet {
    programmingLanguages: Skill[];
    frameworks: Skill[];
    tools: Skill[];
    cloud: Skill[];
    devOps: Skill[];
    frontend: Skill[];
    databases: Skill[];
    aiml: Skill[];
    caching: Skill[];
    architecture: Skill[];
    leadership: Skill[];
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
