import { softSkills, technicalSkills } from "@/data";
import { Skill } from "@/types";

function SkillChip({ skill }: { skill: Skill }) {
    const chipClass =
        "border border-[#1E2840] text-[#94A3B8] hover:text-[#38BDF8] hover:border-[#38BDF8]/60";

    return (
        <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${chipClass}`}
        >
            {skill.name}
            {skill.yearsOfExperience && (
                <span className="text-[10px] opacity-60">{skill.yearsOfExperience}y</span>
            )}
        </span>
    );
}

const sections = [
    { label: "Programming Languages", skills: technicalSkills.programmingLanguages },
    { label: "Frameworks & Libraries", skills: technicalSkills.frameworks },
    { label: "Frontend & UI", skills: technicalSkills.frontend },
    { label: "Development Tools", skills: technicalSkills.tools },
    { label: "Cloud & DevOps", skills: [...technicalSkills.cloud, ...technicalSkills.devOps] },
    { label: "Architecture & Leadership", skills: [...technicalSkills.architecture, ...technicalSkills.leadership] },
    { label: "AI & Machine Learning", skills: technicalSkills.aiml },
    { label: "Caching & Performance", skills: technicalSkills.caching },
    { label: "Databases", skills: technicalSkills.databases },
    { label: "Developer Platforms", skills: technicalSkills.developerPlatforms },
    { label: "Operating Systems", skills: technicalSkills.operatingSystems },
    { label: "Personal Platforms", skills: technicalSkills.personalPlatforms },
];

export default function SkillsSection() {
    return (
        <div className="w-full max-w-4xl mx-auto space-y-10">
            <h2 className="text-2xl font-bold text-[#E2E8F0] mb-8 pl-4 border-l-2 border-[#38BDF8]">
                Skills
            </h2>

            {sections.map(({ label, skills }) => (
                <div key={label} className="space-y-3">
                    <div className="pl-3 border-l-2 border-[#38BDF8]/50">
                        <h3 className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest">
                            {label}
                        </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <SkillChip key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
            ))}

            {/* Soft Skills */}
            <div className="space-y-3">
                <div className="pl-3 border-l-2 border-[#818CF8]/50">
                    <h3 className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest">
                        Soft Skills
                    </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1.5 rounded-full text-sm border border-[#818CF8]/40 text-[#818CF8] hover:bg-[#818CF8]/10 transition-colors duration-200"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
