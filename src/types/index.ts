export interface IJobForm {
    id: number | string;
    startDate: {
        month: string;
        year: string | number;
    },
    endDate: string,
    jobTitle: string,
    company: string,
    location: string,
    type: string,
    skills: string[],
    description: string,
}