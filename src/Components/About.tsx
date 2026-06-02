export const About = () => {
  return (
    <section id="about" className="py-28 border-t border-neutral-100">
      <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900">About</h2>

          <p className="mt-6 text-neutral-600 leading-relaxed">
            I started in enterprise IT, working on large-scale systems, SQL
            logic, and internal automation tools. Recently, I transitioned into
            full-stack development focusing on modern React ecosystems.
          </p>

          <p className="mt-4 text-neutral-600 leading-relaxed">
            I enjoy building systems that are simple on the surface but
            structured properly under the hood — APIs, database design, and
            scalable UI.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="p-4 border border-neutral-100 rounded-lg">
            <p className="text-neutral-900 font-medium">Frontend</p>
            <p className="text-neutral-500 mt-2">
              React, Next.js, TypeScript, Tailwind
            </p>
          </div>

          <div className="p-4 border border-neutral-100 rounded-lg">
            <p className="text-neutral-900 font-medium">Backend</p>
            <p className="text-neutral-500 mt-2">
              Node.js, Express, Prisma, REST APIs
            </p>
          </div>

          <div className="p-4 border border-neutral-100 rounded-lg">
            <p className="text-neutral-900 font-medium">Database</p>
            <p className="text-neutral-500 mt-2">PostgreSQL, Supabase</p>
          </div>

          <div className="p-4 border border-neutral-100 rounded-lg">
            <p className="text-neutral-900 font-medium">Tools</p>
            <p className="text-neutral-500 mt-2">Git, Vercel, Postman</p>
          </div>
        </div>
      </div>
    </section>
  );
};
