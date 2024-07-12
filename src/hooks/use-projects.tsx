import { FC, ReactNode, createContext, useContext } from "react";
import { Project, Projects } from "../models/Project";

type ProjectsContextType = Projects;

const ProjectsContext = createContext<ProjectsContextType>([]);

export const ProjectsProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const value = [
        new Project(
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
        new Project(
            "Raggy Chats",
            "Raggy Chats is an AI chatbot, focusing specifically on Retrieval Augmented Generation (RAG). Users upload documents for context, and Raggy Chats conducts semantic search on the content, ranks the most relevant chunks using Cosine Similarity, and augments the original query.",
            ["OpenAI", "Retrieval Augmented Generation", "React", "Vite", "Chakra UI"],
            "/images/raggy-chats_poster.png",
            "https://github.com/Amnish04/raggy-chats",
            "https://raggy-chats.pages.dev/"
        ),
        new Project(
            "Sugary Pills",
            "A comprehensive web application that effectively gathers diabetes-related data through a quick survey. The collected data is fed to an interactive reporting system, that generates dynamic graphs, on the fly, based on lifestyle choice filters.",
            ["Angular", "Express.js", "Postgres SQL", "Hackathon"],
            "/images/sugary-pills_poster.png",
            "https://github.com/Amnish04/SugaryPills.UI",
            "https://dia-ui.firebaseapp.com/home"
        ),
        new Project(
            "til-page-builder",
            "A command-line tool, published on PyPI, for authoring 'Today I Learned' posts in Markdown, which can be converted to HTML for publishing on the web. Converts text or markdown files to html files that can be rendered as web pages.",
            ["Python", "Yattag", "Open Source", "PyPi"],
            "/images/til-page-builder_poster.png",
            "https://github.com/Amnish04/til-page-builder",
            "https://test.pypi.org/project/til-page-builder/"
        ),
        new Project(
            "Weather Today",
            "A beautiful weather application that uses OpenWeather's API for presenting weather information at your current location, or any other city via a search feature.",
            ["Node.js", "Express.js", "Handlebars.js", "OpenWeather", "Browser Geolocation"],
            "/images/weather-today_poster.png",
            "https://github.com/Amnish04/Weather-App",
            "https://weather-today-amnish.up.railway.app/weather"
        ),
        new Project(
            "Love Expresser",
            "A romantic codepen made for my first love with CSS pouring from ❤️",
            ["HTML", "CSS", "JavaScript", "StackBlitz"],
            "/images/love-expresser_poster.png",
            "https://github.com/Amnish04/LoveExpresser",
            "https://stackblitz.com/edit/angular-l5zxrd"
        ),
    ];

    return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProjects = () => useContext(ProjectsContext);
