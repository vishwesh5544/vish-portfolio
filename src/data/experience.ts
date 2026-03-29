import { ExperienceItem } from "../types";

export const experience: ExperienceItem[] = [
  {
    company: "Tezda Pvt Ltd",
    role: "Senior Software Developer (Remote)",
    duration: "Nov 2023 - Present",
    highlights: [
      "Architected serverless REST API platform using AWS CDK, integrated with CodeCatalyst VCS for full CI/CD automation",
      "Built end-to-end encrypted WebSocket messaging system using Signal Protocol for secure real-time communication",
      "Led Node.js 16→20 migration with controlled fallback strategy; managed EKS container orchestration at scale",
      "Designed authentication, session management, and notification services on AWS Lambda + API Gateway",
      "Owned infrastructure-as-code, Docker containerization, and production deployment pipelines",
    ],
  },
  {
    company: "Grapple Software and Outsourcing Pvt Ltd",
    role: "Senior Software Developer (Remote)",
    duration: "Aug 2023 - Present",
    highlights: [
      "Led backend development in Java/Kotlin with Spring Boot and Spring Security for enterprise-grade APIs",
      "Built cross-platform Flutter mobile app with Riverpod state management and real-time WebSocket features",
      "Delivered React admin dashboards with shadcn/ui and Recharts for business data visualization",
      "Managed full AWS deployment pipeline: EC2, S3, CloudFront CDN, and Amplify for web and mobile apps",
      "Architected multi-service system integrating backend APIs, mobile client, and cloud infrastructure",
    ],
  },
  {
    company: "JobCommand",
    role: "Lead Software Engineer (Remote)",
    duration: "Mar 2023 - Jul 2023",
    highlights: [
      "Led complete frontend migration from Laravel Blade to React + Redux, modernizing the entire UI layer",
      "Refactored monolithic API into clean RESTful endpoints; optimized database queries for performance",
      "Managed AWS infrastructure: deployment, environment configuration, and scaling strategy",
    ],
  },
  {
    company: "Tellygence Technology, UK",
    role: "Software Engineer (Remote)",
    duration: "Dec 2021 - Mar 2023",
    highlights: [
      "Built Kotlin Spring Boot backend for HLS video streaming platform serving live and on-demand content",
      "Developed Flutter-based Android TV media player with custom playback controls and adaptive streaming",
      "Deployed and managed services on AWS Elastic Beanstalk with HTTP API Gateway integration",
    ],
  },
  {
    company: "Plodit LTD (UK)",
    role: "Web Developer",
    duration: "Jun 2020 - Apr 2021",
    highlights: [
      "Built Java-based web scrapers and document processing pipelines for automated data extraction",
      "Developed Shopify storefront features using jQuery and Liquid templates",
    ],
  },
  {
    company: "Anglia Ruskin University, Cambridge",
    role: "IT Helpdesk Agent",
    duration: "Aug 2021 - Sep 2021",
    highlights: [
      "Provided frontline IT support, resolving hardware and software issues for staff and students",
      "Triaged and rerouted complex queries to specialist teams, maintaining SLA response targets",
    ],
  },
];
