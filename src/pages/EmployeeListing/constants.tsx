const employeesList = [
    {
        address: 'Abc, Pqr, Kerala, India',
        empId: 1059,
        location: 'l2',
        profilePhoto:
            'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fb9fc8e8a-8154-4e6e-979f-9bf015179333?alt=media&token=8ddae7a0-8330-4538-a26d-5c63d30ab5d9',
        gender: 'male',
        email: 'akshay.krishna@qburst.com',
        department: 'd1',
        skills: ['s1', 's2', 's3', 's4'],
        dob: '2001-01-01',
        name: 'Akshay Krishna',
        doj: '2023-07-01',
        role: 'r1',
        id: 'wVJcJpsxhwxCvZTpmKQY',
    },
    {
        address: 'abc house, pqr street, Karachi, Pakistan',
        skills: ['s3', 's2', 's1', 's4'],
        gender: 'male',
        doj: '2023-10-18',
        empId: 1037,
        department: 'd2',
        name: 'Babar Azam',
        location: 'l3',
        role: 'r4',
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
        role: 'r5',
        gender: 'male',
        skills: ['s2', 's5', 's3'],
        empId: 1035,
        location: 'l4',
        doj: '2006-10-18',
        email: 'lionel.messi@qburst.com',
        department: 'd4',
        id: 'uhh6UkGz8yrqowB36iJ5',
    },
    {
        role: 'r3',
        dob: '1978-07-10',
        location: 'l5',
        skills: ['s1', 's3', 's4'],
        profilePhoto:
            'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2F93244b0f-e684-4bab-8319-d907f763cb49?alt=media&token=76590745-e58d-4aa1-9f6e-d60d931f2c4d',
        doj: '2009-02-15',
        gender: 'female',
        email: 'skylar.white@qburst.com',
        name: 'Skylar White',
        department: 'd2',
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
        department: 'd1',
        profilePhoto:
            'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2F4c00fa74-d3ec-473d-9706-f1b7799a29c1?alt=media&token=9fe3f8b0-8017-468d-bcfb-a9555229195f',
        role: 'r2',
        updatedAt: {
            seconds: 1697619290,
            nanoseconds: 938000000,
        },
        dob: '1996-05-22',
        name: 'Sophia Wilson',
        skills: ['s1', 's2'],
        gender: 'female',
        doj: '2021-03-20',
        location: 'l6',
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
        location: 'l7',
        email: 'walter.white@qburst.com',
        department: 'd2',
        role: 'r1',
        address: '789 Elm Avenue, Sometown',
        profilePhoto:
            'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fead5e7e3-0899-4071-a474-f3930e7ca67c?alt=media&token=6d67d92b-f948-4126-bfcb-48bcd6c1ffc5',
        skills: ['s3', 's4'],
        updatedAt: {
            seconds: 1697641762,
            nanoseconds: 832000000,
        },
        id: 'V1zUzpNPn1wvWhSyOkZt',
    },
];

const employees = [
    {
        empId: 1059,
        name: 'Akshay Krishna',
        email: 'akshay.krishna@qburst.com',
        role: 'Intern',
        department: 'Development',
    },
    {
        empId: 1037,
        name: 'Babar Azam',
        email: 'babar.azam@qburst.com',
        role: 'Engineer',
        department: 'QA',
    },
];

const tableHeaders = [
    'Employee ID',
    'Name',
    'Email',
    'Role',
    'Department',
    'Actions',
];

const empTableHeaders = [
    { id: 'empId', value: 'Employee ID' },
    { id: 'name', value: 'Name' },
    { id: 'email', value: 'Email' },
    { id: 'role', value: 'Role' },
    { id: 'department', value: 'Department' },
];

const locations = [
    { id: 'l1', value: 'Trivandrum' },
    { id: 'l2', value: 'Kochi' },
    { id: 'l3', value: 'Chennai' },
    { id: 'l4', value: 'Noida' },
    { id: 'l5', value: 'USA' },
    { id: 'l6', value: 'UAE' },
    { id: 'l7', value: 'Canada' },
    { id: 'l8', value: 'Japan' },
];

const departments = [
    { id: 'd1', value: 'Development' },
    { id: 'd2', value: 'Quality Assurance' },
    { id: 'd3', value: 'DevOps' },
    { id: 'd4', value: 'Executive' },
];

const roles = [
    { id: 'r1', value: 'Engineer' },
    { id: 'r2', value: 'Senior Engineer' },
    { id: 'r3', value: 'CEO' },
    { id: 'r4', value: 'Director' },
    { id: 'r5', value: 'Intern' },
];

const skills = [
    { id: 's1', value: 'HTML' },
    { id: 's2', value: 'CSS' },
    { id: 's3', value: 'JavaScript' },
    { id: 's4', value: 'Selenium' },
    { id: 's5', value: 'Project Management' },
];

export {
    employees,
    tableHeaders,
    empTableHeaders,
    employeesList,
    departments,
    roles,
};
