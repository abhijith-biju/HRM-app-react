export interface IEmployee {
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
    role: IReactSelectOption;
    department: IReactSelectOption;
    skills: IReactSelectOption[];
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
    role: IReactSelectOption | null;
    department: IReactSelectOption | null;
    skills: IReactSelectOption[] | [];
    moreDetails: string;
    profileInput?: string;
    location?: IReactSelectOption | null;
    gender?: string;
}

export interface IEmployeeListing {
    id: number;
    firstName: string;
    email: string;
    role: string;
    department: string;
    skills: number[];
    actions: JSX.Element;
}

export interface IReactSelectOption {
    label: string;
    value: string;
}
