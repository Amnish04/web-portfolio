import { useCallback, useState } from "react";
import { LuMenu } from "react-icons/lu";
import useDesktopBreakpoint from "../hooks/use-desktop-breakpoint";
import AmnishLogo from "./AmnishLogo";
import Modal from "./Modal";
import { motion } from "framer-motion";

type NavbarLinkProps = {
    label: string;
    href: string;
    className?: string;
    variant?: "dark" | "light";
};

const NavBarLink = ({ label, href, className = "", variant = "dark" }: NavbarLinkProps) => {
    return (
        <a className={`relative group text-${variant} ${className}`} href={href}>
            {label}
            <span
                className={`h-[1px] inline-block bg-${variant} absolute left-0 -bottom-0.5 w-0 group-hover:w-full transition-[width] ease duration-300`}
            ></span>
        </a>
    );
};

type SocialMediaLinkProps = {
    label: string;
    href: string;
    icon?: JSX.Element;
    imageUrl?: string;
    className?: string;
};

const SocialMediaLink = ({ label, imageUrl, href, icon, className = "" }: SocialMediaLinkProps) => {
    return (
        <a
            className={`flex flex-col justify-center items-center ${className}`}
            href={href}
            target="_blank"
        >
            {icon ? icon : <img className="w-8 rounded-sm" src={imageUrl} alt="Github Link" />}
            <p className="text-sm">{label}</p>
        </a>
    );
};

const Hamburger = ({ className = "" }: { className?: string }) => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const handleToggleHamburger = useCallback(() => {
        setIsModalVisible(!isModalVisible);
    }, [isModalVisible]);

    const handleCloseModal = useCallback(() => {
        setIsModalVisible(false);
    }, []);

    return (
        <>
            <button onClick={handleToggleHamburger} className={`${className}`}>
                <LuMenu size={30} />
            </button>

            <Modal
                isVisible={isModalVisible}
                onClose={handleCloseModal}
                closeOnClickOutside={false}
                containerClass="modal h-64 bg-dark rounded-md text-white bg-opacity-80"
            >
                <div className="py-3">
                    <ul className="flex flex-col justify-center items-center gap-1">
                        <li onClick={handleCloseModal}>
                            <NavBarLink variant="light" label="About" href="#" />
                        </li>
                        <li onClick={handleCloseModal}>
                            <NavBarLink variant="light" label="Experience" href="#experience" />
                        </li>
                        <li onClick={handleCloseModal}>
                            <NavBarLink variant="light" label="Skills" href="#skills" />
                        </li>
                        <li onClick={handleCloseModal}>
                            <NavBarLink variant="light" label="Projects" href="#projects" />
                        </li>
                    </ul>
                </div>

                <motion.hr
                    whileInView={{ scaleX: [0, 1.25, 1] }}
                    transition={{ duration: 0.5 }}
                    className="bg-light w-2/5 m-auto h-[1px] mt-2"
                />

                <nav className="flex flex-wrap justify-center py-4">
                    <SocialMediaLink
                        className="flex-1 min-w-[62px]"
                        label="Github"
                        href="https://github.com/Amnish04"
                        imageUrl="/images/github.png"
                    />
                    <SocialMediaLink
                        className="flex-1 min-w-[62px]"
                        label="LinkedIn"
                        href="https://www.linkedin.com/in/amnish-singh-arora/"
                        imageUrl="/images/linkedin.png"
                    />
                    <SocialMediaLink
                        className="flex-1 min-w-[62px]"
                        label="Blog"
                        href="https://dev.to/amnish04"
                        imageUrl="/images/dev-black.png"
                    />
                    <SocialMediaLink
                        className="flex-1 min-w-[62px]"
                        label="Gmail"
                        href="mailto:amnishsingh04@gmail.com"
                        imageUrl="/images/gmail.png"
                    />
                </nav>
            </Modal>
        </>
    );
};

export default function Header() {
    const isDesktop = useDesktopBreakpoint();

    return (
        <header className="fixed top-0 w-screen bg-inherit z-[1000]">
            <div className="flex justify-between items-center width-screen-80 m-auto py-3 font-medium sm:px-16 z-[1000]">
                {!isDesktop && <Hamburger className="justify-self-start" />}

                {isDesktop && (
                    <nav>
                        <ul className="flex gap-6">
                            <li>
                                <NavBarLink label="About" href="#" />
                            </li>
                            <li>
                                <NavBarLink label="Experience" href="#experience" />
                            </li>
                            <li>
                                <NavBarLink label="Skills" href="#skills" />
                            </li>
                            <li>
                                <NavBarLink label="Projects" href="#projects" />
                            </li>
                        </ul>
                    </nav>
                )}

                {/* Logo */}
                <AmnishLogo />

                {/* Social Media */}
                {isDesktop && (
                    <nav className="flex gap-5">
                        <SocialMediaLink
                            className="flex-1 min-w-[62px]"
                            label="Github"
                            href="https://github.com/Amnish04"
                            imageUrl="/images/github.png"
                        />
                        <SocialMediaLink
                            className="flex-1 min-w-[62px]"
                            label="LinkedIn"
                            href="https://www.linkedin.com/in/amnish-singh-arora/"
                            imageUrl="/images/linkedin.png"
                        />
                        <SocialMediaLink
                            className="flex-1 min-w-[62px]"
                            label="Blog"
                            href="https://dev.to/amnish04"
                            imageUrl="/images/dev-black.png"
                        />
                        <SocialMediaLink
                            className="flex-1 min-w-[62px]"
                            label="Gmail"
                            href="mailto:amnishsingh04@gmail.com"
                            imageUrl="/images/gmail.png"
                        />
                    </nav>
                )}

                {/* Dummy Element */}
                {!isDesktop && <div></div>}
            </div>
        </header>
    );
}
