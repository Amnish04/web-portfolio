import { FC, useCallback } from "react";
import { useExperiences } from "../hooks/use-experiences";
import { Experience } from "../models/Experience";
import Layout from "./Layout";
import TechnologyPill from "./shared/TechnologyPill";
import { MdArrowOutward } from "react-icons/md";

type ExperienceCardProps = {
    experience: Experience;
    containerClass?: string;
};

const ExperienceCard: FC<ExperienceCardProps> = ({ experience, containerClass = "" }) => {
    const handleCompanyLinkRedirect = useCallback(() => {
        window.open(experience.companyWebsiteLink, "_blank", "noopener noreferrer");
    }, [experience.companyWebsiteLink]);

    return (
        // "group" className is used to style child elements based on the parent element state
        // https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state
        <div
            onClick={handleCompanyLinkRedirect}
            className={`group cursor-pointer transition hover:shadow-lg hover:opacity-90 flex flex-wrap items-stretch border rounded-md p-4 px-6 sm:px-4 shadow-sm ${containerClass}`}
        >
            {/* Duration */}
            <div className="sm:basis-3/12">
                <p className="text-slate-700">
                    {experience.startDate} - {experience.endDate ?? "Present"}
                </p>
            </div>

            {/* Main Content */}
            <div className="sm:basis-9/12">
                <h3 className="font-semibold text-lg">
                    <a
                        className="flex items-center gap-1 group-hover:text-blue-800 group-active:text-blue-800 transition duration-300"
                        href={experience.companyWebsiteLink}
                        onClick={(evt) => evt.stopPropagation()}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        {experience.positionTitle}{" "}
                        <MdArrowOutward className="group-hover:translate-x-1 transition group-hover:-translate-y-1 group-active:translate-x-1 group-active:-translate-y-1" />
                    </a>
                </h3>
                <h4 className="text-slate-700 text-lg">{experience.companyName}</h4>

                {/* Responsibilities */}
                <ul className="mt-3 list-disc">
                    {experience.responsibilities.map((responsibility, index) => (
                        <li
                            key={`experience-technology-${experience.positionTitle}-${experience.companyName}-${index}`}
                        >
                            {responsibility}
                        </li>
                    ))}
                </ul>

                {/* Technologies Used */}
                <div className="py-4 flex flex-wrap gap-2">
                    {experience.technologiesUsed.map((technology) => (
                        <TechnologyPill
                            key={`experience-technology-${experience.positionTitle}-${experience.companyName}-${technology.name}`}
                            technology={technology.name}
                            href={technology.websiteLink}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const ExperienceSection = () => {
    const experiences = useExperiences();

    return (
        <Layout id={"experience"} className="py-10">
            <h2 className="font-headings font-semibold text-4xl text-center mb-12">Experience</h2>

            <div className="grid grid-cols-6">
                <div className="col-span-1 hidden sm:flex justify-center">
                    {/* Dashed Line */}
                    <span className="h-full border-r-2 border-slate-500 translate-x-2 border-dashed"></span>
                    <span className="sticky top-[190px] -rotate-[45deg] animate-pulse scale-[2] self-start">
                        🚀
                    </span>
                </div>

                <div className="col-span-full sm:col-span-5 flex flex-col gap-5">
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${experience.companyName}-${experience.positionTitle}-${index}`}
                            experience={experience}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default ExperienceSection;
