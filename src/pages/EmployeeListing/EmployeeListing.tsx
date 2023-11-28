import {
    Button,
    Input,
    TableFilters,
    Flex,
    Modal,
    EmployeesTable,
} from '../../components';
import { empTableHeaders } from './constants';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { CustomSelectStyles } from './EmployeeListing.style';
import { useAppContext } from '../../core/contexts/AppContext';
import useApi from '../../core/api/useApi';
import {
    IApiFetchEmployees,
    IApiEmployee,
} from '../../interfaces/ApiDataInterface';
import { getEmployeesListingData } from '../../utils/employees';
import { IEmployeeListing } from '../../interfaces/common';
import { API } from '../../core/api/useApi';

const EmployeesListing: React.FC = () => {
    const { appState } = useAppContext();
    const [isModalopen, setisModalOpen] = useState(false);
    const [employees, setEmployees] = useState<IApiEmployee[]>([]);
    const [empIdtoDelete, setEmpIdToDelete] = useState<number | undefined>(
        undefined
    );

    const employeesFetchResponse = useApi<IApiFetchEmployees>(
        '/employee?sortBy=firstName&sortDir=asc'
    );
    useEffect(() => {
        if (employeesFetchResponse.response) {
            setEmployees(employeesFetchResponse.response.data.employees);
        }
    }, [employeesFetchResponse.loading]);

    const createEmployeeLisitingData = (employeesList: IApiEmployee[]) => {
        const newEmployeesList: IEmployeeListing[] =
            getEmployeesListingData(employeesList);
        newEmployeesList.map(
            (employee) =>
                (employee.actions = (
                    <ul className="employee-actions flex-container">
                        <li>
                            <Link to={`/view-employee/${employee.id}`}>
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
                            <Link to={`/edit-employee/${employee.id}`}>
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
                                onClick={() => {
                                    setEmpIdToDelete(employee.id);
                                    setisModalOpen(true);
                                }}
                            >
                                <span className="material-symbols-rounded">
                                    delete
                                </span>
                            </Button>
                        </li>
                    </ul>
                ))
        );
        return newEmployeesList;
    };

    const deleteConfirmHandler = () => {
        setisModalOpen(false);
        API({
            method: 'DELETE',
            url: `/employee/${empIdtoDelete}`,
        })
            .then(function (res) {
                console.log(res);
                employeesFetchResponse.refresh();
                alert('Successfully deleted!');
            })
            .catch(function (res) {
                console.log(res);
                alert('delete Failed!');
            });
    };

    return (
        <>
            <section>
                <Flex className="gap-15p">
                    <TableFilters>
                        <Input placeholder="Search by Employee Name" />
                        <Select
                            options={appState.skills}
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
                    tableData={createEmployeeLisitingData(employees)}
                    loading={employeesFetchResponse.loading}
                />
            </section>

            <Modal
                $isOpen={isModalopen}
                text="Are you sure you want to permanently delete the employee
                    record?"
                type="yesCancel"
                confirmClickHandler={deleteConfirmHandler}
                cancelClickHandler={() => setisModalOpen(false)}
            />
        </>
    );
};

export default EmployeesListing;
