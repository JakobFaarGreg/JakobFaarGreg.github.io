import { Mail, Clock, MapPin, ArrowUpRight } from "lucide-react";

const contactInfo = {
    linkedin: "https://linkedin.com/in/jakob-faarb%C3%A6k-gregersen",
    email: "lilleper.jfg@gmail.com",
    country: "Denmark",
    businessHours: [
        { day: "Monday - Friday", hours: "08:00 - 16:00" },
        { day: "Saturday - Sunday", hours: "Closed" },
    ],
};

const LinkedinIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
        {...props}
    >
        <path d="M7.5 5A2.52 2.52 0 0 0 5 7.5v17C5 25.867 6.133 27 7.5 27h17c1.367 0 2.5-1.133 2.5-2.5v-17C27 6.133 25.867 5 24.5 5zm0 2h17c.285 0 .5.215.5.5v17a.49.49 0 0 1-.5.5h-17a.49.49 0 0 1-.5-.5v-17c0-.285.215-.5.5-.5m2.938 1.719a1.719 1.719 0 1 0 0 3.437a1.719 1.719 0 0 0 0-3.437m9.03 4.562c-1.433 0-2.386.785-2.78 1.531h-.063V13.5h-2.813V23h2.938v-4.688c0-1.238.246-2.437 1.781-2.437c1.512 0 1.532 1.398 1.532 2.5V23H23v-5.219c0-2.554-.543-4.5-3.531-4.5zM9 13.5V23h2.969v-9.5z" />
    </svg>
);

const cardClass =
    "group flex min-w-0 items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700";

const iconClass =
    "flex size-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200";

const labelClass =
    "text-[11px] font-bold tracking-[0.14em] text-zinc-500 dark:text-zinc-400";

const headingClass =
    "mt-3 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100";

const descriptionClass =
    "mt-1.5 break-words text-sm leading-relaxed text-zinc-500 dark:text-zinc-400";

export default function Contact() {
    return (
        <main className="min-h-screen px-5 pb-12 text-zinc-900 dark:text-zinc-100 sm:px-8">
            <section className="mx-auto max-w-4xl">
                <header>
                    <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">
                        Contact
                    </h1>

                    <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">
                        Have a project in mind or want to connect?
                        Feel free to reach out. I'd love to hear from you.
                    </p>
                </header>

                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* LinkedIn */}
                    <a
                        className={`${cardClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950`}
                        href={contactInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Connect with me on LinkedIn (opens in a new tab)"
                    >
                        <div className={iconClass}>
                            <LinkedinIcon />
                        </div>

                        <div className="min-w-0 flex-1">
                            <span className={labelClass}>LINKEDIN</span>
                            <h2 className={headingClass}>Let's connect</h2>
                            <p className={descriptionClass}>
                                Find me on LinkedIn
                            </p>
                        </div>

                        <ArrowUpRight
                            size={20}
                            className="shrink-0 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </a>

                    {/* Email */}
                    <a
                        className={`${cardClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950`}
                        href={`mailto:${contactInfo.email}`}
                        aria-label={`Send an email to ${contactInfo.email}`}
                    >
                        <div className={iconClass}>
                            <Mail size={22} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <span className={labelClass}>EMAIL</span>
                            <h2 className={headingClass}>Send a message</h2>
                            <p className={descriptionClass}>
                                {contactInfo.email}
                            </p>
                        </div>

                        <ArrowUpRight
                            size={20}
                            className="shrink-0 text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </a>

                    {/* Location */}
                    <div className={cardClass}>
                        <div className={iconClass}>
                            <MapPin size={22} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <span className={labelClass}>LOCATION</span>
                            <h2 className={headingClass}>
                                {contactInfo.country}
                            </h2>
                            <p className={descriptionClass}>
                                Based here, working globally
                            </p>
                        </div>
                    </div>

                    {/* Business hours */}
                    <div className={`${cardClass} sm:col-span-2`}>
                        <div className={iconClass}>
                            <Clock size={22} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <span className={labelClass}>BUSINESS HOURS</span>
                            <h2 className={headingClass}>
                                When I'm available
                            </h2>

                            <div className="mt-4 divide-y divide-zinc-100 dark:divide-zinc-800">
                                {contactInfo.businessHours.map((item) => (
                                    <div
                                        className="flex items-center justify-between gap-4 py-3 text-sm"
                                        key={item.day}
                                    >
                                        <span className="text-zinc-600 dark:text-zinc-300">
                                            {item.day}
                                        </span>
                                        <span className="shrink-0 text-right text-zinc-900 dark:text-zinc-100">
                                            {item.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                                All times in local time (Denmark).
                            </p>
                        </div>
                    </div>
                </div>

                <footer className="mt-8 flex items-center justify-between gap-4 border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800">
                    <span className="text-zinc-500 dark:text-zinc-400">
                        Have a great day.
                    </span>

                    <a
                        className="font-medium text-zinc-800 transition-colors hover:text-emerald-600 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-zinc-200 dark:hover:text-emerald-400"
                        href={`mailto:${contactInfo.email}`}
                    >
                        Say hello ↗
                    </a>
                </footer>
            </section>
        </main>
    );
}
