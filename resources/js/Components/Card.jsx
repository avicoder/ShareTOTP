export default function Card({ children, title = '', description = '' }) {
    return (
        <div className="rounded-lg p-6 shadow bg-white mb-6">
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
