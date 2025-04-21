import { experience } from "@/data";

export default function ExperienceSection() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="space-y-8">
        {experience.map(exp => (
          <div key={exp.company} className="space-y-2">
            <h3 className="text-xl font-semibold">
              {exp.role} <span className="text-gray-600 font-normal">at {exp.company}</span>
            </h3>
            <p className="text-sm text-gray-500">{exp.duration}</p>
            <ul className="list-disc list-inside text-sm mt-1 text-gray-700 space-y-1">
              {exp.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
