import { IEmployeeSubmission } from '../../interfaces/common';
import { IApiEmployeeSubmission } from '../../interfaces/ApiDataInterface';
import { API } from '../../core/api/useApi';

interface IHandleSubmit {
    (submitData: IEmployeeSubmission, empId: string | null): void;
}

const handleFormSubmit: IHandleSubmit = (submitData, empId) => {
    const submissionData: IApiEmployeeSubmission = {
        ...submitData,
        department: Number(submitData.department?.value),
        role: Number(submitData.role?.value),
        skills: submitData.skills?.map((skill) => Number(skill.value)),
    };

    if (empId) {
        API({
            method: 'PATCH',
            url: `/employee/${empId}`,
            data: submissionData,
        })
            .then(function (res) {
                console.log(res);
                alert('Successfully submitted!');
            })
            .catch(function (res) {
                console.log(res);
            });
    } else {
        API({
            method: 'POST',
            url: '/employee',
            data: submissionData,
        })
            .then(function (res) {
                console.log(res);
                alert('Successfully submitted!');
            })
            .catch(function (res) {
                console.log(res);
            });
    }
};

export default handleFormSubmit;
