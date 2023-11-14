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
    label: string;
    value: string;
}

export interface IRole {
    label: string;
    value: string;
}

export interface ILocation {
    label: string;
    value: string;
}
