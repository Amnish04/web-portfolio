import { FC, ReactNode, createContext, useCallback, useContext, useMemo } from "react";
import { Skill, Skills } from "../models/Skill";
import HonoIcon from "../components/Icons/HonoIcon";

export type SkillsGroup = {
    title: string;
    skills: Skills;
};

type SkillsContextType = {
    skills: SkillsGroup[];
    getSkillByName: (skillName: string) => Skill | null;
};

const SkillsContext = createContext<SkillsContextType>({
    skills: [],
    getSkillByName: () => {
        return new Skill({
            name: "",
            icon: "",
        });
    },
});

export const SkillsProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const skills: SkillsGroup[] = useMemo(
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
                        name: "Next.js",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                        href: "https://nextjs.org/",
                    }),
                    new Skill({
                        name: "Remix",
                        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M19.1155 20C19.1155 18.9358 19.1155 17.9609 18.9536 15.8812C18.7532 13.7919 17.6654 12.7329 15.8047 12.3608C18.0089 12.0746 19.6406 10.3574 19.6406 7.72423C19.6406 4.20384 17.3219 2 12.6558 2H4V5.66888H11.797C13.8581 5.66888 14.8887 6.55343 14.8887 8.0131C14.8887 9.67314 13.8581 10.3001 11.797 10.3001H4V14.0495H11.568C13.1997 14.0495 14.0871 14.5074 14.2302 16.5682C14.3385 17.9756 14.325 18.6726 14.3119 19.341L14.3119 19.3438C14.3077 19.5579 14.3036 19.7692 14.3036 20L19.1155 20ZM4 17.2046V19.9996H10.1222V18.2108C10.1222 17.8349 9.93768 17.2046 9.08783 17.2046H4Z'%3E%3C/path%3E%3C/svg%3E",
                        href: "https://remix.run/",
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
                        name: "Hono.js",
                        icon: <HonoIcon />,
                        href: "https://hono.dev/",
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
                        name: "Kubernetes",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
                        href: "https://kubernetes.io/",
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
                        name: "Github Codespaces",
                        icon: <i className="devicon-githubcodespaces-plain text-[4rem]"></i>,
                        href: "https://github.com/features/codespaces",
                    },
                    {
                        name: "Azure Devops",
                        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg",
                        href: "https://azure.microsoft.com/en-us/products/devops",
                    },
                ],
            },
        ],
        []
    );

    const skillsList = useMemo(() => {
        return Array.from(new Set<Skill>(skills.map((group) => group.skills).flat()));
    }, [skills]);

    const getSkillByName = useCallback(
        (skillName: string) => {
            return (
                skillsList.find((skill) => skill.name.toLowerCase() === skillName.toLowerCase()) ??
                null
            );
        },
        [skillsList]
    );

    const value = {
        skills,
        getSkillByName,
    };

    return <SkillsContext.Provider value={value}>{children}</SkillsContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSkills = () => useContext(SkillsContext);
