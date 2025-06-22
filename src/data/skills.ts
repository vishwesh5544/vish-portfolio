import { SkillSet } from "../types";

export const technicalSkills: SkillSet = {
  aiml: [
    {
      name: "Generative AI Integration",
      proficiency: "Intermediate",
      yearsOfExperience: 1,
      description: "Building and integrating LLM-powered applications and chatbots",
      category: "AI/ML"
    },
    {
      name: "RAG Systems",
      proficiency: "Intermediate",
      yearsOfExperience: 1,
      description: "Retrieval Augmented Generation for enhanced AI responses",
      category: "AI/ML"
    },
    {
      name: "OpenAI Integration",
      proficiency: "Advanced",
      yearsOfExperience: 1,
      description: "Integration with OpenAI APIs and fine-tuning models",
      category: "AI/ML"
    },
    {
      name: "Model Context Protocol",
      proficiency: "Intermediate",
      yearsOfExperience: 1,
      description: "Building MCP servers and integrating with AI models",
      category: "AI/ML"
    }
  ],
  caching: [
    {
      name: "Redis",
      proficiency: "Advanced",
      yearsOfExperience: 3,
      description: "In-memory data store, caching, and message broker",
      category: "Caching & Message Broker"
    },
    {
      name: "Spring Cache",
      proficiency: "Advanced",
      yearsOfExperience: 3,
      description: "Implementation of caching abstraction in Spring",
      category: "Caching"
    },
    {
      name: "Distributed Caching",
      proficiency: "Advanced",
      yearsOfExperience: 3,
      description: "Implementation of distributed caching patterns",
      category: "Architecture"
    }
  ],
  programmingLanguages: [
    {
      name: "TypeScript",
      proficiency: "Expert",
      yearsOfExperience: 4,
      description: "Full-stack development with strong typing and modern ES features",
      category: "Frontend & Backend"
    },
    {
      name: "JavaScript",
      proficiency: "Expert",
      yearsOfExperience: 5,
      description: "Modern ES6+ features, async programming, and functional concepts",
      category: "Frontend & Backend"
    },
    {
      name: "Java",
      proficiency: "Advanced",
      yearsOfExperience: 4,
      description: "Enterprise applications and microservices development",
      category: "Backend"
    },
    {
      name: "Kotlin",
      proficiency: "Advanced",
      yearsOfExperience: 3,
      description: "Modern server-side development with coroutines and functional programming",
      category: "Backend"
    },
    {
      name: "Python",
      proficiency: "Intermediate",
      yearsOfExperience: 2,
      description: "Data processing and automation scripts",
      category: "Backend & Scripting"
    },
    {
      name: "PHP",
      proficiency: "Intermediate",
      yearsOfExperience: 2,
      description: "Web application development with modern frameworks",
      category: "Backend"
    }
  ],
  frameworks: [
    {
      name: "React Ecosystem",
      proficiency: "Expert",
      yearsOfExperience: 4,
      description: "Comprehensive expertise in modern React development including hooks, context, Suspense, Server Components, and advanced performance optimization. Expert in state management with Redux Toolkit (RTK), Redux-Saga for complex async flows, and Redux-Thunk for simpler operations. Implementation of custom hooks, render optimization, and code-splitting strategies.",
      category: "Frontend Framework"
    },
    {
      name: "Spring Boot",
      proficiency: "Expert",
      yearsOfExperience: 4,
      description: "Enterprise microservices with both Java and Kotlin, including Spring Cache, Security, and Cloud",
      category: "Backend Framework"
    },
    {
      name: "Node.js Backend Ecosystem",
      proficiency: "Expert",
      yearsOfExperience: 4,
      description: "Extensive experience with Node.js backend frameworks including Express.js for RESTful APIs, NestJS for scalable enterprise applications, and Socket.IO for real-time bidirectional communication. Implementation of WebSocket-based systems, microservices architecture, and event-driven patterns.",
      category: "Backend Framework"
    },
    {
      name: "Flutter & State Management",
      proficiency: "Advanced",
      yearsOfExperience: 2,
      description: "Cross-platform mobile development with advanced state management using BLoC pattern and Riverpod. Experience with custom animations, platform-specific implementations, and optimization techniques for both iOS and Android.",
      category: "Mobile Framework"
    },
    {
      name: "Python Web Frameworks",
      proficiency: "Intermediate",
      yearsOfExperience: 2,
      description: "Building backend services using FastAPI with automatic OpenAPI documentation, type hints, and async support. Experience with Flask for lightweight APIs and microservices, including custom middleware and extensions.",
      category: "Backend Framework"
    },
    {
      name: "NestJS",
      proficiency: "Advanced",
      yearsOfExperience: 3,
      description: "Building scalable server-side applications with TypeScript, leveraging decorators, dependency injection, and modular architecture. Experience with GraphQL integration, microservices, and custom interceptors.",
      category: "Backend Framework"
    },
    {
      name: "Real-time Communication",
      proficiency: "Advanced",
      yearsOfExperience: 3,
      description: "Implementing real-time features using Socket.IO, WebSockets, and Server-Sent Events. Experience with scaling real-time applications, handling connection management, and implementing pub/sub patterns.",
      category: "Backend Framework"
    }
  ],
  tools: [
    {
      name: "State Management Solutions",
      proficiency: "Expert",
      yearsOfExperience: 3,
      description: "Comprehensive expertise in frontend state management including Redux Toolkit, Redux-Saga, Context API for React, and BLoC/Riverpod for Flutter. Implementation of complex state flows, middleware, and performance optimization.",
      category: "Development Tools"
    },
    {
      name: "Docker",
      proficiency: "Expert",
      yearsOfExperience: 4,
      description: "Containerization and microservices deployment",
      category: "DevOps"
    },
    {
      name: "AWS CDK",
      proficiency: "Advanced",
      yearsOfExperience: 2,
      description: "Infrastructure as code for AWS services",
      category: "Cloud"
    },
    {
      name: "Elastic Kubernetes Service",
      proficiency: "Advanced",
      yearsOfExperience: 2,
      description: "Container orchestration and cluster management",
      category: "DevOps"
    },
    {
      name: "Signal Protocol",
      proficiency: "Intermediate",
      yearsOfExperience: 1,
      description: "End-to-end encryption implementation",
      category: "Security"
    }
  ],
  cloud: [
    {
      name: "AWS",
      proficiency: "Expert",
      yearsOfExperience: 4,
      description: "Full-stack cloud infrastructure and serverless architecture",
      category: "Cloud Platform"
    },
    {
      name: "AWS Amplify",
      proficiency: "Advanced",
      yearsOfExperience: 2,
      description: "Full-stack development platform for web and mobile",
      category: "Development Platform"
    },
    {
      name: "AWS CloudFront",
      proficiency: "Advanced",
      yearsOfExperience: 3,
      description: "Content delivery and edge computing",
      category: "CDN"
    }
  ],
  devOps: [
    {
      name: "CI/CD",
      proficiency: "Expert",
      yearsOfExperience: 4,
      description: "Automated testing, building, and deployment pipelines",
      category: "Automation"
    },
    {
      name: "CodeCatalyst",
      proficiency: "Advanced",
      yearsOfExperience: 2,
      description: "Unified software development service",
      category: "Development"
    }
  ],
  frontend: [
    {
      name: "Tailwind CSS",
      proficiency: "Expert",
      yearsOfExperience: 3,
      description: "Utility-first CSS framework for rapid UI development",
      category: "Styling"
    },
    {
      name: "shadcn/ui",
      proficiency: "Advanced",
      yearsOfExperience: 1,
      description: "Re-usable components built with Radix UI and Tailwind",
      category: "Components"
    }
  ],
  architecture: [
    {
      name: "Software Architecture",
      proficiency: "Advanced",
      yearsOfExperience: 3,
      description: "Designing scalable and maintainable software architectures for enterprise applications",
      category: "System Design"
    },
    {
      name: "Technical Leadership",
      proficiency: "Advanced",
      yearsOfExperience: 3,
      description: "Leading development of key technical modules and architectural decisions",
      category: "Leadership"
    },
    {
      name: "Microservices Architecture",
      proficiency: "Advanced",
      yearsOfExperience: 3,
      description: "Designing and implementing distributed systems using microservices patterns",
      category: "System Design"
    },
    {
      name: "System Integration",
      proficiency: "Advanced",
      yearsOfExperience: 3,
      description: "Integrating complex systems and third-party services",
      category: "Architecture"
    }
  ],
  leadership: [
    {
      name: "Technical Mentorship",
      proficiency: "Advanced",
      yearsOfExperience: 2,
      description: "Mentoring and guiding new engineering hires, fostering technical growth",
      category: "Leadership"
    },
    {
      name: "Technology Adoption",
      proficiency: "Advanced",
      yearsOfExperience: 2,
      description: "Driving adoption of new technologies including AI and MCP framework",
      category: "Innovation"
    },
    {
      name: "Strategic Planning",
      proficiency: "Advanced",
      yearsOfExperience: 2,
      description: "Participating in architecture and technical roadmap planning",
      category: "Planning"
    },
    {
      name: "Team Leadership",
      proficiency: "Advanced",
      yearsOfExperience: 2,
      description: "Leading technical teams and coordinating complex project deliverables",
      category: "Leadership"
    }
  ],
  databases: [
    {
      name: "MongoDB",
      proficiency: "Expert",
      yearsOfExperience: 4,
      description: "NoSQL database for scalable applications",
      category: "NoSQL"
    },
    {
      name: "MySQL",
      proficiency: "Advanced",
      yearsOfExperience: 4,
      description: "Relational database for structured data",
      category: "SQL"
    },
    {
      name: "DynamoDB",
      proficiency: "Advanced",
      yearsOfExperience: 3,
      description: "Serverless NoSQL database with automatic scaling",
      category: "NoSQL"
    }
  ],
};
