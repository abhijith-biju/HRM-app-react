import {
    Button,
    Input,
    TableFilters,
    Flex,
    Table,
    Modal,
    Table1,
} from '../../components';
import {
    employees,
    tableHeaders,
    empTableHeaders,
    employeesList,
    departments,
    roles,
} from './constants';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const EmployeesListing: React.FC = () => {
    const [isModalopen, setisModalOpen] = useState(false);

    //remove any
    const getEmpListingData = (employeesData: any) => {
        const newEmployeeData = structuredClone(employeesData);

        employeesData.forEach((employee: any, index: number) => {
            newEmployeeData[index].department = departments.find((dept) => {
                return employee.department === dept.id;
            })?.value;
        });

        return newEmployeeData;
    };

    const newEmployeesData = getEmpListingData(employeesList);
    console.log('after');
    for (const emp of newEmployeesData) {
        console.log(emp.department);
    }

    return (
        <>
            <section>
                <Flex className="gap-15p">
                    <TableFilters>
                        <Input placeholder="Search by Employee Name" />
                        <Flex>
                            <Input placeholder="Filter By skills" />
                        </Flex>
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
                {/* <Table
                    headers={tableHeaders}
                    data={employees}
                    deleteBtnOnClick={() => setisModalOpen(true)}
                /> */}
                <Table1
                    tableHeaders={empTableHeaders}
                    tableData={employeesList}
                ></Table1>
            </section>

            <Modal $isOpen={isModalopen}>
                <p className="confirm-dialog-msg">
                    Are you sure you want to permanently delete the employee
                    record?
                </p>
                <div className="flex-container confirm-dialog-actions">
                    <Button className="outline confirm-yes-btn">Yes</Button>
                    <Button
                        className="primary confirm-no-btn"
                        onClick={() => setisModalOpen(false)}
                    >
                        Cancel
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default EmployeesListing;
