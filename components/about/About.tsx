import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            About Me
          </h2>

          <p className="mt-4 text-slate-500">
            Get to know me better
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">

          {/* Left */}

          <div className="text-center lg:text-left">

            <h3 className="mb-6 text-2xl font-semibold md:text-3xl">
              Who Am I?
            </h3>

            <p className="mb-6 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              {profile.description}
            </p>

            <p className="text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              I enjoy building scalable web applications,
              exploring modern technologies and continuously
              improving my development skills.
            </p>

          </div>

          {/* Right */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">

            <InfoCard title="Name" value={profile.name} />

            <InfoCard title="Degree" value={profile.degree} />

            <InfoCard title="College" value={profile.college} />

            <InfoCard title="Location" value={profile.location} />

            <InfoCard
              title="Graduation"
              value={profile.graduation}
            />

            <InfoCard
              title="Role"
              value={profile.title}
            />

          </div>

        </div>

      </div>
    </section>
  );
}

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
      <h4 className="mb-2 font-semibold">
        {title}
      </h4>

      <p className="text-slate-600">
        {value}
      </p>
    </div>
  );
}