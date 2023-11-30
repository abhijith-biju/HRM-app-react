import { useState, useEffect } from 'react';
import { empTableHeaders } from './constants';
import {
    StyledManageEmployeesWrap,
    StyledEmployeesTable,
} from './ManageEmployees.style';
import { useSearchParams } from 'react-router-dom';
import {
    Modal,
    Pagination,
    EmployeesTableFilter,
    LinkButton,
} from '../../components';
import { useAppContext } from '../../core/contexts/AppContext';
import useApi, { API } from '../../core/api/useApi';
import {
    IApiFetchEmployees,
    IApiEmployee,
} from '../../interfaces/ApiDataInterface';
import { IEmployeeListing } from '../../interfaces/common';
import { getEmployeesListingData } from '../../utils/employees';

const ManageEmployees: React.FC = () => {
    const { appState } = useAppContext();
    const [searchParams] = useSearchParams();

    const [isModalopen, setIsModalOpen] = useState(false);
    const [employees, setEmployees] = useState<IApiEmployee[]>([]);
    const [empIdtoDelete, setEmpIdToDelete] = useState<number | undefined>(
        undefined
    );

    const getFetchURL = () => {
        const limit = searchParams.get('limit') ?? '10';
        const offset = searchParams.get('offset') ?? '0';
        const sortBy = searchParams.get('sortBy') ?? 'id';
        const sortDir = searchParams.get('sortDir') ?? 'desc';
        return `/employee?limit=${limit}&offset=${offset}&sortBy=${sortBy}&sortDir=${sortDir}`;
    };

    const createEmployeeListingData = (employeesList: IApiEmployee[]) => {
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

    const filterEmployeesList = (employeesList: IEmployeeListing[]) => {
        return employeesList.filter((employee) => {
            let shouldInclude = true;

            const employeeName = employee.firstName.trim().toLowerCase();
            const selectedSkillsForFilter = appState.skillsFilter.map((skill) =>
                Number(skill.value)
            );
            if (!(employeeName.indexOf(appState.employeeNameFilter) > -1)) {
                shouldInclude = false;
            }

            if (
                !selectedSkillsForFilter.every((skill) =>
                    employee['skills'].includes(skill)
                )
            ) {
                shouldInclude = false;
            }

            return shouldInclude;
        });
    };

    const employeesFetchResponse = useApi<IApiFetchEmployees>(
        'GET',
        getFetchURL()
    );

    if (!employeesFetchResponse.loading) {
        const fl = filterEmployeesList(createEmployeeListingData(employees));

        console.log('filtered List', fl);
        console.log('length', fl.length);
    }

    useEffect(() => {
        if (employeesFetchResponse.response) {
            setEmployees(employeesFetchResponse.response.data.employees);
        }
    }, [employeesFetchResponse.loading]);

    return (
        <>
            <StyledManageEmployeesWrap>
                <div className="employees-table-controls">
                    <EmployeesTableFilter />
                    <LinkButton to="/add-employee" className="primary icon-btn">
                        <span>Add Employee</span>
                        <span className="material-symbols-rounded">
                            person_add
                        </span>
                    </LinkButton>
                </div>
                <StyledEmployeesTable
                    tableHeaders={empTableHeaders}
                    tableData={createEmployeeListingData(employees)}
                    loading={employeesFetchResponse.loading}
                />
                {employeesFetchResponse.response ? (
                    <Pagination
                        totalEntries={
                            employeesFetchResponse.response.data.count
                        }
                    />
                ) : null}
            </StyledManageEmployeesWrap>

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

export default ManageEmployees;
