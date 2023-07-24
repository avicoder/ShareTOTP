import clsx from "clsx"

export function Table({ children, head = null }) {
    return (
        <div className="overflow-y-hidden overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
                {!!head && (
                    <thead>
                        {head}
                    </thead>
                )}
                <tbody className="bg-white">
                    {children}
                </tbody>
            </table>
        </div>
    )
}

export function HeadCell({ children, compact = false, className }) {
    return (
        <th
            scope="col"
            className={clsx("py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3", className, compact ? 'w-0': '')}
        >
            {children}
        </th>
    )
}

export function Row({ children }) {
    return (
        <tr className="even:bg-gray-50">
            {children}
        </tr>
    )
}

export function Cell({ children }) {
    return (
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">{children}</td>
    )
}
