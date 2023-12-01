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
import { toast } from 'react-toastify';
import { useAppContext } from '../../core/contexts/AppContext';
import useApi, { API } from '../../core/api/useApi';
import { IApiFetchEmployees } from '../../interfaces/ApiDataInterface';
import { IEmployeeListing } from '../../interfaces/common';
import { getEmployeesListingData } from '../../utils/employees';

const ManageEmployees: React.FC = () => {
    const { appState } = useAppContext();
    const [searchParams] = useSearchParams();

    const [isModalopen, setIsModalOpen] = useState(false);
    const [employees, setEmployees] = useState<IEmployeeListing[]>([]);
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

    const deleteConfirmHandler = async () => {
        setIsModalOpen(false);
        try {
            const res = await API({
                method: 'DELETE',
                url: `/employee/${empIdtoDelete}`,
            });
            toast.success('Employee Added Successfully');
            employeesFetchResponse.refresh();
        } catch (error) {
            toast.error('Employee deletion failed');
            console.log('delete Failed!', error);
        }
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

    useEffect(() => {
        // console.log('inside manageEmployees useEffect');
        if (employeesFetchResponse.response) {
            // console.log('fetch response obtained');
            const EmployeesData =
                employeesFetchResponse.response.data.employees;
            setEmployees(
                getEmployeesListingData(
                    EmployeesData,
                    setIsModalOpen,
                    setEmpIdToDelete
                )
            );
        }
    }, [employeesFetchResponse.loading]);

    // console.log('inside manage employee component');
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
                    tableData={
                        employees.length ? filterEmployeesList(employees) : []
                    }
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
