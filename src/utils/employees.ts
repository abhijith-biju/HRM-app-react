import { employeesList } from '../pages/EmployeeListing/constants';

// export const mapValueToLabel = (
//     refValue: string,
//     refArray: { value: string; label: string }[]
// ) => {
//     for (const obj of refArray) {
//         if (obj.value === refValue) {
//             return obj.label;
//         }
//     }
//     return 'N/A';
// };

export const getEmployeeDetails = (employeeId: number | undefined) => {
    return employeesList.find((employee) => employee.empId === employeeId);
};
