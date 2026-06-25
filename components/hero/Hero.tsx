import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const heroSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-gradient-to-br from-white via-slate-50 to-blue-50"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Section */}

          <div>

            <p className="mb-4 text-lg font-medium text-blue-600">
              Hello, I'm
            </p>

            <h1 className="mb-4 text-6xl font-extrabold tracking-tight text-slate-900 lg:text-7xl">
              {profile.name}
            </h1>

            <h2 className="mb-2 text-3xl font-semibold text-blue-600">
              {profile.title}
            </h2>

            <p className="mb-6 text-lg text-slate-600">
              {profile.subtitle}
            </p>

            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-500">
              {profile.description}
            </p>

            {/* Hero Skills */}

            <div className="mb-8 flex flex-wrap gap-3">
              {heroSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50"
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
                <a href="#contact">
                  Contact Me
                </a>
              </Button>

            </div>

            {/* Social Links */}

            <div className="mt-8 flex gap-6">

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-500 transition hover:text-blue-600"
              >
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-500 transition hover:text-blue-600"
              >
                LinkedIn
              </a>

              <a
                href={profile.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-500 transition hover:text-blue-600"
              >
                LeetCode
              </a>

            </div>

          </div>

          {/* Right Section */}

          <div className="flex justify-center">

            <div className="flex h-96 w-96 flex-col items-center justify-center rounded-full border border-slate-200 bg-gradient-to-br from-slate-100 via-slate-200 to-blue-100 shadow-[0_25px_70px_rgba(37,99,235,0.15)] transition-all duration-300 hover:scale-105 hover:shadow-[0_30px_80px_rgba(37,99,235,0.2)]">

              <span className="select-none font-mono text-7xl font-bold tracking-tight text-slate-700">
                {"<AP/>"}
              </span>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Frontend Developer
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}