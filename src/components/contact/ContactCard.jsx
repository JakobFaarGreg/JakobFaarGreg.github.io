import { ArrowUpRight } from "lucide-react";

const cardClass =
    "group flex min-w-0 items-start gap-4 rounded-2xl border border-zinc-200 bg-[#FEF9EC] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-sm";

const iconClass =
    "flex size-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700";

const labelClass =
    "text-[11px] font-bold tracking-[0.14em] text-zinc-500";

const headingClass =
    "mt-3 text-lg font-semibold tracking-tight text-zinc-900";

const descriptionClass =
    "mt-1.5 break-words text-sm leading-relaxed text-zinc-500";

export default function ContactCard({
    icon,
    label,
    title,
    description,
    href,
    ariaLabel,
    className = "",
    children,
}) {
    const Tag = href ? "a" : "div";

    return (
        <Tag
            className={`${cardClass} ${href ? "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2" : ""} ${className}`}
            {...(href && {
                href,
                "aria-label": ariaLabel,
            })}
        >
            <div className={iconClass}>
                {icon}
            </div>

            <div className="min-w-0 flex-1">
                <span className={labelClass}>{label}</span>

                <h2 className={headingClass}>{title}</h2>

                {description && (
                    <p className={descriptionClass}>
                        {description}
                    </p>
                )}

                {children}
            </div>

            {href && (
                <ArrowUpRight
                    size={20}
                    className="shrink-0 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
            )}
        </Tag>
    );
}
