import { education } from "@/data/education";
import { experience } from "@/data/experience";

export default function Qualification() {
  return (
    <section
      id="qualification"
      className="bg-slate-50 py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">

        {/* Heading */}

        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Education & Experience
          </h2>

          <p className="mt-4 text-slate-500">
            My academic journey and professional experience.
          </p>
        </div>

        {/* Timeline */}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

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

                  <p className="mt-2 leading-7 text-slate-600">
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

                  <p className="mt-2 leading-7 text-slate-600">
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