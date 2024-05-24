import { useEffect, useState } from "react";
import { RoughNotation } from "react-rough-notation";

const Introduction = () => {
    const [showAnimations, setShowAnimations] = useState<boolean>(false);

    useEffect(() => {
        setShowAnimations(true);
    }, []);

    const purpleShade = "#c3b3ff";
    const orangeShade = "#ffd7b5";
    const yellowShade = "#f8ed62";

    return (
        <article
            id="about"
            className="width-screen-80 m-auto lg:px-16 grid lg:grid-rows-1 lg:grid-cols-5 py-8 gap-5 lg:gap-0"
        >
            {/* Intro and Background */}
            <div className="lg:col-span-3 col-span-1 order-2 lg:order-none flex flex-col gap-3">
                <h2 className="font-headings font-semibold text-3xl">
                    Hey! this is Amnish, a Versatile Software Developer based in Toronto.
                </h2>

                <p>
                    I am a young and passionate software developer, with a diverse skillset and a
                    hunger for solving problems.
                </p>

                <p>
                    I recently graduated from Seneca College with{" "}
                    <RoughNotation
                        type="highlight"
                        color={orangeShade}
                        show={showAnimations}
                        animate
                        animationDelay={200}
                    >
                        High Honors
                    </RoughNotation>
                    &nbsp;in a 3 years Computer Science program, where I learnt about{" "}
                    <RoughNotation
                        type="underline"
                        color={"blue"}
                        iterations={1}
                        show={showAnimations}
                        animate
                        animationDelay={600}
                    >
                        Web Development,
                    </RoughNotation>
                    &nbsp;
                    <RoughNotation
                        type="underline"
                        color={"blue"}
                        iterations={1}
                        show={showAnimations}
                        animate
                        animationDelay={1000}
                    >
                        Cloud
                    </RoughNotation>{" "}
                    <RoughNotation
                        type="underline"
                        color={"blue"}
                        iterations={1}
                        show={showAnimations}
                        animate
                        animationDelay={1000}
                    >
                        Computing
                    </RoughNotation>
                    ,{" "}
                    <RoughNotation
                        type="underline"
                        color="blue"
                        iterations={1}
                        show={showAnimations}
                        animate
                        animationDelay={1400}
                    >
                        Databases
                    </RoughNotation>{" "}
                    and basic{" "}
                    <RoughNotation
                        type="underline"
                        iterations={1}
                        color="blue"
                        show={showAnimations}
                        animate
                        animationDelay={1800}
                    >
                        IOS Development
                    </RoughNotation>{" "}
                    by not only reading theory, but actually building meaningful projects.
                </p>

                <p>
                    I've built several side projects in my development journey and have experience{" "}
                    <RoughNotation
                        type="highlight"
                        color={purpleShade}
                        show={showAnimations}
                        animate
                        animationDelay={2200}
                    >
                        architecting
                    </RoughNotation>{" "}
                    ,{" "}
                    <RoughNotation
                        type="highlight"
                        color={yellowShade}
                        show={showAnimations}
                        animate
                        animationDelay={2600}
                    >
                        planning
                    </RoughNotation>{" "}
                    and{" "}
                    <RoughNotation
                        type="highlight"
                        color={"pink"}
                        show={showAnimations}
                        animate
                        animationDelay={3000}
                    >
                        leading
                    </RoughNotation>{" "}
                    a team of developers to build a complex distributed system leveraging services
                    offered by major cloud platforms like Google Cloud, Firebase, MongoDB Atlas, and
                    an open source geocoding service.
                </p>

                <p>
                    A few months ago, I started doing{" "}
                    <RoughNotation
                        type="highlight"
                        color={purpleShade}
                        show={showAnimations}
                        animate
                        animationDelay={3400}
                    >
                        Open-Source
                    </RoughNotation>
                    {"  "}, participated in Hacktoberfest 2023 and contributed to various projects
                    on issues ranging from UI to Debugging to Devops.
                </p>

                <p>
                    My best experience so far has been working on{" "}
                    <RoughNotation
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
                        >
                            ChatCraft
                        </a>
                    </RoughNotation>
                    , an open-source developer oriented AI Chatbot, where I got to work with an
                    incredible team and under the guidance of{" "}
                    <a className="default-link" href="https://github.com/humphd" target="_blank">
                        my professor
                    </a>{" "}
                    and{" "}
                    <a className="default-link" href="https://github.com/tarasglek" target="_blank">
                        his friend
                    </a>
                    , both having worked in Mozilla and decades of exceptional experience in the
                    field of Software Development.
                </p>
            </div>

            <img
                className="w-80 rounded-md lg:col-span-2 col-span-1 shadow-lg m-auto block order-1 lg:order-none"
                src="./images/ProfilePicture.jpeg"
                alt="Amnish's Picture"
            />
        </article>
    );
};

export default Introduction;
