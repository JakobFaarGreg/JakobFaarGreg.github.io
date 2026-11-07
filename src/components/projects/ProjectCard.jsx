import {
    CheckCircle2,
    Clock3,
    PauseCircle,
    ArrowUpRight,
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
        <article className="group relative isolate grid grid-cols-1 grid-rows-[auto_auto] items-center gap-8 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-6 lg:gap-x-16">

            {/* Background ribbon - behind image and information */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-[20%] -z-10 h-32 w-full rounded-xl bg-[#FEF9EC] md:top-[20%] md:h-auto md:aspect-[4/1]"
            />

            {/* Project image */}
            <RouterLink
                to={project.href}
                aria-label={`View ${project.title} project`}
                className={`relative z-10 row-start-1 block overflow-hidden rounded-2xl bg-[#FEF9EC] ${reversed
                    ? "md:col-start-2"
                    : "md:col-start-1"
                    }`}
            >
                <div className="aspect-[4/3] overflow-hidden">
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
            </RouterLink>

            {/* Project information */}
            <div
                className={`relative z-10 row-start-2 flex flex-col items-center gap-5 p-8 md:p-10 lg:p-12 ${reversed
                    ? "md:col-start-1 md:row-start-1 md:pl-12 md:pr-16"
                    : "md:col-start-2 md:row-start-1 md:pl-16 md:pr-12"
                    }`}
            >
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
                        {project.title}
                    </h2>

                    <p className="max-w-xl text-base leading-7 text-neutral-600">
                        {project.description}
                    </p>
                </div>

                {/* Technologies */}
                {project.technologies?.length ? (
                    <ul className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <li
                                key={technology}
                                className="rounded-md border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600"
                            >
                                {technology}
                            </li>
                        ))}
                    </ul>
                ) : null}

                <div className="flex items-center justify-center gap-6">

                    {/* Project status */}
                    <StatusBadge status={statusConfig[project.status]} />

                    {/* Project link */}
                    <RouterLink
                        to={project.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-600"
                    >
                        Explore project

                        <ArrowUpRight
                            size={16}
                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                        />
                    </RouterLink>
                </div>
            </div>
        </article>
    );
}
