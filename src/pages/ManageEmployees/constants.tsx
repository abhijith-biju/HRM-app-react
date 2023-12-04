import { IEmployee, IReactSelectOption } from '../../interfaces/common';

export const empTableHeaders = [
    { value: 'id', label: 'Emp Id', isSortable: true, sortValue: 'id' },
    {
        value: 'fullName',
        label: 'Name',
        isSortable: true,
        sortValue: 'firstName',
    },
    { value: 'email', label: 'Email', isSortable: false, sortValue: 'email' },
    { value: 'role', label: 'Role', isSortable: false, sortValue: 'role' },
    {
        value: 'department',
        label: 'Department',
        isSortable: false,
        sortValue: 'department',
    },
    {
        value: 'actions',
        label: 'Actions',
        isSortable: false,
        sortValue: 'actions',
    },
];

export const locations: IReactSelectOption[] = [
    {
        value: 'L1',
        label: 'Trivandrum',
    },
    {
        value: 'L2',
        label: 'Vazhuthacaud',
    },
    {
        value: 'L3',
        label: 'Cochin',
    },
    {
        value: 'L4',
        label: 'Calicut',
    },
    {
        value: 'L5',
        label: 'Noida',
    },
    {
        value: 'L6',
        label: 'Bangalore',
    },
    {
        value: 'L7',
        label: 'Koratty',
    },
    {
        value: 'L8',
        label: 'Chennai',
    },
];

export const genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'others', label: 'Others' },
];

export const prefillDataOnEmployeeAdd: IEmployee = {
    id: 0,
    firstName: '',
    email: '',
    dob: '',
    gender: '',
    address: '',
    role: null,
    department: null,
    dateOfJoining: '',
    location: null,
    skills: [],
    moreDetails: '',
    lastName: '',
    isActive: true,
    designation: '',
    phone: '',
    salary: '',
    photoId: '',
};
