export const Contact = () => {
  return (
    <section id="contact" className="py-28 border-t border-neutral-100">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-2xl font-semibold">Let’s work together</h2>

        <p className="mt-4 text-neutral-600 max-w-xl">
          Open to full-time remote roles. If you're building something
          interesting, I’d love to contribute.
        </p>

        <div className="mt-8 space-y-2 text-sm text-neutral-600">
          <p>Quezon City, Philippines</p>
          <p>kenzovcastillo@gmail.com</p>
          <p>0977 061 4738</p>
        </div>

        <div className="mt-8 flex gap-6 text-sm">
          <a href="https://github.com/kenzocastillo">GitHub</a>
          <a href="https://www.linkedin.com/in/kenzo-castillo/">LinkedIn</a>
          <a href="mailto:kenzovcastillo@gmail.com">Email</a>
        </div>
      </div>
    </section>
  );
};
