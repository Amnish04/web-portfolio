export class Project {
    name: string;
    description: string;
    technologiesUsed: string[];
    imageUrl: string;
    githubLink: string;
    deployedLink: string;

    constructor(
        name: string,
        description: string,
        technologiesUsed: string[],
        imageUrl: string = "",
        githubLink: string = "",
        deployedLink: string = ""
    ) {
        this.name = name;
        this.description = description;
        this.technologiesUsed = technologiesUsed;
        this.imageUrl = imageUrl;
        this.githubLink = githubLink;
        this.deployedLink = deployedLink;
    }
}

export type Projects = Project[];
