import { Mail, MapPin } from "lucide-react";
import { personalDetails } from "@/data";
import { Button } from "@/components/ui/button";

export default function OverviewSection() {
    return (
        <div className="text-center space-y-6">
            <div className="flex justify-center gap-4 text-gray-500 text-sm">
                <span className="flex items-center gap-2">
                    <Mail size={16} /> {personalDetails.email}
                </span>
                <span className="flex items-center gap-2">
                    <MapPin size={16} /> {personalDetails.location}
                </span>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">{personalDetails.summary}</p>
            <Button className="mt-4 px-6 py-2 rounded-xl text-sm">Explore My Work</Button>
        </div>
    );
}
