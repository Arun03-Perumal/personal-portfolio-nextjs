import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[90vh] items-center bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left Section */}
          <div>

            <p className="mb-3 text-lg text-slate-500">
              Hello, I'm
            </p>

            <h1 className="mb-4 text-5xl font-bold md:text-7xl">
              {profile.name}
            </h1>

            <h2 className="mb-6 text-2xl text-slate-600 md:text-3xl">
              {profile.subtitle}
            </h2>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-500">
              {profile.description}
            </p>

            {/* Skill Tags */}
            <div className="mb-8 flex flex-wrap gap-3">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-slate-100"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <Button asChild size="lg">
                <a href={profile.resume} download>
                  Download Resume
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
              >
                <a href="#projects">
                  View Projects
                </a>
              </Button>

            </div>

          </div>

          {/* Right Section */}
          <div className="flex justify-center">

            <div className="flex h-96 w-96 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

              {/* Replace with Image component after adding profile photo */}

              <span className="text-7xl font-bold text-slate-700">
                {profile.shortName
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </span>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}