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
      className="flex min-h-screen items-center bg-gradient-to-br from-white via-slate-50 to-blue-50 py-20 lg:py-0"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Right Section (Mobile First) */}
          <div className="order-1 mb-10 flex justify-center lg:order-2 lg:mb-0">

            <div className="flex h-64 w-64 flex-col items-center justify-center rounded-full border border-slate-200 bg-gradient-to-br from-slate-100 via-slate-200 to-blue-100 shadow-[0_25px_70px_rgba(37,99,235,0.15)] transition-all duration-300 hover:scale-105 hover:shadow-[0_30px_80px_rgba(37,99,235,0.2)] sm:h-72 sm:w-72 lg:h-96 lg:w-96">

              <span className="select-none font-mono text-5xl font-bold tracking-tight text-slate-700 sm:text-6xl lg:text-7xl">
                {"<AP/>"}
              </span>

              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 sm:text-xs">
                Frontend Developer
              </p>

            </div>

          </div>

          {/* Left Section */}

          <div className="order-2 text-center lg:order-1 lg:text-left">

            <p className="mb-3 text-base font-medium text-blue-600 sm:text-lg">
              Hello, I'm
            </p>

            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
              {profile.name}
            </h1>

            <h2 className="mb-2 text-2xl font-semibold text-blue-600 sm:text-3xl">
              {profile.title}
            </h2>

            <p className="mb-6 text-base text-slate-600 sm:text-lg">
              {profile.subtitle}
            </p>

            <p className="mx-auto mb-8 max-w-xl text-base leading-7 text-slate-500 lg:mx-0 lg:text-lg lg:leading-8">
              {profile.description}
            </p>

            {/* Skills */}

            <div className="mb-8 flex flex-wrap justify-center gap-3 lg:justify-start">

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

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

              <Button asChild size="lg">
                <a href={profile.resume} download>
                  Download Resume
                </a>
              </Button>

              <Button asChild variant="outline" size="lg">
                <a href="#contact">
                  Contact Me
                </a>
              </Button>

            </div>

            {/* Social Links */}

            <div className="mt-8 flex justify-center gap-6 lg:justify-start">

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

        </div>
      </div>
    </section>
  );
}