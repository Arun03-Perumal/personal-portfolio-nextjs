import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-4 text-slate-500">
            A selection of projects that showcase my technical skills and
            problem-solving abilities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="flex h-56 items-center justify-center bg-slate-200 text-slate-500">
                Project Image
              </div>

              <CardContent className="p-6">
                <h3 className="mb-3 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mb-6 leading-7 text-slate-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button asChild variant="outline">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>

                  <Button asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
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