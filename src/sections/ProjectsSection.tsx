import { projects } from "@/data";

const typeBadgeClass: Record<string, string> = {
    Contract: "bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/30",
    Freelance: "bg-[#818CF8]/10 text-[#818CF8] border border-[#818CF8]/30",
    "Full-Time": "bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30",
};

export default function ProjectsSection() {
    return (
        <div className="w-full max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#E2E8F0] mb-8 pl-4 border-l-2 border-[#38BDF8]">
                Projects
            </h2>

            <div className="space-y-6">
                {projects.map((proj) => (
                    <div
                        key={proj.name}
                        className="bg-[#0F1420] border border-[#1E2840] rounded-xl overflow-hidden hover:border-[#38BDF8]/30 transition-colors duration-300"
                        style={{ borderTopColor: "#38BDF8", borderTopWidth: "2px" }}
                    >
                        <div className="p-5 space-y-4">
                            {/* Header */}
                            <div className="flex items-start justify-between gap-3 flex-wrap">
                                <div>
                                    <h3 className="font-semibold text-[#E2E8F0] text-lg">{proj.name}</h3>
                                    {proj.description && (
                                        <p className="text-sm text-[#94A3B8] mt-0.5">{proj.description}</p>
                                    )}
                                </div>
                                <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ${typeBadgeClass[proj.type]}`}>
                                    {proj.type}
                                </span>
                            </div>

                            {/* Stack */}
                            <div className="space-y-1.5">
                                <p className="text-xs text-[#475569] uppercase tracking-wider font-medium">Stack</p>
                                <div className="flex flex-wrap gap-2">
                                    {proj.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2.5 py-1 rounded-md bg-[#38BDF8]/10 text-[#38BDF8] font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Cloud */}
                            {proj.cloud && proj.cloud.length > 0 && (
                                <div className="space-y-1.5">
                                    <p className="text-xs text-[#475569] uppercase tracking-wider font-medium">Cloud</p>
                                    <div className="flex flex-wrap gap-2">
                                        {proj.cloud.map((svc) => (
                                            <span
                                                key={svc}
                                                className="text-xs px-2.5 py-1 rounded-md border border-[#818CF8]/40 text-[#818CF8] font-medium"
                                            >
                                                {svc}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Notes */}
                            {proj.notes && proj.notes.length > 0 && (
                                <ul className="space-y-1 pt-1">
                                    {proj.notes.map((note, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0" />
                                            {note}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
