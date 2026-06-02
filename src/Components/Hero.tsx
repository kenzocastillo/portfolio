export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-5xl mx-auto px-8 w-full">
        {/* badge */}
        <div className="inline-flex items-center gap-2 text-xs text-neutral-500 border border-neutral-200 px-3 py-1 rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          Available for full-time roles
        </div>

        {/* name */}
        <h1 className="mt-8 text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900">
          Kenzo Castillo
        </h1>

        {/* role */}
        <p className="mt-4 text-xl text-neutral-500">
          Full Stack Developer — React · TypeScript · Node.js
        </p>

        {/* description */}
        <p className="mt-6 max-w-2xl text-neutral-600 leading-relaxed">
          I build full-stack web applications focused on performance, clean
          architecture, and real-world usability. Experienced in enterprise
          systems and modern web stacks.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex gap-4">
          <a className="px-5 py-3 bg-neutral-900 text-white text-sm rounded-md">
            View Work
          </a>
          <a className="px-5 py-3 border border-neutral-200 text-sm rounded-md">
            Contact
          </a>
        </div>

        {/* meta */}
        <div className="mt-12 grid grid-cols-3 max-w-md text-sm text-neutral-500">
          <div>
            <p className="text-neutral-900 font-medium">4+</p>
            <p>Years IT Exp</p>
          </div>
          <div>
            <p className="text-neutral-900 font-medium">2</p>
            <p>Full Stack Apps</p>
          </div>
          <div>
            <p className="text-neutral-900 font-medium">100%</p>
            <p>Self-Driven</p>
          </div>
        </div>
      </div>
    </section>
  );
};
