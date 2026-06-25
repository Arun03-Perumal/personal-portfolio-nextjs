interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}