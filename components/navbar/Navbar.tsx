import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo / Name */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight transition hover:text-slate-700"
        >
          {profile.name}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-black"
            >
              {item.title}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}