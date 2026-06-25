import { education } from "@/data/education";
import { experience } from "@/data/experience";

export default function Qualification() {
  return (
    <section
      id="qualification"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Education & Experience
          </h2>

          <p className="mt-4 text-slate-500">
            My academic journey and professional experience.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2">

          {/* Education */}

          <div>

            <h3 className="mb-8 text-2xl font-semibold">
              Education
            </h3>

            <div className="space-y-10 border-l-2 border-emerald-500 pl-6">

              {education.map((item) => (
                <div key={item.degree} className="relative">

                  <div className="absolute -left-[34px] top-2 h-4 w-4 rounded-full bg-emerald-500"></div>

                  <h4 className="text-lg font-semibold">
                    {item.degree}
                  </h4>

                  <p className="text-sm font-medium text-emerald-600">
                    {item.duration}
                  </p>

                  <p className="mt-2 font-medium text-slate-700">
                    {item.institution}
                  </p>

                  <p className="mt-2 text-slate-600">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* Experience */}

          <div>

            <h3 className="mb-8 text-2xl font-semibold">
              Experience
            </h3>

            <div className="space-y-10 border-l-2 border-emerald-500 pl-6">

              {experience.map((item) => (
                <div key={item.role} className="relative">

                  <div className="absolute -left-[34px] top-2 h-4 w-4 rounded-full bg-emerald-500"></div>

                  <h4 className="text-lg font-semibold">
                    {item.role}
                  </h4>

                  <p className="text-sm font-medium text-emerald-600">
                    {item.duration}
                  </p>

                  <p className="mt-2 font-medium text-slate-700">
                    {item.company}
                  </p>

                  <p className="mt-2 text-slate-600">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}