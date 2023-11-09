export interface IEmployee {
    address: string;
    empId: number;
    location: string;
    profilePhoto: string;
    gender: string;
    email: string;
    department: string;
    skills: string[];
    dob: string;
    name: string;
    doj: string;
    role: string;
    id: string;
}

export interface IDepartment {
    id: string;
    value: string;
}

export interface IRole {
    id: string;
    value: string;
}

export interface ILocation {
    id: string;
    value: string;
}
