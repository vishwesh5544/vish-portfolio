import { education } from "@/data";

export default function EducationSection() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="space-y-6">
        {education.map((edu, i) => (
          <div key={i} className="space-y-1">
            <h3 className="text-xl font-semibold">
              {edu.degree || edu.course} {edu.major ? `in ${edu.major}` : ""}
            </h3>
            <p className="text-sm text-gray-500">
              {edu.university || edu.institution || edu.platform} - {edu.type}
            </p>
            {edu.instructor && (
              <p className="text-sm text-gray-500">Instructor: {edu.instructor}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
