/* eslint-disable prettier/prettier */
import Link from "next/link";
import ProjectCard from "@/components/projects/project-card";
import { ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { ArrowTopRight } from "@/components/icons";

interface ProjectShowcaseProps {
  projects: ProjectShowcaseListItem[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  return (
    <section className="overflow-hidden px-6 py-32 sm:px-14 md:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold text-accent sm:text-3xl">
          My projects
        </h2>

        {/* Desktop & tablet: show cards grid */}
        <div className="hidden grid gap-6 py-14 sm:gap-8 sm:py-20 md:gap-10 lg:grid lg:grid-cols-3">
          {projects.map((card, idx) => (
            <ProjectCard
              key={idx}
              name={card.title}
              description={card.tags.join(", ")}
              sourceCodeHref={card.href}
              liveWebsiteHref={card.href}
            />
          ))}
        </div>

        {/* Mobile: keep a compact list for quick scanning */}
        <div className="flex flex-col gap-4 py-6 lg:hidden">
            {projects.map((proj, index) => (
              <Link key={proj.title} href={proj.href} className="flex flex-col gap-1">
                <div className="flex gap-2">
                  <span className="text-3xl font-semibold text-accent transition-colors duration-300 sm:text-4xl md:text-5xl">
                    {index + 1}.
                  </span>
                  <span className="-underline-offset-1 text-3xl font-semibold text-white underline transition-colors duration-300 sm:text-4xl md:text-5xl">
                    {proj.title}
                  </span>
                </div>
                <p className="flex max-w-xl flex-wrap gap-2 text-base font-semibold text-accent-foreground sm:text-lg">
                  {proj.tags.join(", ")}
                </p>
              </Link>
            ))}
        </div>

        <Link href="/projects" className="group relative flex max-w-max items-center gap-4 text-base font-semibold sm:text-lg md:text-xl">
          <div className="relative max-w-max">
            <span className="text-accent">See more projects</span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full"></span>
          </div>
          <div className="h-8 w-8">
            <ArrowTopRight className="rotate-45 text-accent transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.1]" />
          </div>
        </Link>
      </div>
    </section>
  );
}
