import { FC } from "react";
import { useExperiences } from "../hooks/use-experiences";
import Layout from "./Layout";
import { Experience } from "../models/Experience";

const ExperienceCard: FC<{ experience: Experience }> = ({ experience }) => {
    return <div>{experience.companyName}</div>;
};

const ExperienceSection = () => {
    const experiences = useExperiences();

    return (
        <Layout id={"experience"}>
            <h2 className="font-headings font-semibold text-4xl text-center mt-2">Experience</h2>

            <div>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={`experiece-${experience.companyName}-${experience.positionTitle}-${index}`}
                        experience={experience}
                    />
                ))}
            </div>
        </Layout>
    );
};

export default ExperienceSection;
