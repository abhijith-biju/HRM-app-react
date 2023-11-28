// export interface IEmployee {
//     address: string;
//     empId: number;
//     location: ILocation;
//     profilePhoto: string;
//     gender: string;
//     email: string;
//     department: IDepartment;
//     skills: ISkill[];
//     dob: string;
//     name: string;
//     doj: string;
//     role: IRole;
//     id: string;
//     updatedAt?: { seconds: number; nanoseconds: number };
// }

export interface IEmployee {
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
    role: IRole;
    department: IDepartment;
    skills: ISkill[];
    moreDetails: string;
}

export interface IEmployeeSubmission {
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
    role: IRole | null;
    department: IDepartment | null;
    skills: ISkill[] | [];
    moreDetails: string;
}

export interface IEmployeeListing {
    id: number;
    firstName: string;
    email: string;
    phone: string; //
    role: string;
    department: string;
    actions: any;
}

export interface IDepartment {
    label: string;
    value: string;
}

export interface ISkill {
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
