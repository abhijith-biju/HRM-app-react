import { employeesList } from '../pages/EmployeeListing/constants';
import { IOption } from '../components/common/CustomSelect/CustomSelect';
import { IEmployee } from '../interfaces/common';

export const getEmployeeDetails = (employeeId: number | undefined) => {
    return employeesList.find((employee) => employee.empId === employeeId);
};

export const renameObjKey = (obj: any, oldKey: string, newKey: string) => {
    Object.assign(obj, { [newKey]: obj[oldKey] });
    delete obj[oldKey];
    return obj;
};

export const modifySelectOptionsData = (
    optionsArr: any,
    curLabelKey: string
) => {
    const newOptionsArr: IOption[] = [];
    for (const obj of optionsArr) {
        newOptionsArr.push({ value: String(obj.id), label: obj[curLabelKey] });
    }

    return newOptionsArr;
};

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
