const Contact = () => {
  return (
    <section className="pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          Contact
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-black dark:text-white">
          Let&apos;s discuss your project
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          Tell me what you want to build. I will review your requirement and get back with next steps.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_360px] gap-6">
          <form
            action="https://formsubmit.co/guglothmahipal@gmail.com"
            method="POST"
            className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/50 space-y-4"
          >
            <input type="hidden" name="_subject" value="Contact Page Inquiry" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                required
                placeholder="Full Name"
                className="rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-orange-400"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-orange-400"
              />
            </div>

            <input
              name="phone"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-orange-400"
            />

            <textarea
              name="message"
              required
              placeholder="Project details"
              className="w-full min-h-32 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-orange-400"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-orange-500 text-white px-5 py-3 font-semibold hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>

          <aside className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-gray-900/50">
            <h2 className="text-xl font-semibold text-black dark:text-white">Contact Details</h2>
            <div className="mt-4 space-y-3 text-gray-600 dark:text-gray-300">
              <p><strong>Email:</strong> guglothmahipal@gmail.com</p>
              <p><strong>Location:</strong> India</p>
              <p><strong>Availability:</strong> Open for freelance work</p>
              <p><strong>Response Time:</strong> Usually within 24 hours</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
