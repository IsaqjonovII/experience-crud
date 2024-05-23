export interface IJobForm {
    id: number | string;
    startDate: {
        month: string;
        year: string | number;
    },
    endDate: {
        month: string;
        year: string | number;
    },
    jobTitle: string,
    company: string,
    location: string,
    type: string,
    skills: string[],
    description: string,
}