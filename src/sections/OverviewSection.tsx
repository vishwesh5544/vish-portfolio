import { Github, Mail, MapPin, Linkedin } from "lucide-react";
import { personalDetails, Socials } from "@/data";

const stats = [
    { label: "Companies", value: "6+" },
    { label: "Countries", value: "3+" },
    { label: "AI Systems Built", value: "5+" },
];

const identityCards = [
    {
        title: "Systems Architect",
        description:
            "Distributed microservices, EKS container orchestration, serverless pipelines, and real-time systems with encrypted communication protocols.",
        accent: "#38BDF8",
        icon: "🏗️",
    },
    {
        title: "AI & RAG Builder",
        description:
            "RAG pipelines, LLM integrations (OpenAI, Gemini), MCP server development, document parsing, embeddings, and AI-driven application backends.",
        accent: "#818CF8",
        icon: "🤖",
    },
    {
        title: "Full-Stack Executor",
        description:
            "React + TypeScript, Spring Boot, Flutter, Node.js — engineering end-to-end from intuitive UIs to high-performance infrastructure.",
        accent: "#34D399",
        icon: "⚡",
    },
];

const coreExpertise: { label: string; items: string[]; ai?: boolean }[] = [
    {
        label: "AI & GenAI",
        items: ["RAG Systems", "OpenAI Integration", "Generative AI", "MCP Servers", "LLM Orchestration", "Embeddings", "scikit-learn"],
        ai: true,
    },
    {
        label: "Backend & Systems",
        items: ["Node.js", "NestJS", "Spring Boot", "Kotlin", "Python", "FastAPI", "Microservices", "Real-time Systems", "Event-driven Architecture"],
    },
    {
        label: "Frontend & Mobile",
        items: ["React", "TypeScript", "Tailwind CSS", "Redux", "Flutter", "shadcn/ui"],
    },
    {
        label: "Cloud & DevOps",
        items: ["AWS", "Docker", "EKS", "AWS CDK", "CI/CD", "CodeCatalyst", "Serverless", "IaC"],
    },
    {
        label: "Databases & Caching",
        items: ["MongoDB", "MySQL", "DynamoDB", "MariaDB", "Redis", "Distributed Caching"],
    },
    {
        label: "Architecture & Leadership",
        items: ["Software Architecture", "Microservices Architecture", "Technical Leadership", "Team Leadership", "Technical Mentorship", "Strategic Planning", "System Integration"],
    },
];

export default function OverviewSection() {
    const summaryParagraphs = personalDetails.summary
        .split("\n\n")
        .map((paragraph) => paragraph.trim())
        .filter(Boolean);

    const introLine = summaryParagraphs[0] ?? "";
    const remainingSummary = summaryParagraphs.slice(1).join("\n\n");

    return (
        <div className="space-y-10 max-w-4xl mx-auto">
            {/* Hero */}
            <div className="space-y-3">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#38BDF8] bg-clip-text text-transparent break-words">
                    {personalDetails.headline ?? personalDetails.title}
                </h1>
                {introLine && <p className="text-sm sm:text-base md:text-lg text-[#E2E8F0] font-semibold break-words">{introLine}</p>}
                {remainingSummary && (
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed whitespace-pre-line max-w-3xl pt-1">
                        {remainingSummary}
                    </p>
                )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                {stats.map((s) => (
                    <div
                        key={s.label}
                        className="bg-[#0F1420] border border-[#1E2840] rounded-xl p-4 text-center"
                    >
                        <div className="text-2xl font-bold text-[#38BDF8]">{s.value}</div>
                        <div className="text-xs text-[#94A3B8] mt-1">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Core Expertise */}
            <div className="bg-[#0F1420] border border-[#1E2840] rounded-xl p-6 space-y-4">
                <h2 className="text-sm font-semibold text-[#E2E8F0] uppercase tracking-widest pl-3 border-l-2 border-[#38BDF8]">
                    Core Expertise
                </h2>
                <div className="space-y-4">
                    {coreExpertise.map(({ label, items, ai }) => (
                        <div key={label} className="grid grid-cols-[10rem_1fr] items-start gap-3">
                            <span className={`text-xs uppercase tracking-wider font-medium pt-1 leading-snug flex items-center gap-1.5 ${ai ? "text-[#818CF8]" : "text-[#475569]"}`}>
                                {label}
                                {ai && <span className="text-[9px] px-1 py-0.5 rounded bg-[#818CF8]/20 text-[#818CF8] font-bold">AI</span>}
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                                {items.map((item) => (
                                    <span
                                        key={item}
                                        className={`text-xs px-2.5 py-1 rounded-md font-medium whitespace-nowrap ${
                                            ai
                                                ? "bg-gradient-to-r from-[#818CF8]/20 to-[#38BDF8]/15 text-[#818CF8] border border-[#818CF8]/40"
                                                : "bg-[#38BDF8]/10 text-[#38BDF8]"
                                        }`}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* AI Showcase Card */}
            <div className="bg-[#0F1420] rounded-xl overflow-hidden border border-[#818CF8]/30"
                style={{ borderTopColor: "#818CF8", borderTopWidth: "2px" }}>
                <div className="p-6 space-y-5">
                    <div className="flex items-center gap-3">
                        <span className="text-xl">🤖</span>
                        <div>
                            <h2 className="text-sm font-semibold text-[#818CF8] uppercase tracking-widest">AI Engineering</h2>
                            <p className="text-xs text-[#475569] mt-0.5">Projects, tools & platforms built with AI at the core</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            {
                                name: "RAG Platform",
                                description: "Built an end-to-end Retrieval-Augmented Generation system with custom chunking strategies, vector embeddings, and LLM response synthesis — enabling intelligent document Q&A at scale.",
                                tags: ["RAG", "Embeddings", "OpenAI", "Vector DB"],
                            },
                            {
                                name: "LLM Orchestration Backend",
                                description: "Designed a multi-step orchestrator that chains LLM calls, manages context windows, handles tool use, and routes queries to specialized agents based on intent classification.",
                                tags: ["LLM", "Orchestration", "FastAPI", "OpenAI"],
                            },
                            {
                                name: "MCP Server Development",
                                description: "Developed Model Context Protocol servers to expose internal tools and data sources to AI agents — enabling structured, permission-aware access to live application state.",
                                tags: ["MCP", "Agentic AI", "Node.js", "TypeScript"],
                            },
                            {
                                name: "AI-powered SaaS Features",
                                description: "Integrated Generative AI capabilities into production SaaS platforms — from smart summarization and content generation to automated classification and recommendation engines.",
                                tags: ["Generative AI", "SaaS", "OpenAI", "Spring Boot"],
                            },
                        ].map((item) => (
                            <div key={item.name} className="bg-[#080B12] border border-[#1E2840] rounded-lg p-4 space-y-2 hover:border-[#818CF8]/40 transition-colors duration-300">
                                <h3 className="text-sm font-semibold text-[#E2E8F0]">{item.name}</h3>
                                <p className="text-xs text-[#94A3B8] leading-relaxed">{item.description}</p>
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {item.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-gradient-to-r from-[#818CF8]/20 to-[#38BDF8]/15 text-[#818CF8] border border-[#818CF8]/30 font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Identity Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {identityCards.map((card) => (
                    <div
                        key={card.title}
                        className="bg-[#0F1420] border border-[#1E2840] rounded-xl p-6 space-y-3 hover:border-[#38BDF8]/40 transition-colors duration-300"
                        style={{ borderTopColor: card.accent, borderTopWidth: "2px" }}
                    >
                        <div className="text-2xl">{card.icon}</div>
                        <h3 className="font-semibold text-[#E2E8F0]">{card.title}</h3>
                        <p className="text-sm text-[#94A3B8] leading-relaxed">{card.description}</p>
                    </div>
                ))}
            </div>

            {/* Contact row */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-5 pt-2">
                <a
                    href={`mailto:${personalDetails.email}`}
                    className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors break-all"
                >
                    <Mail size={15} />
                    {personalDetails.email}
                </a>
                <span className="flex items-center gap-2 text-sm text-[#94A3B8] break-words">
                    <MapPin size={15} />
                    {personalDetails.location}
                </span>
                <a
                    href={Socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors break-all"
                >
                    <Github size={15} />
                    github.com/vishwesh5544
                </a>
                <a
                    href={Socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#38BDF8] transition-colors break-all"
                >
                    <Linkedin size={15} />
                    linkedin.com/in/vishwesh23
                </a>
            </div>
        </div>
    );
}
