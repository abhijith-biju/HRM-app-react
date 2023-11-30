import { IOption } from '../components/common/CustomSelect/CustomSelect';
import {
    IEmployeeListing,
    IEmployeeSubmission,
    ISkill,
} from '../interfaces/common';
import { IApiEmployee } from '../interfaces/ApiDataInterface';
import { Button, LinkButton } from '../components';

//modify fetched employee details to format for employee listing table
export const getEmployeesListingData = (
    employeesList: IApiEmployee[],
    setIsModalOpen: (isOpen: boolean) => void,
    setEmpIdToDelete: (id: number | undefined) => void
) => {
    const newEmpList: IEmployeeListing[] = [];
    for (const emp of employeesList) {
        const newEmp: IEmployeeListing = {
            id: emp.id,
            firstName: emp.firstName,
            email: emp.email,
            department: emp.department ? emp.department.department : 'N/A',
            role: emp.role ? emp.role.role : 'N/A',
            skills: emp.skills.map((skill) => skill.id),
            actions: (
                <ul className="employee-actions flex-container">
                    <li>
                        <LinkButton
                            to={`/view-employee/${emp.id}`}
                            className="view-emp-btn flex-container"
                        >
                            <span className="material-symbols-rounded">
                                visibility
                            </span>
                        </LinkButton>
                    </li>
                    <li>
                        <LinkButton
                            to={`/edit-employee/${emp.id}`}
                            className="edit-emp-btn flex-container"
                        >
                            <span className="material-symbols-rounded">
                                edit_square
                            </span>
                        </LinkButton>
                    </li>
                    <li>
                        <Button
                            type="button"
                            className="delete-emp-btn flex-container"
                            onClick={() => {
                                setEmpIdToDelete(emp.id);
                                setIsModalOpen(true);
                            }}
                        >
                            <span className="material-symbols-rounded">
                                delete
                            </span>
                        </Button>
                    </li>
                </ul>
            ),
        };
        newEmpList.push(newEmp);
    }
    return newEmpList;
};

//modify option object to {value: string, label: string}
export const modifySelectOption = (optionObj: any, curLabelKey: string) => {
    if (optionObj) {
        return {
            value: String(optionObj.id),
            label: String(optionObj[curLabelKey]),
        } as ISkill;
    }
    return { value: '0', label: 'N/A' };
};

//modify each option object in options array to {value: string, label: string}
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

// modify fetched employee details to format required for employee form
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
