const employeesList = [
    {
        address: 'Abc, Pqr, Kerala, India',
        empId: 1059,
        location: {
            value: 'l2',
            label: 'Kochi',
        },
        profilePhoto:
            'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fb9fc8e8a-8154-4e6e-979f-9bf015179333?alt=media&token=8ddae7a0-8330-4538-a26d-5c63d30ab5d9',
        gender: 'male',
        email: 'akshay.krishna@qburst.com',
        department: { value: 'd1', label: 'Development' },
        skills: [
            {
                value: 's1',
                label: 'HTML',
            },
            {
                value: 's2',
                label: 'CSS',
            },
            {
                value: 's3',
                label: 'JavaScript',
            },
            {
                value: 's4',
                label: 'Selenium',
            },
        ],
        dob: '2001-01-01',
        name: 'Akshay Krishna',
        doj: '2023-07-01',
        role: { value: 'r1', label: 'Engineer' },
        id: 'wVJcJpsxhwxCvZTpmKQY',
    },
    {
        address: 'abc house, pqr street, Karachi, Pakistan',
        skills: [
            {
                value: 's1',
                label: 'HTML',
            },
            {
                value: 's2',
                label: 'CSS',
            },
            {
                value: 's3',
                label: 'JavaScript',
            },
            {
                value: 's4',
                label: 'Selenium',
            },
        ],
        gender: 'male',
        doj: '2023-10-18',
        empId: 1037,
        department: { value: 'd2', label: 'Quality Assurance' },
        name: 'Babar Azam',
        location: {
            value: 'l3',
            label: 'Chennai',
        },
        role: {
            value: 'r4',
            label: 'Director',
        },
        email: 'babar.azam@qburst.com',
        dob: '1994-09-15',
        profilePhoto:
            'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fd842dc72-7a3e-4842-a799-293f00fd44f7?alt=media&token=a101a3c4-99fb-4858-a11f-a02ae948011f',
        id: 'QWgRL99KlQWiQP8lUspr',
    },
    {
        address: 'Abc, Pqq, Florida',
        dob: '1987-06-24',
        profilePhoto:
            'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fab751370-f555-4a8e-affb-79aee6ca3c04?alt=media&token=d7afceb4-aa4b-4f84-a3e3-b0761998ba68',
        name: 'Lionel Messi',
        role: {
            value: 'r5',
            label: 'Intern',
        },
        gender: 'male',
        skills: [
            {
                value: 's2',
                label: 'CSS',
            },
            {
                value: 's3',
                label: 'JavaScript',
            },
            {
                value: 's5',
                label: 'Project Management',
            },
        ],
        empId: 1035,
        location: {
            value: 'l4',
            label: 'Noida',
        },
        doj: '2006-10-18',
        email: 'lionel.messi@qburst.com',
        department: {
            value: 'd4',
            label: 'Executive',
        },
        id: 'uhh6UkGz8yrqowB36iJ5',
    },
    {
        role: {
            value: 'r3',
            label: 'CEO',
        },
        dob: '1978-07-10',
        location: {
            value: 'l5',
            label: 'USA',
        },
        skills: [
            {
                value: 's1',
                label: 'HTML',
            },
            {
                value: 's3',
                label: 'JavaScript',
            },
            {
                value: 's4',
                label: 'Selenium',
            },
        ],
        profilePhoto:
            'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2F93244b0f-e684-4bab-8319-d907f763cb49?alt=media&token=76590745-e58d-4aa1-9f6e-d60d931f2c4d',
        doj: '2009-02-15',
        gender: 'female',
        email: 'skylar.white@qburst.com',
        name: 'Skylar White',
        department: {
            value: 'd2',
            label: 'Quality Assurance',
        },
        address: '789 Elm Avenue, Sometown',
        updatedAt: {
            seconds: 1697569533,
            nanoseconds: 978000000,
        },
        empId: 1002,
        id: 'T5MEpSvfhl9YhbGxpwzA',
    },
    {
        empId: 1012,
        department: { value: 'd1', label: 'Development' },
        profilePhoto:
            'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2F4c00fa74-d3ec-473d-9706-f1b7799a29c1?alt=media&token=9fe3f8b0-8017-468d-bcfb-a9555229195f',
        role: {
            value: 'r2',
            label: 'Senior Engineer',
        },
        updatedAt: {
            seconds: 1697619290,
            nanoseconds: 938000000,
        },
        dob: '1996-05-22',
        name: 'Sophia Wilson',
        skills: [
            {
                value: 's1',
                label: 'HTML',
            },
            {
                value: 's2',
                label: 'CSS',
            },
        ],
        gender: 'female',
        doj: '2021-03-20',
        location: {
            value: 'l6',
            label: 'UAE',
        },
        address: '222 Cedar Lane, Countryside',
        email: 'sophia.wilson@qburst.com',
        id: 'RLpw2Gt8fLiFtxBRTyQP',
    },
    {
        doj: '2007-02-15',
        gender: 'male',
        dob: '1973-07-10',
        empId: 1001,
        name: 'Walter White',
        location: {
            value: 'l7',
            label: 'Canada',
        },
        email: 'walter.white@qburst.com',
        department: {
            value: 'd2',
            label: 'Quality Assurance',
        },
        role: { value: 'r1', label: 'Engineer' },
        address: '789 Elm Avenue, Sometown',
        profilePhoto:
            'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fead5e7e3-0899-4071-a474-f3930e7ca67c?alt=media&token=6d67d92b-f948-4126-bfcb-48bcd6c1ffc5',
        skills: [
            {
                value: 's3',
                label: 'JavaScript',
            },
            {
                value: 's4',
                label: 'Selenium',
            },
        ],
        updatedAt: {
            seconds: 1697641762,
            nanoseconds: 832000000,
        },
        id: 'V1zUzpNPn1wvWhSyOkZt',
    },
];

const empTableHeaders = [
    { value: 'id', label: 'Emp ID' },
    { value: 'firstName', label: 'Name' },
    { value: 'email', label: 'Email' },
    { value: 'role', label: 'Role' },
    { value: 'department', label: 'Department' },
    { value: 'actions', label: 'Actions' },
];

const locations = [
    { value: 'l1', label: 'Trivandrum' },
    { value: 'l2', label: 'Kochi' },
    { value: 'l3', label: 'Chennai' },
    { value: 'l4', label: 'Noida' },
    { value: 'l5', label: 'USA' },
    { value: 'l6', label: 'UAE' },
    { value: 'l7', label: 'Canada' },
    { value: 'l8', label: 'Japan' },
];

const departments = [
    { value: 'd1', label: 'Development' },
    { value: 'd2', label: 'Quality Assurance' },
    { value: 'd3', label: 'DevOps' },
    { value: 'd4', label: 'Executive' },
];

const roles = [
    { value: 'r1', label: 'Engineer' },
    { value: 'r2', label: 'Senior Engineer' },
    { value: 'r3', label: 'CEO' },
    { value: 'r4', label: 'Director' },
    { value: 'r5', label: 'Intern' },
];

const skills = [
    { value: 's1', label: 'HTML' },
    { value: 's2', label: 'CSS' },
    { value: 's3', label: 'JavaScript' },
    { value: 's4', label: 'Selenium' },
    { value: 's5', label: 'Project Management' },
];

const genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'others', label: 'Others' },
];

export {
    empTableHeaders,
    employeesList,
    departments,
    roles,
    locations,
    skills,
    genders,
};
