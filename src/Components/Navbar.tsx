export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-neutral-100 z-50">
      <div className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between">
        <span className="font-medium text-neutral-900">Kenzo Castillo</span>

        <div className="hidden md:flex gap-8 text-sm text-neutral-500">
          <a href="#about">About</a>
          <a href="#projects">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="#contact"
          className="text-sm px-4 py-2 bg-neutral-900 text-white rounded-md"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};
