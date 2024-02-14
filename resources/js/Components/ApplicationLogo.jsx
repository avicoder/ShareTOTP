import { usePage } from "@inertiajs/react";

export default function ApplicationLogo(props) {
    const { settings } = usePage().props

    if (settings.logo) {
        return (
            <img src={settings.logo} {...props} />
        )
    }

    return (
        <svg {...props} width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M143.181 125.834L24 465.893C39.5184 465.893 80.7053 460.836 109.303 441.812C142.23 419.906 158.694 399.906 163.665 387.847L240.947 168.573C242.531 164.118 246.881 154.637 258.638 154.637C272.046 154.637 276.227 163.898 278.191 168.573L357.335 387.847C363.643 402.773 379.061 424.005 413.201 444.523C442.056 461.866 480.551 466.822 497 465.893L378.75 125.834C370.991 98.8892 337.037 45 263.293 45C189.55 45 152.492 98.8892 143.181 125.834Z" fill="url(#paint0_linear_12_21)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M24 465.893L143.181 125.834C152.492 98.8892 189.55 45 263.293 45C337.037 45 370.991 98.8892 378.75 125.834L395.367 173.621C358.762 130.684 317.691 109.207 284.054 120.885C265.281 127.403 251.116 143.452 241.916 166.157C241.513 167.049 241.196 167.873 240.947 168.573L240.692 169.297C240.05 171.006 239.436 172.751 238.848 174.529L163.665 387.847C158.694 399.906 142.23 419.906 109.303 441.812C80.7053 460.836 39.5184 465.893 24 465.893ZM484.575 465.681C489.444 466.028 493.673 466.081 497 465.893L487.198 437.706C486.83 447.487 485.952 456.841 484.575 465.681Z" fill="url(#paint1_linear_12_21)" />
            <defs>
                <linearGradient id="paint0_linear_12_21" x1="260.5" y1="45" x2="260.5" y2="466" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EE2677" />
                    <stop offset="1" stopColor="#E86252" />
                </linearGradient>
                <linearGradient id="paint1_linear_12_21" x1="260.5" y1="45" x2="260.5" y2="466" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E87EA1" />
                    <stop offset="1" stopColor="#EE2677" />
                </linearGradient>
            </defs>
        </svg>

    );
}
