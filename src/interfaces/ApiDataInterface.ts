export interface IApiEmployee {
    id: number;
    firstName: string;
    lastName: string;
    isActive: true;
    dob: string;
    email: string;
    phone: string;
    designation: string;
    salary: string;
    dateOfJoining: string;
    address: string;
    role: IApiRole;
    department: IApiDepartment;
    skills: IApiSkill[];
    moreDetails: string;
}

export interface IApiEmployeeSubmission {
    firstName: string;
    lastName: string;
    isActive: true;
    dob: string;
    email: string;
    phone: string;
    designation: string;
    salary: string;
    dateOfJoining: string;
    address: string;
    role: number;
    department: number;
    skills: number[];
    moreDetails: string;
}

export interface IApiFetchEmployees {
    message: string;
    data: {
        employees: IApiEmployee[];
        count: number;
    };
}

export interface IApiFetchEmployee {
    message: string;
    data: IApiEmployee;
}

export interface IApiFetchSkill {
    message: string;
    data: {
        id: number;
        skill: string;
    }[];
}

export interface IApiSkill {
    id: number;
    skill: string;
}

export interface IApiDepartment {
    id: number;
    department: string;
}

export interface IApiLocation {
    id: number;
    location: string;
}

export interface IApiRole {
    id: number;
    role: string;
}
