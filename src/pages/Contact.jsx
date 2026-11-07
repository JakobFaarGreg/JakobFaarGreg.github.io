import { Mail, Clock, MapPin } from "lucide-react";
import LinkedinIcon from "../components/contact/LinkedinIcon";

import ContactCard from "../components/contact/ContactCard";
import BusinessHours from "../components/contact/BusinessHours";
import { contactInfo } from "../data/contactInfo";

export default function Contact() {
    return (
        <div className="mx-auto max-w-4xl">

            <header>
                <h1 className="text-5xl font-bold tracking-[-0.06em] sm:text-7xl">
                    Contact
                </h1>

                <p className="mt-6 text-base leading-8 text-zinc-600">
                    Have a project in mind or want to connect?
                    Feel free to reach out. I'd love to hear from you.
                </p>
            </header>

            {/* Contact cards */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">

                <ContactCard
                    icon={<LinkedinIcon size={22} />}
                    label="LINKEDIN"
                    title="Let's connect"
                    description="Find me on LinkedIn"
                    href={contactInfo.linkedin}
                    ariaLabel="Connect with me on LinkedIn (opens in a new tab)"
                />

                <ContactCard
                    icon={<Mail size={22} />}
                    label="EMAIL"
                    title="Send a message"
                    description={contactInfo.email}
                    href={`mailto:${contactInfo.email}`}
                    ariaLabel={`Send an email to ${contactInfo.email}`}
                />

                <ContactCard
                    icon={<MapPin size={22} />}
                    label="LOCATION"
                    title={contactInfo.country}
                    description="Based here, working globally"
                />

                <ContactCard
                    icon={<Clock size={22} />}
                    label="BUSINESS HOURS"
                    title="When I'm available"
                    className="sm:col-span-2"
                >
                    <BusinessHours
                        hours={contactInfo.businessHours}
                    />
                </ContactCard>

            </div>

            {/* Footer */}
            <footer className="mt-8 flex items-center justify-between gap-4 border-t border-zinc-200 pt-6 text-sm">
                <span className="text-zinc-500">
                    Have a great day.
                </span>

                <a
                    className="font-medium text-zinc-800 transition-colors hover:text-emerald-600 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    href={`mailto:${contactInfo.email}`}
                >
                    Say hello ↗
                </a>
            </footer>

        </div>
    );
}
