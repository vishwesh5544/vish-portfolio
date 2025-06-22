import { softSkills, technicalSkills } from "@/data";
import { Skill } from "@/types";

function SkillCard({ skill }: { skill: Skill }) {
  const proficiencyColors = {
    Expert: "bg-green-100 text-green-800",
    Advanced: "bg-blue-100 text-blue-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Beginner: "bg-gray-100 text-gray-800",
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold">{skill.name}</h4>
        <span className={`text-xs px-2 py-1 rounded-full ${proficiencyColors[skill.proficiency]}`}>
          {skill.proficiency}
        </span>
      </div>
      {skill.yearsOfExperience && (
        <div className="text-xs text-gray-600 mb-2">
          {skill.yearsOfExperience} years of experience
        </div>
      )}
      {skill.description && (
        <p className="text-sm text-gray-700 mb-2">{skill.description}</p>
      )}
      {skill.category && (
        <div className="text-xs text-gray-500">{skill.category}</div>
      )}
    </div>
  );
}

export default function SkillsSection() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="space-y-8">
        <div>
          <h3 className="font-semibold mb-4 text-xl">Programming Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalSkills.programmingLanguages.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-xl">Frameworks & Libraries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalSkills.frameworks.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-xl">Cloud & DevOps</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...technicalSkills.cloud, ...technicalSkills.devOps].map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-xl">Architecture & Technical Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...technicalSkills.architecture, ...technicalSkills.leadership].map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-xl">AI & Machine Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalSkills.aiml.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-xl">Caching & Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalSkills.caching.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-xl">Databases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalSkills.databases.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-xl">Soft Skills</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {softSkills.map(skill => (
              <li
                key={skill}
                className="bg-white shadow-sm border border-gray-200 rounded-md px-4 py-3 text-center hover:shadow-md transition-shadow"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
