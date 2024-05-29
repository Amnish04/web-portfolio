import { motion } from "framer-motion";
import { useMemo } from "react";
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

type SkillsGroupProps = {
    title: string;
    skills: Skills;
};

const SkillsGroup = ({ title, skills }: SkillsGroupProps) => {
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
    // Only calculate on first render
    // This is supposed to be a constant and never change
    const skills: SkillsGroupProps[] = useMemo(
        () => [
            {
                title: "Front-End Development",
                skills: [
                    new Skill({
                        name: "HTML",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
                        href: "https://developer.mozilla.org/en-US/docs/Web/Html",
                    }),
                    new Skill({
                        name: "CSS",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
                        href: "https://developer.mozilla.org/en-US/docs/Web/Css",
                    }),
                    new Skill({
                        name: "JavaScript",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    }),
                    new Skill({
                        name: "TypeScript",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                        href: "https://www.typescriptlang.org/",
                    }),
                    new Skill({
                        name: "Angular",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
                        href: "https://angular.dev/",
                    }),
                    new Skill({
                        name: "React",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                        href: "https://react.dev/",
                    }),
                    new Skill({
                        name: "Sass",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
                        href: "https://sass-lang.com/",
                    }),
                    new Skill({
                        name: "TailwindCSS",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                        href: "https://tailwindcss.com/",
                    }),
                    new Skill({
                        name: "RxJS",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg",
                        href: "https://rxjs.dev/",
                    }),
                    new Skill({
                        name: "Next.js",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                        href: "https://nextjs.org/",
                    }),
                ],
            },
            {
                title: "Back-End Development",
                skills: [
                    new Skill({
                        name: "Node.js",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
                        href: "https://nodejs.org/en",
                    }),
                    new Skill({
                        name: "Express.js",
                        icon: <i className="devicon-express-original text-[4rem]"></i>,
                        href: "https://expressjs.com/",
                    }),
                    new Skill({
                        name: "ASP.NET",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
                        href: "https://dotnet.microsoft.com/en-us/apps/aspnet/apis",
                    }),
                    new Skill({
                        name: "OracleDB",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
                        href: "https://www.oracle.com/ca-en/database/sqldeveloper/",
                    }),
                    new Skill({
                        name: "MySQL",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
                        href: "https://www.mysql.com/",
                    }),
                    new Skill({
                        name: "Postgres SQL",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
                        href: "https://react.dev/",
                    }),
                    new Skill({
                        name: "SQLite",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
                        href: "https://www.sqlite.org/",
                    }),
                    new Skill({
                        name: "MongoDB",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
                        href: "https://www.mongodb.com/",
                    }),
                    new Skill({
                        name: "DynamoDB",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg",
                        href: "https://aws.amazon.com/pm/dynamodb/?gclid=CjwKCAjwgdayBhBQEiwAXhMxtssGTxo5NdJJc6U6IqWyhqluMbPIY6eUNB9DPqaUMaDLiExvPsGR1RoCtScQAvD_BwE&trk=d1003b1b-ffc2-4fbd-9ce6-e70c668663bc&sc_channel=ps&ef_id=CjwKCAjwgdayBhBQEiwAXhMxtssGTxo5NdJJc6U6IqWyhqluMbPIY6eUNB9DPqaUMaDLiExvPsGR1RoCtScQAvD_BwE:G:s&s_kwcid=AL!4422!3!536393505298!e!!g!!dynamodb!11346198423!112250794958",
                    }),
                    new Skill({
                        name: "PNPM",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pnpm/pnpm-original.svg",
                        href: "https://pnpm.io/",
                    }),
                ],
            },
            {
                title: "Cloud Computing",
                skills: [
                    new Skill({
                        name: "AWS",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
                        href: "https://aws.amazon.com/free/?gclid=CjwKCAjwgdayBhBQEiwAXhMxtuWA20ofrToYF4qZxdjlo58WQZbe-DfzKfh5BJkcEshNQyqApJxL8hoC4NIQAvD_BwE&trk=e747cc26-a307-4ae0-981a-6dc5c1cb4121&sc_channel=ps&ef_id=CjwKCAjwgdayBhBQEiwAXhMxtuWA20ofrToYF4qZxdjlo58WQZbe-DfzKfh5BJkcEshNQyqApJxL8hoC4NIQAvD_BwE:G:s&s_kwcid=AL!4422!3!453053794209!e!!g!!aws!10705896207!102406402981",
                    }),
                    new Skill({
                        name: "Azure",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
                        href: "https://azure.microsoft.com/en-ca",
                    }),
                    new Skill({
                        name: "Google Cloud",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
                        href: "https://cloud.google.com/gcp?utm_source=google&utm_medium=cpc&utm_campaign=na-CA-all-en-dr-bkws-all-all-trial-e-dr-1707554&utm_content=text-ad-none-any-DEV_c-CRE_665735450633-ADGP_Hybrid+%7C+BKWS+-+EXA+%7C+Txt-Core-Google+Cloud-KWID_43700077224548586-aud-2232802565252:kwd-6458750523&utm_term=KW_google+cloud-ST_google+cloud&gad_source=1&gclid=CjwKCAjwgdayBhBQEiwAXhMxtkJmONEi4NsgsS7HpWzgC9oe_1Lfh_LI6k-R62QbrPSnn51I6WxojBoCXT8QAvD_BwE&gclsrc=aw.ds&hl=en",
                    }),
                    new Skill({
                        name: "Github Actions",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
                        href: "https://github.com/features/actions",
                    }),
                    new Skill({
                        name: "Docker",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
                        href: "https://www.docker.com/",
                    }),
                    new Skill({
                        name: "Nginx",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
                        href: "https://nginx.org/en/",
                    }),
                    new Skill({
                        name: "Firebase",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
                        href: "https://firebase.google.com/",
                    }),
                    new Skill({
                        name: "Linux",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
                        href: "https://www.linux.org/",
                    }),
                    new Skill({
                        name: "YAML",
                        icon: <i className="devicon-yaml-plain colored text-[4rem]"></i>,
                        href: "https://www.redhat.com/en/topics/automation/what-is-yaml#:~:text=YAML%20is%20a%20human%2Dreadable,is%20for%20data%2C%20not%20documents.",
                    }),
                    new Skill({
                        name: "Cloudfare Workers",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflareworkers/cloudflareworkers-original.svg",
                        href: "https://developers.cloudflare.com/workers/",
                    }),
                ],
            },
            {
                title: "IOS Development",
                skills: [
                    {
                        name: "Swift",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
                        href: "https://www.swift.org/",
                    },
                    {
                        name: "UIKit",
                        icon: "/images/uikit.svg",
                        href: "https://getuikit.com/",
                    },
                    {
                        name: "SwiftUI",
                        icon: "https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96_2x.png",
                        href: "https://developer.apple.com/xcode/swiftui/",
                    },
                    {
                        name: "Core Data",
                        icon: <i className="devicon-azuresqldatabase-plain text-[4rem]"></i>,
                        href: "https://developer.apple.com/documentation/coredata//",
                    },
                    {
                        name: "XCode",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg",
                        href: "https://developer.apple.com/xcode/",
                    },
                ],
            },
            {
                title: "Object Oriented Programming",
                skills: [
                    {
                        name: "C++",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
                        href: "https://cplusplus.com/",
                    },
                    {
                        name: "Python",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                        href: "https://www.python.org/",
                    },
                    {
                        name: "Java",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
                        href: "https://www.java.com/en/",
                    },
                ],
            },
            {
                title: "Collaboration and DevOps",
                skills: [
                    {
                        name: "Git",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                        href: "https://git-scm.com/",
                    },
                    {
                        name: "Github",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
                        href: "https://github.com/",
                    },
                    {
                        name: "Gihub Codespaces",
                        icon: <i className="devicon-githubcodespaces-plain text-[4rem]"></i>,
                        href: "https://github.com/features/codespaces",
                    },
                    {
                        name: "Azure Devops",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg",
                        href: "https://aws.amazon.com/devops/what-is-devops/",
                    },
                ],
            },
        ],
        []
    );

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
                    <SkillsGroup key={`${title}-skills-${index}`} title={title} skills={skills} />
                ))}
            </Layout>
        </div>
    );
};

export default Skills;
