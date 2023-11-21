import {
    Button,
    Input,
    TableFilters,
    Flex,
    Modal,
    EmployeesTable,
} from '../../components';
import { empTableHeaders, employeesList, skills } from './constants';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IEmployee } from '../../interfaces/interfaces';
import Select from 'react-select';
import { CustomSelectStyles } from './EmployeeListing.style';
// import { useAppContext } from '../../core/contexts/AppContext';

const EmployeesListing: React.FC = () => {
    // const appContext = useAppContext();
    // const state = appContext;
    // console.log(state);
    const [isModalopen, setisModalOpen] = useState(false);

    const getEmployeesTableData = (employeesList: IEmployee[]) => {
        const newEmployeesList = JSON.parse(JSON.stringify(employeesList));

        for (const employee of newEmployeesList) {
            employee.department = employee.department.label;
            employee.role = employee.role.label;
            employee.actions = (
                <ul className="employee-actions flex-container">
                    <li>
                        <Link to={`/view-employee/${employee.empId}`}>
                            <Button
                                type="button"
                                className="view-emp-btn flex-container"
                            >
                                <span className="material-symbols-rounded">
                                    visibility
                                </span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/edit-employee/${employee.empId}`}>
                            <Button
                                type="button"
                                className="edit-emp-btn flex-container"
                            >
                                <span className="material-symbols-rounded">
                                    edit_square
                                </span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button
                            type="button"
                            className="delete-emp-btn flex-container"
                            onClick={() => setisModalOpen(true)}
                        >
                            <span className="material-symbols-rounded">
                                delete
                            </span>
                        </Button>
                    </li>
                </ul>
            );
        }
        return newEmployeesList;
    };

    const employeesTableData = getEmployeesTableData(employeesList);

    return (
        <>
            <section>
                <Flex className="gap-15p">
                    <TableFilters>
                        <Input placeholder="Search by Employee Name" />
                        <Select
                            options={skills}
                            name="searchSkills"
                            isMulti
                            closeMenuOnSelect={false}
                            styles={CustomSelectStyles}
                            placeholder="Filter by skills"
                        />
                        <Button className="outline icon-btn margin-left-auto">
                            <span>Clear Filters</span>
                            <span className="material-symbols-rounded">
                                filter_alt_off
                            </span>
                        </Button>
                    </TableFilters>
                    <Link to="/add-employee">
                        <Button className="primary icon-btn">
                            <span>Add Employee</span>
                            <span className="material-symbols-rounded">
                                person_add
                            </span>
                        </Button>
                    </Link>
                </Flex>
                <EmployeesTable
                    tableHeaders={empTableHeaders}
                    tableData={employeesTableData}
                    onClick={() => setisModalOpen(false)}
                />
            </section>

            <Modal
                $isOpen={isModalopen}
                text="Are you sure you want to permanently delete the employee
                    record?"
                type="yesCancel"
                confirmClickHandler={() => setisModalOpen(false)}
                cancelClickHandler={() => setisModalOpen(false)}
            />
        </>
    );
};

export default EmployeesListing;
