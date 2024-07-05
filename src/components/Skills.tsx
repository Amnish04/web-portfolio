import { motion } from "framer-motion";
import { SkillsGroup, useSkills } from "../hooks/use-skills";
import { Skill, type Skills } from "../models/Skill";
import Layout from "./Layout";

type SkillTileProps = {
    skill: Skill;
    animationDelay?: number;
    containerClassName?: string;
};

const SKILL_TILE_TITLE_DURATION = 0.5; // seconds

const SkillTile = ({ skill, animationDelay = 0, containerClassName = "" }: SkillTileProps) => {
    return (
        <motion.a
            whileInView={{ x: [-25, 0], opacity: [0, 1] }}
            transition={{
                type: "spring",
                stiffness: 50,
                duration: 1,
                delay: animationDelay + SKILL_TILE_TITLE_DURATION,
            }}
            viewport={{ once: true }}
            href={skill.href}
            title={`Go to ${skill.name} documentation`}
            target="_blank"
            className={`flex flex-col gap-2 justify-between items-center w-16 ${containerClassName}`}
        >
            {/* Icon */}
            {typeof skill.icon === "string" ? (
                <img className="w-full h-auto" src={skill.icon} alt={`${skill.name} Icon`} />
            ) : (
                skill.icon
            )}

            {/* Skill Label */}
            <p className="font-medium text-center">{skill.name}</p>
        </motion.a>
    );
};

const SkillsGroupSection = ({ title, skills }: SkillsGroup) => {
    return (
        <section className="py-3">
            <motion.h3
                whileInView={{ opacity: [0, 1], y: [25, 0] }}
                viewport={{ once: true }}
                transition={{ duration: SKILL_TILE_TITLE_DURATION }}
                className="font-mont font-bold text-2xl drop-shadow-md mb-5"
            >
                {title}
            </motion.h3>

            <div className="flex flex-wrap gap-8 sm:gap-12 justify-between sm:justify-start items-stretch">
                {skills.map((skill, index) => {
                    return (
                        <SkillTile
                            key={`${title}-skill-${index}`}
                            skill={skill}
                            animationDelay={index * 0.1}
                        />
                    );
                })}
            </div>
        </section>
    );
};

const Skills = () => {
    const skills: SkillsGroup[] = useSkills();

    return (
        <div className="bg-[url('/images/skills-background.gif')] text-light py-5">
            <Layout id="skills">
                <h2 className="font-headings font-semibold text-4xl text-center mt-2">Skills</h2>

                <p className="text-center mb-5">What I have learnt over the years</p>

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

                {skills.map(({ title, skills }, index) => (
                    <SkillsGroupSection
                        key={`${title}-skills-${index}`}
                        title={title}
                        skills={skills}
                    />
                ))}
            </Layout>
        </div>
    );
};

export default Skills;
