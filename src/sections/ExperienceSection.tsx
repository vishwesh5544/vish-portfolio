import { experience } from "@/data";

export default function ExperienceSection() {
    return (
        <div className="w-full max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#E2E8F0] mb-8 pl-4 border-l-2 border-[#38BDF8]">
                Experience
            </h2>

            {/* Timeline */}
            <div className="relative space-y-6">
                {experience.map((exp) => (
                    <div key={exp.company} className="relative group">
                        {/* Timeline dot */}
                        {/* <div className="absolute -left-[1.45rem] top-1.5 w-3 h-3 rounded-full bg-[#38BDF8] ring-4 ring-[#080B12]" /> */}

                        {/* Card */}
                        <div className="bg-[#0F1420] border border-[#1E2840] hover:border-[#38BDF8]/30 transition-colors duration-300 rounded-xl p-5 space-y-3">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                                <div>
                                    <h3 className="font-semibold text-[#E2E8F0]">{exp.company}</h3>
                                    <p className="text-sm text-[#38BDF8] font-medium">{exp.role}</p>
                                </div>
                                {/* <span className="text-xs text-[#475569] whitespace-nowrap shrink-0 pt-0.5">
                                    {exp.duration}
                                </span> */}
                            </div>
                            <ul className="space-y-1.5 pt-1">
                                {exp.highlights.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
