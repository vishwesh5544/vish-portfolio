import { Project } from "../types";

export const projects: Project[] = [
  {
    name: "WalkBuddy",
    stack: ["PHP", "Laravel", "jQuery", "Laravel Passport"],
    cloud: ["AWS Beanstalk"],
    notes: ["Migrated from DigitalOcean"],
    type: "Contract"
  },
  {
    name: "JobCommand",
    stack: ["PHP", "Laravel", "React", "Redux"],
    cloud: ["AWS"],
    notes: ["Migrated Laravel 7 to 10"],
    type: "Contract"
  },
  {
    name: "SkiBuddy",
    stack: ["Spring Boot Kotlin", "Flutter"],
    cloud: ["AWS"],
    type: "Contract"
  },
  {
    name: "Octagon",
    stack: ["Flutter", "Laravel"],
    cloud: ["AWS RDS (Aurora MySQL)"],
    type: "Contract"
  },
];
