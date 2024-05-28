import { useMemo } from "react";
import { Skill, type Skills } from "../models/Skill";
import Layout from "./Layout";
import { DiJavascript } from "react-icons/di";

type SkillTileProps = {
    skill: Skill;
    containerClassName?: string;
};

const SkillTile = ({ skill, containerClassName = "" }: SkillTileProps) => {
    return (
        <div
            className={`flex flex-col gap-2 justify-center items-center w-32 ${containerClassName}`}
        >
            {/* Icon */}
            {typeof skill.icon === "string" ? (
                <img className="w-full h-auto" src={skill.icon} alt={`${skill.name} Icon`} />
            ) : (
                skill.icon
            )}

            {/* Skill Label */}
            <p>{skill.name}</p>
        </div>
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
                title: "Web Development",
                skills: [new Skill("JavaScript", <DiJavascript size={50} color="orange" />)],
            },
        ],
        []
    );

    return (
        <Layout id="skills">
            <h2 className="font-headings font-semibold text-4xl text-center">Skills</h2>

            <p className="text-center mb-5">What I have learnt over the past few years</p>

            {skills.map(({ title, skills }) => (
                <SkillsGroup key={`${title}-skills`} title={title} skills={skills} />
            ))}
        </Layout>
    );
};

export default Skills;
