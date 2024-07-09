export class Project {
    public name: string;
    public descriptionPoints: string;
    public technologiesUsed: string[];
    public imageUrl: string;
    public githubLink: string;
    public deployedLink: string;

    constructor(
        name: string,
        descriptionPoints: string,
        technologiesUsed: string[],
        imageUrl: string = "",
        githubLink: string = "",
        deployedLink: string = ""
    ) {
        this.name = name;
        this.descriptionPoints = descriptionPoints;
        this.technologiesUsed = technologiesUsed;
        this.imageUrl = imageUrl;
        this.githubLink = githubLink;
        this.deployedLink = deployedLink;
    }
}

export type Projects = Project[];
