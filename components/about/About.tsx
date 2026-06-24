export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>

          <p className="text-slate-500 mt-4">
            Get to know me better
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-semibold mb-6">
              Who Am I?
            </h3>

            <p className="text-slate-600 leading-8 mb-6">
              I'm Arun Perumal, a passionate Computer Science and
              Engineering student at Meenakshi College of Engineering.
              I enjoy building modern web applications and solving
              real-world problems through technology.
            </p>

            <p className="text-slate-600 leading-8">
              My interests include Frontend Development, React,
              Next.js, TypeScript, MERN Stack Development,
              Supabase, Cloud Technologies and AI-powered
              applications.
            </p>

          </div>

          {/* Right Side */}

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-xl border p-6 shadow-sm">
              <h4 className="font-semibold mb-2">
                Name
              </h4>

              <p className="text-slate-600">
                Arun Perumal
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              <h4 className="font-semibold mb-2">
                Degree
              </h4>

              <p className="text-slate-600">
                B.E CSE
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              <h4 className="font-semibold mb-2">
                College
              </h4>

              <p className="text-slate-600">
                Meenakshi College of Engineering
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              <h4 className="font-semibold mb-2">
                Location
              </h4>

              <p className="text-slate-600">
                Chennai, Tamil Nadu
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              <h4 className="font-semibold mb-2">
                Focus
              </h4>

              <p className="text-slate-600">
                Full Stack Development
              </p>
            </div>

            <div className="rounded-xl border p-6 shadow-sm">
              <h4 className="font-semibold mb-2">
                Experience
              </h4>

              <p className="text-slate-600">
                Student Developer
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}