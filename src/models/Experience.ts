type Technology = {
    name: string;
    websiteLink?: string;
};

export class Experience {
    positionTitle: string;
    companyName: string;
    companyWebsiteLink: string;
    responsibilities: string[];
    technologiesUsed: Technology[];
    startDate: string;
    endDate?: string;

    constructor(
        positionTitle: string,
        companyName: string,
        responsibilities: string[],
        companyWebsiteLink: string = "",
        technologiesUsed: Technology[],
        startDate: string,
        endDate?: string
    ) {
        this.positionTitle = positionTitle;
        this.companyName = companyName;
        this.companyWebsiteLink = companyWebsiteLink;
        this.responsibilities = responsibilities;
        this.technologiesUsed = technologiesUsed;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

export type Experiences = Experience[];
