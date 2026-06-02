export const Project = () => {
  const PROJECTS = [
    {
      name: "E-Commerce Platform",
      desc: "Full-stack shopping platform with authentication, cart, and order flow.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      image: "/kingsman_homepage.png",
      live: "https://kingsmanclothing.vercel.app/",
      code: "https://github.com/kvcastillo/kingsmanclothing",
    },
    {
      name: "Job Application Tracker",
      desc: "Tool for tracking applications, interviews, and job pipeline progress.",
      tech: ["React", "Node.js", "Express", "Prisma"],
      image: "/jobtracker.png",
      live: "https://job-application-tracker-peach-rho.vercel.app/",
      code: "https://github.com/kvcastillo/job-application-tracker",
    },
  ];

  return (
    <section id="projects" className="py-28 border-t border-neutral-100">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-2xl font-semibold">Selected Work</h2>
        <p className="mt-2 text-neutral-500">
          Real-world full-stack applications I’ve built and deployed.
        </p>

        <div className="mt-12 space-y-16">
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              {/* LEFT: TEXT */}
              <div>
                <h3 className="text-xl font-medium text-neutral-900">
                  {p.name}
                </h3>

                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  {p.desc}
                </p>

                {/* tech */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-neutral-500 border border-neutral-100 px-2 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* links */}
                <div className="mt-6 flex gap-5 text-sm">
                  <a
                    href={p.live}
                    target="_blank"
                    className="text-neutral-900 hover:underline"
                  >
                    Live →
                  </a>

                  <a
                    href={p.code}
                    target="_blank"
                    className="text-neutral-500 hover:text-neutral-900"
                  >
                    Code →
                  </a>
                </div>
              </div>

              {/* RIGHT: IMAGE */}
              <div className="relative group">
                <div className="overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50">
                  <a href={p.live} target="_blank">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="
                          w-full h-full object-cover
                          transition-transform duration-500
                          group-hover:scale-[1.03]
                          opacity-90
                        "
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
