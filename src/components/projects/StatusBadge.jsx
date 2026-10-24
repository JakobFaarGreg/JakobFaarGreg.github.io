export function StatusBadge({ status }) {
    const StatusIcon = status.icon;

    return (
        <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${status.className}`}
        >
            <StatusIcon size={14} aria-hidden="true" />
            {status.label}
        </span>
    )
}