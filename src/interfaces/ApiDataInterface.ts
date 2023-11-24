export interface IApiEmployee {
    id: number;
    firstName: string;
    lastName: string; //
    isActive: true; //
    dob: string;
    email: string;
    phone: string; //
    designation: string; //
    salary: string; //
    dateOfJoining: string;
    address: string;
    moreDetails: string;
    role: IApiRole;
    department: IApiDepartment;
    skills: IApiSkill[];
}

export interface IApiFetchEmployees {
    message: string;
    data: {
        employees: IApiEmployee[];
        count: number;
    };
}

export interface IApiSkill {
    message: string;
    data: {
        id: number;
        skill: string;
    }[];
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
