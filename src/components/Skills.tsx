import { motion } from "framer-motion";
import { useMemo } from "react";
import { Skill, type Skills } from "../models/Skill";
import Layout from "./Layout";

type SkillTileProps = {
    skill: Skill;
    containerClassName?: string;
};

const SkillTile = ({ skill, containerClassName = "" }: SkillTileProps) => {
    return (
        <a
            href={skill.href}
            title={`Go to ${skill.name} documentation`}
            target="_blank"
            className={`flex flex-col gap-2 justify-center items-center w-16 ${containerClassName}`}
        >
            {/* Icon */}
            {typeof skill.icon === "string" ? (
                <img className="w-full h-auto" src={skill.icon} alt={`${skill.name} Icon`} />
            ) : (
                skill.icon
            )}

            {/* Skill Label */}
            <p>{skill.name}</p>
        </a>
    );
};

type SkillsGroupProps = {
    title: string;
    skills: Skills;
};

const SkillsGroup = ({ title, skills }: SkillsGroupProps) => {
    return (
        <section className="py-3">
            <h3 className="font-mont font-bold text-xl mb-2">{title}</h3>

            {skills.map((skill, index) => {
                return <SkillTile key={`${title}-skill-${index}`} skill={skill} />;
            })}
        </section>
    );
};

const Skills = () => {
    // Only calculate on first render
    // This is supposed to be a constant and never change
    const skills: SkillsGroupProps[] = useMemo(
        () => [
            {
                title: "Front-End Development",
                skills: [
                    new Skill({
                        name: "JavaScript",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    }),
                ],
            },
        ],
        []
    );

    return (
        <Layout id="skills">
            <h2 className="font-headings font-semibold text-4xl text-center">Skills</h2>

            <p className="text-center mb-5">What I have learnt over the past few years</p>

            <motion.hr
                viewport={{ once: true }}
                initial={"hidden"}
                whileInView={"inView"}
                transition={{ duration: 0.5 }}
                className="w-3/5 m-auto bg-dark text-dark h-[2px]"
                variants={{
                    hidden: { opacity: 0, scaleX: 0 },
                    inView: { opacity: 1, scaleX: 1 },
                }}
            />

            {skills.map(({ title, skills }) => (
                <SkillsGroup key={`${title}-skills`} title={title} skills={skills} />
            ))}
        </Layout>
    );
};

export default Skills;
