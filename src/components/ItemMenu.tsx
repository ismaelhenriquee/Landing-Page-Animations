import clsx from 'clsx';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface ItemMenuProps {
    children: React.ReactNode;
    href: string;
    active: boolean;
    className?: string;
    onClick?: () => void;
}
function ItemMenu({
    active,
    children,
    href,
    className,
    onClick
}: ItemMenuProps) {
    const defaultClassName =
        'text-center text-opacity-40 text-5xl px-3 py-1 font-medium text-size-ls text-sm rounded-full text-white hover:text-opacity-100 transition-all duration-300';
    const newClassName = twMerge(
        clsx(defaultClassName, {
            'bg-secondary-green text-opacity-100 ': active
        }),
        className
    );
    return (
        <Link
            onClick={onClick}
            className={newClassName}
            href={href}
        >
            {children}
        </Link>
    );
}
export { ItemMenu };
