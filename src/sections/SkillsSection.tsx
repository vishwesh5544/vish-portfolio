import { softSkills, technicalSkills } from "@/data";
import { Skill } from "@/types";

function SkillChip({ skill, ai, leadership }: { skill: Skill; ai?: boolean; leadership?: boolean }) {
    const chipClass = ai
        ? "bg-gradient-to-r from-[#818CF8]/20 to-[#38BDF8]/15 text-[#818CF8] border border-[#818CF8]/50 hover:border-[#818CF8]/80"
        : leadership
        ? "bg-[#C4923A]/10 text-[#C4923A] border border-[#C4923A]/40 hover:border-[#C4923A]/70"
        : "border border-[#1E2840] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/60";

    return (
        <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${chipClass}`}
        >
            {skill.name}
            {/* {skill.yearsOfExperience && (
                <span className="text-[10px] opacity-60">{skill.yearsOfExperience}y</span>
            )} */}
        </span>
    );
}

// Sections shown on the page (1-5 visible, 6-10 commented, 11 removed)
const visibleSections = [
    // 3. Architecture & Leadership
    { label: "Architecture & Leadership", skills: [...technicalSkills.architecture, ...technicalSkills.leadership], ai: false, leadership: true },
    // 4. Frameworks & Libraries
    { label: "Frameworks & Libraries", skills: technicalSkills.frameworks, ai: false, leadership: false },
    // 5. Cloud & DevOps
    { label: "Cloud & DevOps", skills: [...technicalSkills.cloud, ...technicalSkills.devOps], ai: false, leadership: false },
];

// Commented sections (6-10):
// { label: "Frontend & UI", skills: technicalSkills.frontend, ai: false },
// { label: "Programming Languages", skills: technicalSkills.programmingLanguages, ai: false },
// { label: "Caching & Performance", skills: technicalSkills.caching, ai: false },
// { label: "Developer Platforms", skills: technicalSkills.developerPlatforms, ai: false },
// { label: "Operating Systems", skills: technicalSkills.operatingSystems, ai: false },

// Removed (11):
// { label: "Personal Platforms", skills: technicalSkills.personalPlatforms, ai: false },

export default function SkillsSection() {
    return (
        <div className="w-full max-w-4xl mx-auto space-y-10">
            <h2 className="text-2xl font-bold text-[#E2E8F0] mb-8 pl-4 border-l-2 border-[#38BDF8]">
                Skills
            </h2>

            {/* 1. AI & Machine Learning */}
            <div className="space-y-3">
                <div className="pl-3 border-l-2 border-[#818CF8]/70 flex items-center gap-2">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-[#818CF8]">AI & Machine Learning</h3>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#818CF8]/20 text-[#818CF8] font-semibold tracking-wide">AI</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {[...technicalSkills.aiml].sort((a, b) => (b.yearsOfExperience ?? 0) - (a.yearsOfExperience ?? 0)).map((skill) => (
                        <SkillChip key={skill.name} skill={skill} ai={true} />
                    ))}
                </div>
            </div>

            {/* 2. Soft Skills */}
            <div className="space-y-3">
                <div className="pl-3 border-l-2 border-[#818CF8]/50">
                    <h3 className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill) => (
                        <span key={skill} className="px-3 py-1.5 rounded-full text-sm border border-[#818CF8]/40 text-[#818CF8] hover:bg-[#818CF8]/10 transition-colors duration-200">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* 3-5. Visible sections */}
            {visibleSections.map(({ label, skills, ai, leadership }) => (
                <div key={label} className="space-y-3">
                    <div className={`pl-3 border-l-2 flex items-center gap-2 ${leadership ? "border-[#C4923A]/70" : "border-[#38BDF8]/50"}`}>
                        <h3 className={`text-xs font-semibold uppercase tracking-widest ${leadership ? "text-[#C4923A]" : "text-[#94A3B8]"}`}>{label}</h3>
                        {leadership && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#C4923A]/20 text-[#C4923A] font-semibold tracking-wide">
                                Lead
                            </span>
                        )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {[...skills].sort((a, b) => (b.yearsOfExperience ?? 0) - (a.yearsOfExperience ?? 0)).map((skill) => (
                            <SkillChip key={skill.name} skill={skill} ai={ai} leadership={leadership} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
