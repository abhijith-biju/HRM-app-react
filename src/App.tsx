import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import GlobalStyle from './globalStyles.ts';
import Button from './components/common/Button/Button.tsx';
import Input from './components/common/Input/Input.tsx';
// import Table from './components/Table.ts';

function App() {
    const employees = [
        {
            address: 'Abc, Pqr, Kerala, India',
            empId: 1059,
            location: 'Thiruvananthapuram',
            profilePhoto:
                'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fb9fc8e8a-8154-4e6e-979f-9bf015179333?alt=media&token=8ddae7a0-8330-4538-a26d-5c63d30ab5d9',
            gender: 'male',
            email: 'akshay.krishna@qburst.com',
            department: 'Development',
            skills: ['Figma', 'HTML', 'CSS', 'JavaScript'],
            dob: '2001-01-01',
            name: 'Akshay Krishna',
            doj: '2023-07-01',
            role: 'Intern',
            id: 'wVJcJpsxhwxCvZTpmKQY',
        },
        {
            address: 'abc house, pqr street, Karachi, Pakistan',
            skills: [
                'Test Automation',
                'Selenium',
                'Manual Testing',
                'Project Management',
            ],
            gender: 'male',
            doj: '2023-10-18',
            empId: 1037,
            department: 'QA',
            name: 'Babar Azam',
            location: 'USA',
            role: 'Engineer',
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
            role: 'CEO',
            gender: 'male',
            skills: [
                'Manual Testing',
                'Test Automation',
                'Python',
                'Client Presentations',
                'Figma',
                'NodeJS',
                'JavaScript',
            ],
            empId: 1035,
            location: 'USA',
            doj: '2006-10-18',
            email: 'lionel.messi@qburst.com',
            department: 'Executive',
            id: 'uhh6UkGz8yrqowB36iJ5',
        },
        {
            role: 'Director',
            dob: '1978-07-10',
            location: 'USA',
            skills: [
                'Business Analysis',
                'Client Presentations',
                'Financial reporting',
                'Project Management',
            ],
            profilePhoto:
                'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2F93244b0f-e684-4bab-8319-d907f763cb49?alt=media&token=76590745-e58d-4aa1-9f6e-d60d931f2c4d',
            doj: '2009-02-15',
            gender: 'female',
            email: 'skylar.white@qburst.com',
            name: 'Skylar White',
            department: 'Finance and Accounts',
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
            department: 'Development',
            profilePhoto:
                'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2F4c00fa74-d3ec-473d-9706-f1b7799a29c1?alt=media&token=9fe3f8b0-8017-468d-bcfb-a9555229195f',
            role: 'Senior Engineer',
            updatedAt: {
                seconds: 1697619290,
                nanoseconds: 938000000,
            },
            dob: '1996-05-22',
            name: 'Sophia Wilson',
            skills: [
                'ReactJS',
                'JavaScript',
                'AngularJS',
                'NodeJS',
                'Client Presentations',
                'Project Management',
            ],
            gender: 'female',
            doj: '2021-03-20',
            location: 'Canada',
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
            location: 'USA',
            email: 'walter.white@qburst.com',
            department: 'Finance and Accounts',
            role: 'Vice President',
            address: '789 Elm Avenue, Sometown',
            profilePhoto:
                'https://firebasestorage.googleapis.com/v0/b/hrm-app-71d9a.appspot.com/o/employees%2Fead5e7e3-0899-4071-a474-f3930e7ca67c?alt=media&token=6d67d92b-f948-4126-bfcb-48bcd6c1ffc5',
            skills: ['Project Management', 'Financial reporting'],
            updatedAt: {
                seconds: 1697641762,
                nanoseconds: 832000000,
            },
            id: 'V1zUzpNPn1wvWhSyOkZt',
        },
    ];

    return (
        <>
            <GlobalStyle />
            <main>
                <Header />
                <Button className="primary">Normal</Button>
                <Button className="outline">Primary</Button>
                <Button>Outline</Button>
                <Button className="primary icon-btn">
                    <span>Icon Button</span>
                    <span className="icon material-symbols-rounded">
                        person_add
                    </span>
                </Button>
                <Button className="icon-btn outline">
                    <span className="icon material-symbols-rounded">
                        person_add
                    </span>
                </Button>
                <Input
                    placeholder="Search by employee name"
                    className="w-full"
                />
                {/* <Table>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>
                                <div className="emp-name-heading flex-container">
                                    <span>Name</span>
                                    <button
                                        className="sort-btn"
                                        data-value="name"
                                        data-sort-order="asc"
                                    >
                                        <span className="material-symbols-rounded">
                                            arrow_upward_alt
                                        </span>
                                    </button>
                                </div>
                            </th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Department</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.empId}>
                                <td>{employee.empId}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.role}</td>
                                <td>{employee.department}</td>
                                <td>
                                    <ul
                                        className="employee-actions flex-container"
                                        data-emp-id={employee.id}
                                    >
                                        <li>
                                            <Button
                                                type="button"
                                                className="view-emp-btn flex-container"
                                            >
                                                <span className="material-symbols-rounded">
                                                    visibility
                                                </span>
                                            </Button>
                                        </li>
                                        <li>
                                            <Button
                                                type="button"
                                                className="edit-emp-btn flex-container"
                                            >
                                                <span className="material-symbols-rounded">
                                                    edit_square
                                                </span>
                                            </Button>
                                        </li>
                                        <li>
                                            <Button
                                                type="button"
                                                className="delete-emp-btn flex-container"
                                            >
                                                <span className="material-symbols-rounded">
                                                    delete
                                                </span>
                                            </Button>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table> */}
            </main>
            <Footer />
        </>
    );
}

export default App;
