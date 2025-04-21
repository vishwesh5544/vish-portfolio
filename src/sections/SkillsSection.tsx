import { softSkills, technicalSkills } from "@/data";

export default function SkillsSection() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-semibold mb-4 text-lg">Tech Stack</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[...technicalSkills.programmingLanguages, ...technicalSkills.frameworks].map(skill => (
              <li
                key={skill}
                className="bg-white shadow-sm border border-gray-200 rounded-md px-4 py-2 text-center"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-lg">Soft Skills</h3>
          <ul className="list-disc list-inside text-sm space-y-2 text-gray-700">
            {softSkills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
