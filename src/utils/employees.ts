import { employeesList } from '../pages/EmployeeListing/constants';
import { IOption } from '../components/common/CustomSelect/CustomSelect';
import {
    IEmployeeListing,
    IEmployeeSubmission,
    ISkill,
} from '../interfaces/common';
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
        const newEmp: IEmployeeListing = {
            id: emp.id,
            firstName: emp.firstName,
            email: emp.email,
            department: emp.department ? emp.department.department : 'N/A',
            role: emp.role ? emp.role.role : 'N/A',
            actions: '',
        };
        newEmpList.push(newEmp);
    }
    return newEmpList;
};

export const modifySelectOption = (optionObj: any, curLabelKey: string) => {
    if (optionObj) {
        return {
            value: String(optionObj.id),
            label: String(optionObj[curLabelKey]),
        } as ISkill;
    }
    return { value: '0', label: 'N/A' };
};

export const modifyFetchEmployeeToSubmit = (employeeObj: IApiEmployee) => {
    const newEmployeeObj = {
        firstName: employeeObj.firstName,
        lastName: employeeObj.lastName,
        isActive: employeeObj.isActive,
        dob: employeeObj.dob,
        email: employeeObj.email,
        phone: employeeObj.phone,
        designation: employeeObj.designation,
        salary: employeeObj.salary,
        dateOfJoining: employeeObj.dateOfJoining,
        address: employeeObj.address,
        moreDetails: employeeObj.moreDetails,
    } as IEmployeeSubmission;

    newEmployeeObj.department = modifySelectOption(
        employeeObj.department,
        'department'
    );
    newEmployeeObj.role = modifySelectOption(employeeObj.role, 'role');
    const skillArr: ISkill[] = [];
    for (const skillObj of employeeObj.skills) {
        skillArr.push(modifySelectOption(skillObj, 'skill'));
    }
    newEmployeeObj.skills = skillArr;
    return newEmployeeObj;
};

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
