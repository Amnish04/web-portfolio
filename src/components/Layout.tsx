import { ReactNode } from "react";

type LayoutProps = {
    className?: string;
    id?: string;
    children: ReactNode;
};

export default function Layout({ className = "", id, children }: LayoutProps) {
    return (
        <article className={`relative width-screen-80 m-auto lg:px-16 ${className}`}>
            {children}

            {/* Anchor to compensate for fixed header at the top */}
            <span id={id ?? undefined} className="absolute top-[-200px]"></span>
        </article>
    );
}
