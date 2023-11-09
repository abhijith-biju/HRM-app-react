import { employeesList } from '../pages/EmployeeListing/constants';

export const mapIdToValue = (
    refId: string,
    refArray: { id: string; value: string }[]
) => {
    for (const obj of refArray) {
        if (obj.id === refId) {
            return obj.value;
        }
    }
    return 'N/A';
};

export const getEmployeeDetails = (employeeId: number | undefined) => {
    return employeesList.find((employee) => employee.empId === employeeId);
};
