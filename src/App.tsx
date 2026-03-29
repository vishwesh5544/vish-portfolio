import { useState } from "react";
import { Globe } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import profileImg from "@/assets/profile.jpg";
import { personalDetails, Socials } from "@/data";

import {
    EducationSection,
    ExperienceSection,
    OverviewSection,
    ProjectsSection,
    SectionWrapper,
    SkillsSection,
} from "@/sections";

const tabs = [
    { id: "overview", label: "Overview" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
];

export default function App() {
    const [activeTab, setActiveTab] = useState("overview");

    const renderSection = () => {
        switch (activeTab) {
            case "overview":
                return <OverviewSection key="overview" />;
            case "skills":
                return <SkillsSection key="skills" />;
            case "experience":
                return <ExperienceSection key="experience" />;
            case "projects":
                return <ProjectsSection key="projects" />;
            case "education":
                return <EducationSection key="education" />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-[#080B12] dot-grid-bg text-[#E2E8F0] flex">
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col w-64 bg-[#0F1420] border-r border-[#1E2840] p-6 space-y-4 sticky top-0 h-screen">
                <div className="flex flex-col items-center text-center space-y-2">
                    <div className="p-0.5 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#818CF8]">
                        <img
                            src={profileImg}
                            alt="Profile picture of Vishwesh Shukla, Software Engineer and Architect"
                            className="w-24 h-24 rounded-full object-cover border-2 border-[#0F1420]"
                        />
                    </div>
                    <h1 className="text-base font-bold text-[#E2E8F0] mt-2">{personalDetails.name}</h1>
                    <p className="text-xs text-[#94A3B8]">{personalDetails.title}</p>
                    <p className="text-xs italic text-[#475569]">Self-forged. Purpose-built.</p>
                </div>

                <nav className="flex-1 mt-6 space-y-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`text-left text-sm px-4 py-2 rounded-lg transition-all w-full font-medium ${
                                activeTab === tab.id
                                    ? "bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30"
                                    : "text-[#94A3B8] hover:text-[#E2E8F0] hover:bg-[#1E2840] border border-transparent"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>

                <div className="flex justify-center gap-4 mt-auto pt-4 border-t border-[#1E2840]">
                    <a href={Socials.github} target="_blank" rel="noreferrer" className="text-[#475569] hover:text-[#38BDF8] transition-colors">
                        <FaGithub className="w-5 h-5" />
                    </a>
                    <a href={Socials.linkedin} target="_blank" rel="noreferrer" className="text-[#475569] hover:text-[#38BDF8] transition-colors">
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href={""} target="_blank" rel="noreferrer" className="text-[#475569] hover:text-[#38BDF8] transition-colors">
                        <Globe className="w-5 h-5" />
                    </a>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 h-screen overflow-y-auto">
                <div className="min-h-screen w-full px-4 md:px-12 py-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            {<SectionWrapper>{renderSection()}</SectionWrapper>}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
