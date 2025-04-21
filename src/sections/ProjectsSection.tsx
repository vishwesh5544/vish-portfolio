import { projects } from "@/data";

export default function ProjectsSection() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="space-y-8">
        {projects.map(proj => (
          <div key={proj.name} className="space-y-2">
            <h3 className="text-xl font-semibold">{proj.name}</h3>
            <p className="text-sm text-gray-500">Type: {proj.type}</p>
            <p className="text-sm text-gray-700">
              Stack: {proj.stack.join(", ")} <br />
              Cloud: {proj.cloud?.join(", ") || "N/A"}
            </p>
            {proj.notes && (
              <ul className="list-disc list-inside text-sm mt-1 text-gray-600">
                {proj.notes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
