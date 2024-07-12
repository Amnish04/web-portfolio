export class Project {
    public name: string;
    public description: string;
    public technologiesUsed: string[];
    public imageUrl: string;
    public githubLink: string;
    public deployedLink: string;

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
