import { Github, Mail, MapPin, Linkedin, Download, ArrowRight } from "lucide-react";
import { personalDetails } from "@/data";
import { Button } from "@/components/ui/button";

export default function OverviewSection() {
    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
                <div className="flex justify-center gap-6 text-gray-600 text-sm">
                    <span className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                        <Mail size={16} className="shrink-0" />
                        <a href={`mailto:${personalDetails.email}`} className="hover:underline">
                            {personalDetails.email}
                        </a>
                    </span>
                    <span className="flex items-center gap-2">
                        <MapPin size={16} className="shrink-0" />
                        {personalDetails.location}
                    </span>
                </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm shadow-lg rounded-2xl p-8 space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                    {personalDetails.summary}
                </p>
                
                {/* <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <Button
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                    >
                        View Projects <ArrowRight size={16} />
                    </Button>
                    <Button
                        variant="outline"
                        className="px-6 py-2 rounded-xl text-sm border-purple-200 text-purple-700 hover:bg-purple-50 flex items-center gap-2 shadow-sm"
                    >
                        <Download size={16} /> Download Resume
                    </Button>
                </div> */}

                <div className="flex justify-center gap-4 pt-2">
                    <a
                        href="https://github.com/vishwesh5544"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://linkedin.com/in/vishwesh23"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                        <Linkedin size={24} />
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/50 backdrop-blur-sm shadow-md rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-2">Full-Stack Development</h3>
                    <p className="text-gray-600">Expert in modern web technologies and cloud solutions</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm shadow-md rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-2">Technical Leadership</h3>
                    <p className="text-gray-600">Leading teams and driving technology adoption</p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm shadow-md rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-2">Innovation Focus</h3>
                    <p className="text-gray-600">Implementing AI and cutting-edge solutions</p>
                </div>
            </div>
        </div>
    );
}
