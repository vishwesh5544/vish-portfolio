import { education } from "@/data";

const typeBadgeClass: Record<string, string> = {
    Degree: "bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30",
    Diploma: "bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/30",
    Certificate: "bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30",
};

export default function EducationSection() {
    return (
        <div className="w-full max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#E2E8F0] mb-8 pl-4 border-l-2 border-[#38BDF8]">
                Education
            </h2>
            <div className="space-y-4">
                {education.map((edu, i) => (
                    <div
                        key={i}
                        className="bg-[#0F1420] rounded-xl p-5 border-r border-t border-b border-[#1E2840] border-l-2 border-l-[#38BDF8] hover:border-[#38BDF8]/30 transition-colors duration-300"
                    >
                        <div className="flex items-start justify-between gap-3 flex-wrap">
                            <div className="space-y-0.5">
                                <h3 className="font-semibold text-[#E2E8F0]">
                                    {edu.degree || edu.course}
                                    {edu.major ? ` in ${edu.major}` : ""}
                                </h3>
                                <p className="text-sm text-[#94A3B8]">
                                    {edu.university || edu.institution || edu.platform}
                                </p>
                                {edu.instructor && (
                                    <p className="text-xs text-[#475569]">Instructor: {edu.instructor}</p>
                                )}
                            </div>
                            <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ${typeBadgeClass[edu.type]}`}>
                                {edu.type}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
