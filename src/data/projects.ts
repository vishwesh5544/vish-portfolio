import { Project } from "../types";

export const projects: Project[] = [
  {
    name: "WalkBuddy",
    description: "A social walking app connecting pet owners and fitness enthusiasts. Built and migrated full platform from DigitalOcean to AWS.",
    stack: ["PHP", "Laravel", "jQuery", "Laravel Passport"],
    cloud: ["AWS Beanstalk"],
    notes: ["Migrated from DigitalOcean to AWS Beanstalk", "Implemented OAuth via Laravel Passport", "REST API with full authentication flow"],
    type: "Contract"
  },
  {
    name: "JobCommand",
    description: "B2B job management SaaS platform. Led frontend modernization and backend API refactoring.",
    stack: ["PHP", "Laravel", "React", "Redux", "TypeScript"],
    cloud: ["AWS EC2", "AWS S3", "AWS RDS"],
    notes: ["Migrated Laravel 7 to 10", "Full frontend rewrite from Blade to React + Redux", "Refactored monolithic API into RESTful endpoints"],
    type: "Contract"
  },
  {
    name: "SkiBuddy",
    description: "Cross-platform ski companion app with real-time features, maps, and native mobile experience.",
    stack: ["Spring Boot", "Kotlin", "Flutter", "Riverpod"],
    cloud: ["AWS EC2", "AWS RDS"],
    notes: ["Cross-platform iOS + Android", "Real-time WebSocket features", "Spring Security for API auth"],
    type: "Contract"
  },
  {
    name: "Octagon",
    description: "Admin and management platform for a fitness/combat sports organization with booking and scheduling.",
    stack: ["Flutter", "Laravel", "MySQL"],
    cloud: ["AWS RDS (Aurora MySQL)"],
    notes: ["Flutter cross-platform admin panel", "Aurora MySQL for high-availability data layer", "REST API backend with role-based access"],
    type: "Contract"
  },
];
