export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">
          Arun Perumal
        </h1>

        <div className="hidden gap-6 md:flex">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}