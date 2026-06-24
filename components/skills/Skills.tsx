import { Card, CardContent } from "@/components/ui/card";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "Git",
  "GitHub",
  "VS Code",
  "REST API",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold">
            Skills
          </h2>

          <p className="text-slate-500 mt-4">
            Technologies and tools I work with
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <Card
              key={skill}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="flex items-center justify-center h-24 font-semibold text-lg">
                {skill}
              </CardContent>
            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}