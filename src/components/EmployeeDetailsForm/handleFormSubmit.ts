import { IEmployeeSubmission } from '../../interfaces/common';
import { IApiEmployeeSubmission } from '../../interfaces/ApiDataInterface';
import { API } from '../../core/api/useApi';

const handleFormSubmit = async (
    submitData: IEmployeeSubmission,
    empId: string | null
) => {
    const submissionData: IApiEmployeeSubmission = {
        ...submitData,
        department: Number(submitData.department?.value),
        role: Number(submitData.role?.value),
        skills: submitData.skills?.map((skill) => Number(skill.value)),
    };

    if (empId) {
        try {
            const respose = await API({
                method: 'PATCH',
                url: `/employee/${empId}`,
                data: submissionData,
            });
            console.log('edit success : ', respose);
        } catch (error) {
            console.log('edit failed : ', error);
        }
    } else {
        try {
            const respose = await API({
                method: 'POST',
                url: '/employee',
                data: submissionData,
            });
            console.log('edit success : ', respose);
        } catch (error) {
            console.log('edit failed : ', error);
        }
    }
};

export default handleFormSubmit;
