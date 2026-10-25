
import { useState } from 'react'
import { NavLink } from 'react-router'
import SidebarButton from './SidebarButton'

const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
]

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <aside
            className={`relative shrink-0 border-r border-gray-200 bg-gray-50 p-3 transition-[width] duration-200 ease-in-out sm:p-4 ${isExpanded ? 'w-40' : 'w-0'
                }`}
        >
            <SidebarButton
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
            />

            <nav className="flex flex-col gap-3">
                {links.map(({ to, label, end }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={end}
                        title={!isExpanded ? label : undefined}
                        className={({ isActive }) =>
                            `overflow-hidden whitespace-nowrap text-sm text-gray-700 hover:text-black ${isActive
                                ? 'font-medium underline underline-offset-4'
                                : 'no-underline'
                            }`
                        }
                    >
                        {isExpanded ? label : label.charAt(0)}
                    </NavLink>
                ))}
            </nav>
        </aside>
    )
}
