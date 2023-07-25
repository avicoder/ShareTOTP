import clsx from "clsx";

export default function Card({ children, className, title = '', description = '' }) {
    return (
        <div className={clsx('rounded-lg p-6 shadow bg-white mb-6', className)}>
            {title && (
                <h2 className="text-lg font-medium text-gray-900 max-w-xl">{title}</h2>
            )}
            {description && (
                <p className="mt-1 text-sm text-gray-600 max-w-xl">{description}</p>
            )}
            {children}
        </div>
    );
};
