import { FC, useCallback, useMemo } from "react";
import { useSkills } from "../../hooks/use-skills";

type TechnologyPillProps = {
    technology: string;
    variant?: "light" | "dark";
    href?: string; // To override automatic detection and redirection to Skills section fragment
};

const TechnologyPill: FC<TechnologyPillProps> = ({ technology, variant = "dark", href }) => {
    const { getSkillByName } = useSkills();

    const hyperLinkableSkill = useMemo(
        () => getSkillByName(technology),
        [getSkillByName, technology]
    );

    const isHyperlinkPill = useCallback(() => {
        return hyperLinkableSkill !== null || !!href;
    }, [href, hyperLinkableSkill]);

    return (
        <span
            className={`mr-2 border rounded-full px-2 py-1 ${variant === "dark" ? "border-dark" : ""} ${isHyperlinkPill() ? (variant === "light" ? "hover:bg-light hover:bg-opacity-20 focus:bg-light focus:bg-opacity-20" : "hover:bg-dark hover:bg-opacity-5 focus:bg-dark focus:bg-opacity-5") : ""}`}
        >
            {isHyperlinkPill() ? (
                <a
                    onClick={(evt) => evt.stopPropagation()}
                    href={href ?? `#skill-${hyperLinkableSkill?.name}`}
                    target={href ? "_blank" : "_self"}
                >
                    {technology}
                </a>
            ) : (
                technology
            )}
        </span>
    );
};

export default TechnologyPill;
