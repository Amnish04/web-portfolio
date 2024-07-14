import { FC, ReactNode, createContext, useContext } from "react";
import { Experience, Experiences } from "../models/Experience";

type ExperiencesContextType = Experiences;

const ExperiencesContext = createContext<ExperiencesContextType>([]);

export const ExperiencesProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const value = [
        new Experience(
            "Dine-A-Night",
            "A restaurant reservation application, where owners can sign up and build dynamic restaurant layouts, customers can make reservations while selecting where they sit, and admins to monitor and analyze upcoming and historical reservations.",
            [
                "Angular",
                "Express.js",
                "Firebase",
                "Google Cloud",
                "MongoDB",
                "Distributed Architecture",
            ],
            "/images/dine-a-night_poster.png",
            "https://github.com/Dine-A-Night/dine-a-night_ui",
            "https://dine-a-night.web.app/home"
        ),
    ];

    return <ExperiencesContext.Provider value={value}>{children}</ExperiencesContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useExperiences = () => useContext(ExperiencesContext);
