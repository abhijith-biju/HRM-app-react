import { IEmployee, IDepartment } from '../interfaces/interfaces';

export const mapIdToValue = (
    employeesData: IEmployee[],
    refArray: IDepartment[],
    property: keyof IEmployee
) => {
    const newEmployeeData = structuredClone(employeesData);
    console.log('***inside function***');
    employeesData.forEach((employee: any, index: number) => {
        // const deptIndex = refArray.find((dept) => {
        //     return employee[property] === dept.id;
        // });

        // if (deptIndex) {
        //     newEmployeeData[index][property] != deptIndex.value;
        // }
        newEmployeeData[index][property] !=
            refArray.find((dept) => {
                return employee.department === dept.id;
            })!.value;

        console.log(
            refArray.find((dept) => {
                return employee.department === dept.id;
            })!.value
        );

        // console.log('inside function');
        // for (const emp of newEmployeeData) {
        //     console.log(emp.department);
        // }
    });
};

// interface IMapIdToValue {
//     employeesData: IEmployee[];
//     refArray: IDepartment[];
//     property: string;
// }
