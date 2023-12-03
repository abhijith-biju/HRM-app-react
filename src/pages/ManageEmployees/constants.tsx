import { IEmployee, IReactSelectOption } from '../../interfaces/common';

export const empTableHeaders = [
    { value: 'id', label: 'Emp Id', isSortable: true },
    { value: 'firstName', label: 'Name', isSortable: true },
    { value: 'email', label: 'Email', isSortable: false },
    { value: 'role', label: 'Role', isSortable: false },
    { value: 'department', label: 'Department', isSortable: false },
    { value: 'actions', label: 'Actions', isSortable: false },
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

// export const prefillDataOnEmployeeAdd: IEmployeeSubmission = {
//     firstName: 'abhib',
//     email: 'abhib@qburst.com',
//     dob: '2017-06-01',
//     gender: 'female',
//     address: 'abc street, pqr',
//     role: {
//         value: '1',
//         label: 'Developer',
//     },
//     department: {
//         value: '2',
//         label: 'Marketing',
//     },
//     dateOfJoining: '2001-06-01',
//     location: {
//         value: 'L3',
//         label: 'Cochin',
//     },
//     skills: [
//         {
//             value: '8',
//             label: 'UI/UX Design',
//         },
//         {
//             value: '2',
//             label: 'Node',
//         },
//     ],
//     moreDetails: '',
//     lastName: '',
//     isActive: true,
//     designation: '',
//     phone: '',
//     salary: '',
//     photoId: '',
// };
