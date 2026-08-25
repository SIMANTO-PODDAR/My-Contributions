"use client";

import Link from "next/link";

const projects = [
  {
    name: "Fitora",
    link: "https://github.com/Developer-Moy/Fitora.git",
    description: "A fitness and workout management platform.",

    pages: [
      { name: "Register", link: "/register" },
      { name: "Meal Planning Assistant", link: "/fitora/meal-planning-assistant" },
      { name: "Meals", link: "/fitora/meals" },
      { name: "Theme Hub (Research)", link: "https://simanto-poddar-themehub.vercel.app" },
    ],

    sections: [
      { name: "Meal Chart", id: "/my-sections/fitora/meal-chart" },
      { name: "Hydration Tracker", id: "/my-sections/fitora/hydration-tracker" },
      { name: "Advertisement", id: "/my-sections/fitora/advertisement" },
      { name: "Coaches and Trainers", id: "/my-sections/fitora/Coaches-and-Trainers" },
    ],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Project Showcase
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          My Projects & Contributions
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          A collection of my projects, contributions, implementations,
          and important sections. Explore each project and jump directly
          to the page or section you are interested in.
        </p>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl"
            >
              {/* Project Header */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2 className="text-2xl font-semibold">
                      {project.name}
                    </h2>
                  </div>

                  <p className="text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>
                </div>

                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
                >
                  Visit Project
                  <span>↗</span>
                </Link>
              </div>

              {/* Pages */}
              <div className="mt-6 border-t border-slate-800 pt-5">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Pages
                </h3>

                <div className="flex flex-wrap gap-3">
                  {project.pages.map((page) => (
                    <Link
                      key={page.name}
                      href={page.link}
                      rel="noopener noreferrer"
                      className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-300 transition hover:bg-blue-500/10 hover:text-blue-400"
                    >
                      {page.name}
                      <span className="ml-2">↗</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sections */}
              <div className="mt-6 border-t border-slate-800 pt-5">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Sections
                </h3>

                <div className="flex flex-wrap gap-3">
                  {project.sections.map((section) => (
                    <Link
                      key={section.id}
                      href={`${section.id}`}
                      className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-300 transition hover:bg-blue-500/10 hover:text-blue-400"
                    >
                      {section.name}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}