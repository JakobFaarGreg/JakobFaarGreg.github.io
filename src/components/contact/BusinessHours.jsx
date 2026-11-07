export default function BusinessHours({ hours }) {
    return (
        <>
            <div className="mt-4 divide-y divide-zinc-100">
                {hours.map((item) => (
                    <div
                        key={item.day}
                        className="flex items-center justify-between gap-4 py-3 text-sm"
                    >
                        <span className="text-zinc-600">
                            {item.day}
                        </span>

                        <span className="shrink-0 text-right text-zinc-900">
                            {item.hours}
                        </span>
                    </div>
                ))}
            </div>

            <p className="mt-3 text-xs text-zinc-500">
                All times in local time (Denmark).
            </p>
        </>
    );
}
