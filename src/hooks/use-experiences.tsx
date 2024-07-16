import { FC, ReactNode, createContext, useContext, useMemo } from "react";
import { Experience, Experiences } from "../models/Experience";

type ExperiencesContextType = Experiences;

const ExperiencesContext = createContext<ExperiencesContextType>([]);

export const ExperiencesProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const value = useMemo(() => {
        return [
            new Experience(
                "Frontend Developer",
                "Ontario Treasury Board Secretariat",
                [
                    "Initiated as a co-op student and subsequently secured four consecutive contracts due to demonstrated reliability and high performance",
                    "Worked as an Angular developer within an Agile team on OnTrack, a large enterprise application integrating multiple legacy systems for the Cabinet Office and the Treasury Board",
                    "Implemented features requested by clients and fixed bugs that were raised closing more than 150 tasks to date",
                    "Played a key role in a major feature redesign, successfully implementing 26 User Stories within a single 2-week sprint",
                    "Set up static analysis tooling, including Prettier and ESLint, and configured pre-commit hooks in 16 production repositories.",
                ],
                "https://www.linkedin.com/company/ontreasury/mycompany/",
                [
                    {
                        name: "Angular",
                    },
                    {
                        name: "Azure Devops",
                    },
                    {
                        name: "Web Accessibility",
                        websiteLink: "https://www.w3.org/WAI/standards-guidelines/wcag/",
                    },
                    {
                        name: "Lightning Design System",
                        websiteLink: "https://www.lightningdesignsystem.com/",
                    },
                ],
                "SEPT 2022"
            ),
        ];
    }, []);

    return <ExperiencesContext.Provider value={value}>{children}</ExperiencesContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useExperiences = () => useContext(ExperiencesContext);
