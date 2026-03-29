import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { personalDetails, Socials } from "@/data";

const contactLinks = [
    {
        label: "Email",
        value: personalDetails.email,
        href: `mailto:${personalDetails.email}`,
        icon: Mail,
        description: "Best way to reach me for work enquiries",
        accent: "#38BDF8",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/vishwesh23",
        href: Socials.linkedin,
        icon: Linkedin,
        description: "Connect professionally — DMs open",
        accent: "#818CF8",
    },
    {
        label: "GitHub",
        value: "github.com/vishwesh5544",
        href: Socials.github,
        icon: Github,
        description: "Browse my open source work and projects",
        accent: "#38BDF8",
    },
    // {
    //     label: "Instagram",
    //     value: "@vishwesh.io",
    //     href: Socials.instagram,
    //     icon: Instagram,
    //     description: "Behind the scenes — tech, life, exotic pets",
    //     accent: "#818CF8",
    // },
];

export default function ContactSection() {
    return (
        <div className="w-full max-w-2xl mx-auto space-y-10">
            <h2 className="text-2xl font-bold text-[#E2E8F0] pl-4 border-l-2 border-[#38BDF8]">
                Contact
            </h2>

            {/* Intro */}
            <div className="bg-[#0F1420] border border-[#1E2840] rounded-xl p-6 space-y-2"
                style={{ borderTopColor: "#38BDF8", borderTopWidth: "2px" }}>
                <p className="text-sm text-[#E2E8F0] font-semibold">Let's build something together.</p>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                    Whether it's a system architecture challenge, an AI platform, a full-stack product, or a team that needs technical leadership — I'm open to interesting problems. Reach out through any of the channels below.
                </p>
                <div className="flex items-center gap-2 pt-1 text-xs text-[#475569]">
                    <MapPin size={13} />
                    {personalDetails.location}
                </div>
            </div>

            {/* Leadership highlight */}
            {/* <div className="bg-[#0F1420] border border-[#1E2840] rounded-xl p-6 space-y-3"
                style={{ borderTopColor: "#C4923A", borderTopWidth: "2px" }}>
                <div className="flex items-center gap-2">
                    <span className="text-lg">🎯</span>
                    <div>
                        <h3 className="text-sm font-semibold text-[#C4923A] uppercase tracking-widest flex items-center gap-2">
                            Leadership & Collaboration
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#C4923A]/20 text-[#C4923A] font-bold">Lead</span>
                        </h3>
                        <p className="text-xs text-[#475569] mt-0.5">What I bring to teams and organisations</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                    {["Technical Leadership", "Team Leadership", "Technical Mentorship", "Strategic Planning", "Stakeholder Communication", "Architecture Decisions", "Delivery Ownership"].map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-[#C4923A]/10 text-[#C4923A] border border-[#C4923A]/30 font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed pt-1">
                    I've led engineering teams, owned delivery pipelines end-to-end, and driven technical decisions at the architecture level. I thrive in roles that blend hands-on execution with strategic thinking.
                </p>
            </div> */}

            {/* Contact links */}
            <div className="space-y-3">
                {contactLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noreferrer"
                        className="flex items-center gap-4 bg-[#0F1420] border border-[#1E2840] rounded-xl p-5 hover:border-[#38BDF8]/30 transition-colors duration-300 group"
                    >
                        <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${link.accent}15`, border: `1px solid ${link.accent}30` }}
                        >
                            <link.icon size={18} style={{ color: link.accent }} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-[#475569] uppercase tracking-wider font-medium">{link.label}</p>
                            <p className="text-sm text-[#E2E8F0] font-medium truncate">{link.value}</p>
                            <p className="text-xs text-[#94A3B8] mt-0.5">{link.description}</p>
                        </div>
                        <ExternalLink size={14} className="text-[#475569] group-hover:text-[#38BDF8] transition-colors shrink-0" />
                    </a>
                ))}
            </div>
        </div>
    );
}
