export default function Qualification() {
  return (
    <section
      id="qualification"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Education & Experience
          </h2>

          <p className="text-slate-500 mt-4">
            My academic journey and practical experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Education */}

          <div>
            <h3 className="text-2xl font-semibold mb-8">
              Education
            </h3>

            <div className="border-l-2 border-slate-200 pl-6 space-y-10">

              <div>
                <h4 className="font-semibold text-lg">
                  B.E Computer Science & Engineering
                </h4>

                <p className="text-emerald-600 text-sm">
                  2023 - 2027
                </p>

                <p className="text-slate-600 mt-2">
                  Meenakshi College of Engineering,
                  Chennai.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Higher Secondary Education
                </h4>

                <p className="text-emerald-600 text-sm">
                  2021 - 2023
                </p>

                <p className="text-slate-600 mt-2">
                  L.E.O.Matriculation Higher Secondary School,Chennai.
                </p>
              </div>

            </div>
          </div>

          {/* Experience */}

          <div>
            <h3 className="text-2xl font-semibold mb-8">
              Experience
            </h3>

            <div className="border-l-2 border-slate-200 pl-6 space-y-10">

              <div>
                <h4 className="font-semibold text-lg">
                  App Developer Intern
                </h4>

                <p className="text-emerald-600 text-sm">
                  Zapsters
                </p>

                <p className="text-slate-600 mt-2">
                  Worked on application development,
                  UI implementation and feature development.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  MERN Stack Projects
                </h4>

                <p className="text-emerald-600 text-sm">
                  Personal Projects
                </p>

                <p className="text-slate-600 mt-2">
                  Built full-stack applications using
                  React, Node.js, MongoDB and Express.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}