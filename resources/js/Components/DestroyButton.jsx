import { Link } from "@inertiajs/react";
import { clsx } from "clsx";

export default function DestroyButton({ href, children = 'Delete Record', className = '', disabled = false, ...props }) {
    return (
        <Link
            {...props}
            disabled={disabled}
            className={clsx('inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150', className, disabled ? 'opacity-25' : '')}
            href={href}
            method="delete"
            as="button"
            type="button"
        >
            {children}
        </Link>
    );
}
