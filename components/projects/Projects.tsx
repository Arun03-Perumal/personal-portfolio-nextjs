import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Library Management System",
    description:
      "A full-stack MERN application for managing books, users, and library operations.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "CRM Dashboard",
    description:
      "Customer Relationship Management dashboard built using React, TypeScript and Supabase.",
    tech: ["React", "TypeScript", "Supabase"],
  },
  {
    title: "Netflix Clone",
    description:
      "Responsive movie streaming UI with API integration and dynamic content rendering.",
    tech: ["React", "API", "Tailwind"],
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built using Next.js, TypeScript and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Projects
          </h2>

          <p className="text-slate-500 mt-4">
            Some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <Card
              key={project.title}
              className="hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-8">

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="flex gap-3">
                  <Button variant="outline">
                    GitHub
                  </Button>

                  <Button>
                    Live Demo
                  </Button>
                </div>

              </CardContent>
            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}