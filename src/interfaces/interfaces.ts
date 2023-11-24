export interface IEmployee {
    address: string;
    empId: number;
    location: ILocation;
    profilePhoto: string;
    gender: string;
    email: string;
    department: IDepartment;
    skills: ISkill[];
    dob: string;
    name: string;
    doj: string;
    role: IRole;
    id: string;
    updatedAt?: { seconds: number; nanoseconds: number };
}

export interface IDepartment {
    label: string;
    value: string;
}

export interface ISkill {
    label: string;
    value: string;
}

export interface IFetchSkill {
    id: number;
    skill: string;
}

export interface IRole {
    label: string;
    value: string;
}

export interface ILocation {
    label: string;
    value: string;
}

export interface IFetchEmployee {
    id: number;
    firstName: string;
    lastName: string;
    isActive: boolean;
    dob: String;
    email: string;
    phone: string;
    designation: string;
    salary: string;
    dateOfJoining: string;
    address: string;
    moreDetails: null;
    role: {
        id: string;
        role: string;
    };
    department: {
        id: string;
        department: string;
    };
    skills: [
        {
            id: string;
            skill: string;
        }
    ];
}
