import {
    CheckCircle2,
    Clock3,
    PauseCircle,
    ArrowUpRight,
    Link,
} from "lucide-react";
import { Link as RouterLink } from "react-router";
import { StatusBadge } from "./StatusBadge";

const statusConfig = {
    completed: {
        label: "Completed",
        icon: CheckCircle2,
        className: "bg-emerald-500/10 text-emerald-600",
    },
    "in-progress": {
        label: "In progress",
        icon: Clock3,
        className: "bg-blue-500/10 text-blue-600",
    },
    "on-hold": {
        label: "On hold",
        icon: PauseCircle,
        className: "bg-amber-500/10 text-amber-600",
    },
};


export function ProjectCard({ project, index }) {
    const reversed = index % 2 === 1;

    return (
        <article
            className={`group grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16`}
        >
            {/* Project image */}
            <RouterLink
                to={project.href}
                aria-label={`View ${project.title} project`}
                className={`relative block overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900
          ${reversed ? "md:order-2" : "md:order-1"}`}
            >
                <div className="aspect-[4/3] overflow-hidden">
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                </div>
                <div
                    className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5"
                />
            </RouterLink>

            {/* Project information */}
            <div
                className={`flex flex-col items-start gap-5
          ${reversed ? "md:order-1" : "md:order-2"}`}
            >
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
                        {project.title}
                    </h2>

                    <p className="max-w-xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
                        {project.description}
                    </p>
                </div>

                {project.technologies?.length ? (
                    <ul className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <li
                                key={technology}
                                className="rounded-md border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"
                            >
                                {technology}
                            </li>
                        ))}
                    </ul>
                ) : null}

                <StatusBadge status={statusConfig[project.status]} />
                <RouterLink
                    to={project.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 transition-colors hover:text-neutral-500 dark:text-neutral-100 dark:hover:text-neutral-400"
                >
                    Explore project
                    <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                    />
                </RouterLink>
            </div>
        </article>
    );
}
