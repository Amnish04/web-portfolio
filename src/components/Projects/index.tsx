import { FC } from "react";
import { useProjects } from "../../hooks/use-projects";
import { Project } from "../../models/Project";
import Layout from "../Layout";
import CoffeeMug from "./CoffeeMug";
import "./Projects.css";

type ProjectCardProps = {
    project: Project;
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    return <div>{project.name}</div>;
};

const ProjectsList = () => {
    const projects = useProjects();

    return (
        <Layout id={"projects"}>
            <h2 className="font-headings font-semibold text-4xl text-center mt-2">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Programmer with Coffee, not showing on mobile */}
                <div className="hidden md:block mt-24">
                    <div className="sticky left-0 top-[166px]">
                        <div className="relative w-max">
                            {/* Programmer */}
                            <img
                                className="w-72"
                                src="/images/programmer-desk.png"
                                alt="Cool Programmer"
                            />

                            {/* His Coffee */}
                            <CoffeeMug />
                        </div>
                    </div>
                </div>

                {/* List of Projects */}
                <div>
                    {projects.map((project, index) => (
                        <ProjectCard key={`project-${index}`} project={project} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default ProjectsList;
