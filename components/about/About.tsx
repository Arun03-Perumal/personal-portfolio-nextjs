import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            About Me
          </h2>

          <p className="mt-4 text-slate-500">
            Get to know me better
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">

          <div>

            <h3 className="mb-6 text-3xl font-semibold">
              Who Am I?
            </h3>

            <p className="mb-6 leading-8 text-slate-600">
              {profile.description}
            </p>

            <p className="leading-8 text-slate-600">
              I enjoy building scalable web applications,
              exploring modern technologies and continuously
              improving my development skills.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

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