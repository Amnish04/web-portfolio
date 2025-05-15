import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Layout from "./Layout";
import SafeRoughNotation from "./SafeRoughNotation";

const AboutMeContent = () => {
    const [showAnimations, setShowAnimations] = useState<boolean>(false);

    useEffect(() => {
        setShowAnimations(true);
    }, []);

    const purpleShade = "#c3b3ff";
    const orangeShade = "#ffd7b5";
    const yellowShade = "#f8ed62";

    return (
        <>
            <p>
                I am a young and passionate software developer, with a diverse skillset and a hunger
                for solving problems.
            </p>

            <p>
                I recently graduated from Seneca College with{" "}
                <SafeRoughNotation
                    type="highlight"
                    color={orangeShade}
                    show={showAnimations}
                    animate
                    animationDelay={200}
                >
                    High Honors
                </SafeRoughNotation>
                &nbsp;in a 3 years Computer Science program, where I learnt about{" "}
                <SafeRoughNotation
                    type="underline"
                    color={"blue"}
                    iterations={1}
                    show={showAnimations}
                    animate
                    animationDelay={600}
                >
                    Web Development,
                </SafeRoughNotation>
                &nbsp;
                <SafeRoughNotation
                    type="underline"
                    color={"blue"}
                    iterations={1}
                    show={showAnimations}
                    animate
                    animationDelay={1000}
                >
                    Cloud
                </SafeRoughNotation>{" "}
                <SafeRoughNotation
                    type="underline"
                    color={"blue"}
                    iterations={1}
                    show={showAnimations}
                    animate
                    animationDelay={1000}
                >
                    Computing
                </SafeRoughNotation>
                ,{" "}
                <SafeRoughNotation
                    type="underline"
                    color="blue"
                    iterations={1}
                    show={showAnimations}
                    animate
                    animationDelay={1400}
                >
                    Databases
                </SafeRoughNotation>{" "}
                and basic{" "}
                <SafeRoughNotation
                    type="underline"
                    iterations={1}
                    color="blue"
                    show={showAnimations}
                    animate
                    animationDelay={1800}
                >
                    IOS Development
                </SafeRoughNotation>{" "}
                by not only reading theory, but actually building meaningful projects.
            </p>

            <p>
                I've built several side projects in my development journey and have experience{" "}
                <SafeRoughNotation
                    type="highlight"
                    color={purpleShade}
                    show={showAnimations}
                    animate
                    animationDelay={2200}
                >
                    architecting
                </SafeRoughNotation>{" "}
                ,{" "}
                <SafeRoughNotation
                    type="highlight"
                    color={yellowShade}
                    show={showAnimations}
                    animate
                    animationDelay={2600}
                >
                    planning
                </SafeRoughNotation>{" "}
                and{" "}
                <SafeRoughNotation
                    type="highlight"
                    color={"pink"}
                    show={showAnimations}
                    animate
                    animationDelay={3000}
                >
                    leading
                </SafeRoughNotation>{" "}
                a team of developers to build a complex distributed system leveraging services
                offered by major cloud platforms like Google Cloud, Firebase, MongoDB Atlas, and an
                open source geocoding service.
            </p>

            <p>
                A few months ago, I started doing{" "}
                <SafeRoughNotation
                    type="highlight"
                    color={purpleShade}
                    show={showAnimations}
                    animate
                    animationDelay={3400}
                >
                    Open-Source
                </SafeRoughNotation>
                {"  "}, participated in Hacktoberfest 2023 and contributed to various projects on
                issues ranging from UI to Debugging to Devops.
            </p>

            <p>
                My best experience so far has been working on{" "}
                <SafeRoughNotation
                    type="circle"
                    padding={5}
                    iterations={1}
                    color={"blue"}
                    show={showAnimations}
                    animate
                    animationDelay={3800}
                >
                    <a
                        className="default-link hover:no-underline"
                        href="https://github.com/tarasglek/chatcraft.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ChatCraft
                    </a>
                </SafeRoughNotation>
                , an open-source developer oriented AI Chatbot, where I got to work with an
                incredible team and under the guidance of{" "}
                <a
                    className="default-link"
                    href="https://github.com/humphd"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    my professor
                </a>{" "}
                and{" "}
                <a
                    className="default-link"
                    href="https://github.com/tarasglek"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    his friend
                </a>
                , both having worked in Mozilla and decades of exceptional experience in the field
                of Software Development.
            </p>
        </>
    );
};

const Introduction = () => {
    return (
        <Layout id="about" className="grid lg:grid-rows-1 lg:grid-cols-5 py-8 gap-5 lg:gap-0">
            {/* Intro and Background */}
            <div className="lg:col-span-3 col-span-1 order-2 lg:order-none flex flex-col gap-3">
                <h2 className="font-headings font-semibold text-3xl">
                    Hey! this is Amnish, a Versatile Software Developer based in Toronto.
                </h2>

                <AboutMeContent />
            </div>

            <div className="lg:col-span-2 col-span-1 order-1 lg:order-none flex flex-col items-center justify-center gap-5 sm:gap-10">
                <img
                    className="w-80 rounded-md shadow-lg block "
                    src="./images/profile.jpeg"
                    alt="Amnish's Picture"
                />

                {/* TODO: Extract this into a reusable component */}
                <a
                    href="/docs/amnish-web-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Get my Resume"
                    className="p-4 border bg-dark text-light rounded-lg flex gap-2 items-center hover:bg-light hover:text-dark border-dark transition-colors duration-200"
                >
                    Resume <FaArrowUpRightFromSquare />
                </a>
            </div>
        </Layout>
    );
};

export default Introduction;
