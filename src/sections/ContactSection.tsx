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
                    Whether it's a system architecture challenge, an AI platform, or a full-stack product — I'm open to interesting problems. Reach out through any of the channels below.
                </p>
                <div className="flex items-center gap-2 pt-1 text-xs text-[#475569]">
                    <MapPin size={13} />
                    {personalDetails.location}
                </div>
            </div>

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
