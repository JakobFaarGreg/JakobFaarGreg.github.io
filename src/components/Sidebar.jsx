
import { NavLink } from 'react-router'

const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
]

export default function Sidebar() {
    return (
        <aside className="w-28 shrink-0 border-r border-gray-200 bg-gray-50 p-3 sm:w-40 sm:p-4">
            <nav className="flex flex-col gap-3">
                {links.map(({ to, label, end }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={end}
                        className={({ isActive }) =>
                            `text-sm text-gray-700 hover:text-black ${isActive
                                ? 'font-medium underline underline-offset-4'
                                : 'no-underline'
                            }`
                        }
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    )
}
