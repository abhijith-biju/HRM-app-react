import {
    IEmployeeListing,
    IEmployee,
    IReactSelectOption,
} from '../interfaces/common';
import { IApiEmployee } from '../interfaces/ApiDataInterface';
import { Button, LinkButton } from '../components';
import { locations } from '../pages/ManageEmployees/constants';

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
    // console.log('old obj', optionObj);
    const newObj = {
        value: String(optionObj.id),
        label: String(optionObj[curLabelKey]),
    } as IReactSelectOption;
    // console.log('new obj', newObj);
    return newObj;
};

//modify each option object in options array to {value: string, label: string}
export const modifySelectOptionsArray = (
    optionsArr: any,
    curLabelKey: string
) => {
    const newOptionsArr: IReactSelectOption[] = [];
    for (const optionObj of optionsArr) {
        newOptionsArr.push(modifySelectOption(optionObj, curLabelKey));
    }
    return newOptionsArr;
};

// modify fetched employee details to format required for employee form
export const modifyFetchedEmployeeData = (employeeObj: IApiEmployee) => {
    const moreDetails = JSON.parse(employeeObj.moreDetails);

    const newEmployeeObj: IEmployee = {
        id: employeeObj.id,
        firstName: employeeObj.firstName || '',
        lastName: employeeObj.lastName || '',
        isActive: employeeObj.isActive || false,
        dob: employeeObj.dob || '',
        email: employeeObj.email || '',
        phone: employeeObj.phone || '',
        designation: employeeObj.designation || '',
        salary: employeeObj.salary || '',
        dateOfJoining: employeeObj.dateOfJoining || '',
        address: employeeObj.address || '',
        department: employeeObj.department
            ? modifySelectOption(employeeObj.department, 'department')
            : null,

        role: employeeObj.role
            ? modifySelectOption(employeeObj.role, 'role')
            : null,

        skills: employeeObj.skills
            ? modifySelectOptionsArray(employeeObj.skills, 'skill')
            : [],

        moreDetails: employeeObj.moreDetails,
        location: moreDetails?.location
            ? getObjectFromLabel(moreDetails.location, locations)
            : null,

        gender: moreDetails?.gender ? moreDetails.gender : '',
        photoId: moreDetails?.photoId ? moreDetails.photoId : '',
    };
    return newEmployeeObj;
};

export const getObjectFromLabel = (
    searchLabel: string,
    refArray: IReactSelectOption[]
) => {
    const targetObj = refArray.find((obj) => obj.label === searchLabel);
    return targetObj ?? null;
};
