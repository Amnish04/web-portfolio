import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles.css";
import { ExperiencesProvider } from "./hooks/use-experiences.tsx";
import { SkillsProvider } from "./hooks/use-skills.tsx";
import { ProjectsProvider } from "./hooks/use-projects.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <main className="font-mont font-medium bg-light min-h-screen">
            <ExperiencesProvider>
                <SkillsProvider>
                    <ProjectsProvider>
                        <App />
                    </ProjectsProvider>
                </SkillsProvider>
            </ExperiencesProvider>
        </main>
    </React.StrictMode>
);
