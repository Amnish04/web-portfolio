import { ReactNode } from "react";

type SkillProps = {
    name: string;
    icon: string | ReactNode;
    href?: string;
};

export class Skill {
    name: string;
    icon: string | ReactNode;
    href: string;

    constructor({ name, icon, href }: SkillProps) {
        this.name = name;
        this.icon = icon;
        this.href = href ?? "#";
    }
}

export type Skills = Skill[];
