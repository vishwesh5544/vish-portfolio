import { Github, Mail, MapPin, Linkedin } from "lucide-react";
import { personalDetails, Socials } from "@/data";

const stats = [
    { label: "Years Coding", value: "10+" },
    { label: "Companies", value: "6+" },
    { label: "Countries", value: "3+" },
    { label: "AI Systems", value: "2" },
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

const coreExpertise = [
    {
        label: "Backend & Systems",
        items: ["Node.js", "NestJS", "Express", "Kotlin", "Spring Boot", "Python", "FastAPI", "REST APIs", "Microservices", "gRPC"],
    },
    {
        label: "Frontend & Mobile",
        items: ["React", "TypeScript", "Tailwind CSS", "Flutter", "React Native"],
    },
    {
        label: "Cloud & DevOps",
        items: ["AWS", "Azure", "Docker", "EKS", "CI/CD", "GitHub Actions", "Nginx", "IaC"],
    },
    {
        label: "Databases",
        items: ["MongoDB", "MySQL", "Redis", "DynamoDB"],
    },
    {
        label: "AI & Emerging Tech",
        items: ["RAG", "OpenAI", "Gemini", "LLM Integration", "Embeddings", "MCP"],
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
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#38BDF8] bg-clip-text text-transparent break-words">
                    {personalDetails.headline ?? personalDetails.title}
                </h1>
                {introLine && <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] font-medium break-words">{introLine}</p>}
                {remainingSummary && (
                    <p className="text-sm text-[#94A3B8] leading-relaxed whitespace-pre-line max-w-3xl pt-1">
                        {remainingSummary}
                    </p>
                )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                <div className="space-y-3">
                    {coreExpertise.map(({ label, items }) => (
                        <div key={label} className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2">
                            <span className="text-xs text-[#475569] uppercase tracking-wider font-medium sm:w-32 sm:shrink-0">
                                {label}
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                                {items.map((item) => (
                                    <span
                                        key={item}
                                        className="text-xs px-2 py-0.5 rounded-md bg-[#38BDF8]/10 text-[#38BDF8] font-medium"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
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
