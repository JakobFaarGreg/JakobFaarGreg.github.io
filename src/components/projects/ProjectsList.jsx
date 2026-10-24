import { ProjectCard } from "./ProjectCard";

export function ProjectsList({ projects }) {
    return (
        <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">

            <div className="space-y-16 sm:space-y-24 lg:space-y-32">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.href}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}
