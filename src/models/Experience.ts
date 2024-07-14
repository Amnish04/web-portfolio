export class Experience {
    positionTitle: string;
    companyName: string;
    responsibilities: string[];
    companyWebsiteLink: string;
    startDate: string;
    endDate?: string;

    constructor(
        positionTitle: string,
        companyName: string,
        responsibilities: string[],
        companyWebsiteLink: string = "",
        startDate: string = "",
        endDate?: string
    ) {
        this.positionTitle = positionTitle;
        this.companyName = companyName;
        this.responsibilities = responsibilities;
        this.companyWebsiteLink = companyWebsiteLink;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

export type Experiences = Experience[];
