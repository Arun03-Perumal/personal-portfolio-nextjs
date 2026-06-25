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
      className="bg-slate-50 py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}

        <div className="mb-12 text-center md:mb-16">

          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Skills
          </h2>

          <p className="mt-4 text-slate-500">
            Technologies and tools I work with
          </p>

        </div>

        {/* Skills Grid */}

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">

          {skills.map((skill) => (
            <Card
              key={skill}
              className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex h-20 items-center justify-center px-3 text-center text-sm font-semibold sm:h-24 sm:text-base lg:text-lg">
                {skill}
              </CardContent>
            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}