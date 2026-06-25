import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-50 py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Section Header */}

        <div className="mb-12 text-center md:mb-16">

          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            A selection of projects that showcase my technical skills and
            problem-solving abilities.
          </p>

        </div>

        {/* Projects */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">

          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >

              {/* Project Image */}

              <div className="relative h-48 w-full overflow-hidden bg-slate-200 sm:h-56">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-300 hover:scale-105"
                />

              </div>

              <CardContent className="p-5 sm:p-6">

                <h3 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm leading-7 text-slate-600 sm:text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="mb-6 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="flex flex-col gap-3 sm:flex-row">

                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>

                  <Button asChild className="w-full sm:w-auto">
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