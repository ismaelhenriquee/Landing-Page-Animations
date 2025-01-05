import { twMerge } from 'tailwind-merge';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

function Container({ children, className }: ContainerProps) {
    const defaultClassName = 'w-full mx-auto px-3 max-w-grid';
    const newClassName = twMerge(defaultClassName, className);
    return <div className={newClassName}>{children}</div>;
}
export { Container };
