import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <p className="text-lg text-slate-500 mb-3">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Arun Perumal
            </h1>

            <h2 className="text-2xl md:text-3xl text-slate-600 mb-6">
              Frontend Developer • React Developer • MERN Developer
            </h2>

            <p className="text-slate-500 text-lg leading-8 mb-8 max-w-2xl">
              Computer Science Engineering student passionate about
              building scalable web applications using React,
              Next.js, TypeScript, Supabase and PostgreSQL.
              Focused on creating modern, responsive and
              user-friendly digital experiences.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 mb-8">

              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium">
                React
              </span>

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium">
                Next.js
              </span>

              <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium">
                TypeScript
              </span>

              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium">
                Supabase
              </span>

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium">
                PostgreSQL
              </span>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <Button size="lg">
                Download Resume
              </Button>

              <Button
                variant="outline"
                size="lg"
              >
                View Projects
              </Button>

            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="h-96 w-96 rounded-full bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.12)] flex items-center justify-center text-slate-700 text-7xl font-bold">

              AP

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}