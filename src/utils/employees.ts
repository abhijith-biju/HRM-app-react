import { employeesList } from '../pages/EmployeeListing/constants';
import { IOption } from '../components/common/CustomSelect/CustomSelect';
import { IEmployeeListing } from '../interfaces/common';
import { IApiEmployee } from '../interfaces/ApiDataInterface';

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

export const getEmployeesListingData = (employeesList: IApiEmployee[]) => {
    const newEmpList: IEmployeeListing[] = [];
    for (const emp of employeesList) {
        const newEmp = {
            id: emp.id,
            firstName: emp.firstName,
            email: emp.email,
            phone: emp.phone,
        } as IEmployeeListing;
        newEmp.department = emp.department ? emp.department.department : 'N/A';
        newEmp.role = emp.role ? emp.role.role : 'N/A';

        newEmpList.push(newEmp);
    }
    return newEmpList;
};

// export const mapSelectObjtoValue = (selectObject: IOption) => {
//     return selectObject.value;
// };

// export const modifySelectOption = (optionObj: any, curLabelKey: string) => {
//     if (optionObj) {
//         return { value: String(optionObj.id), label: optionObj[curLabelKey] };
//     }
//     return { value: '0', label: 'N/A' };
// };

// export const modifyFetchEmployeesList = (employeesList: IApiEmployee[]) => {
//     const newEmpList: IEmployee[] = [];
//     for (const emp of employeesList) {
//         const newEmp = {
//             id: emp.id,
//             firstName: emp.firstName,
//             lastName: emp.lastName,
//             isActive: emp.isActive,
//             dob: emp.dob,
//             email: emp.email,
//             phone: emp.phone,
//             designation: emp.designation,
//             salary: emp.salary,
//             dateOfJoining: emp.dateOfJoining,
//             address: emp.address,
//             moreDetails: emp.moreDetails,
//         } as IEmployee;
//         newEmp.department = modifySelectOption(emp.department, 'department');
//         newEmp.role = modifySelectOption(emp.role, 'role');
//         newEmp.skills = [];
//         for (const skillObj of emp.skills) {
//             newEmp.skills.push(modifySelectOption(skillObj, 'skill'));
//         }

//         newEmpList.push(newEmp);
//     }
//     return newEmpList;
// };

// export const modifyFetchEmployeesList = (employeesList: IApiEmployee[]) => {
//     const newEmpList: IEmployee[] = employeesList.map((emp) => ({
//         // department: modifySelectOption(emp.department, 'department'),
//         // role: modifySelectOption(emp.role, 'role'),
//         // skills: emp.skills.map((skillObj) => modifySelectOption(skillObj, 'skill')),
//         ...emp,
//     }));

//     console.log(newEmpList);
// };

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
