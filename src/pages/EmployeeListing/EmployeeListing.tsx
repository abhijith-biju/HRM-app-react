import {
    Button,
    Input,
    TableFilters,
    Flex,
    Modal,
    EmployeesTable,
    Pagination,
} from '../../components';
import { empTableHeaders } from './constants';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { CustomSelectStyles } from './EmployeeListing.style';
import { useAppContext } from '../../core/contexts/AppContext';
import useApi, { API } from '../../core/api/useApi';
import {
    IApiFetchEmployees,
    IApiEmployee,
} from '../../interfaces/ApiDataInterface';
import { getEmployeesListingData } from '../../utils/employees';
import { IEmployeeListing } from '../../interfaces/common';

const EmployeesListing: React.FC = () => {
    const { appState } = useAppContext();
    const [isModalopen, setIsModalOpen] = useState(false);
    const [employees, setEmployees] = useState<IApiEmployee[]>([]);
    const [empIdtoDelete, setEmpIdToDelete] = useState<number | undefined>(
        undefined
    );
    const [fetchUrl, setFetchUrl] = useState({
        sortBy: 'id',
        sortDir: 'asc',
        limit: 10,
        offset: 0,
    });

    const employeesFetchResponse = useApi<IApiFetchEmployees>(
        'GET',
        `/employee?limit=${fetchUrl.limit}&offset=${fetchUrl.offset}&sortBy=${fetchUrl.sortBy}&sortDir=${fetchUrl.sortDir}`
    );
    useEffect(() => {
        console.log(
            'Inside employeeListing useEffect',
            employeesFetchResponse.loading
        );
        if (employeesFetchResponse.response) {
            console.log(
                'updating employee list',
                employeesFetchResponse.response.data.employees
            );
            setEmployees(employeesFetchResponse.response.data.employees);
        }
    }, [employeesFetchResponse.loading]);

    const createEmployeeLisitingData = (employeesList: IApiEmployee[]) => {
        const newEmployeesList: IEmployeeListing[] = getEmployeesListingData(
            employeesList,
            setIsModalOpen,
            setEmpIdToDelete
        );
        return newEmployeesList;
    };

    const deleteConfirmHandler = () => {
        setIsModalOpen(false);
        API({
            method: 'DELETE',
            url: `/employee/${empIdtoDelete}`,
        })
            .then(function (res) {
                console.log('Successfully deleted!', res);
                employeesFetchResponse.refresh();
            })
            .catch(function (res) {
                console.log('delete Failed!', res);
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
                <Pagination fetchUrl={fetchUrl} setFetchUrl={setFetchUrl} />
            </section>

            <Modal
                $isOpen={isModalopen}
                text="Are you sure you want to permanently delete the employee
                    record?"
                type="yesCancel"
                confirmClickHandler={deleteConfirmHandler}
                cancelClickHandler={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default EmployeesListing;
