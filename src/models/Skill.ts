import { ReactNode } from "react";

export class Skill {
    name: string;
    icon: string | ReactNode;

    constructor(name: string, icon: string | ReactNode) {
        this.name = name;
        this.icon = icon;
    }
}

export type Skills = Skill[];
