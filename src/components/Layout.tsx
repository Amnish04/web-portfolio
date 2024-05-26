import { ReactNode } from "react";

type LayoutProps = {
    className: string;
    id?: string;
    children: ReactNode;
};

export default function Layout({ className, id, children }: LayoutProps) {
    return (
        <article className={`width-screen-80 m-auto lg:px-16 ${className}`} id={id ?? undefined}>
            {children}
        </article>
    );
}
