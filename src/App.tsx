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
        <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 text-gray-900 flex">
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col w-64 bg-white border-r shadow-sm p-6 space-y-4 sticky top-0 h-screen">
                <div className="flex flex-col items-center text-center">
                    <img src={profileImg} alt="Profile" className="w-24 h-24 rounded-full object-cover border" />
                    <h1 className="text-lg font-bold mt-2">{personalDetails.name}</h1>
                    <p className="text-sm text-gray-500">{personalDetails.title}</p>
                </div>

                <nav className="flex-1 mt-6 space-y-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`text-left text-sm px-4 py-2 rounded transition w-full font-medium ${
                                activeTab === tab.id ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>

                <div className="flex justify-center gap-3 mt-auto">
                    <a href={Socials.github} target="_blank" rel="noreferrer">
                        <FaGithub className="w-5 h-5 text-gray-600 hover:text-black" />
                    </a>
                    <a href={Socials.linkedin} target="_blank" rel="noreferrer">
                        <FaLinkedin className="w-5 h-5 text-gray-600 hover:text-black" />
                    </a>
                    <a href={""} target="_blank" rel="noreferrer">
                        <Globe className="w-5 h-5 text-gray-600 hover:text-black" />
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
