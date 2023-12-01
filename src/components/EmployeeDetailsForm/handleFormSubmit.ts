import { IEmployeeSubmission } from '../../interfaces/common';
import { IApiEmployeeSubmission } from '../../interfaces/ApiDataInterface';
import { API } from '../../core/api/useApi';
import { toast } from 'react-toastify';

const handleFormSubmit = async (
    submitData: IEmployeeSubmission,
    empId: string | null
) => {
    const extraDetails = {
        gender: submitData.gender,
        location: submitData.location ? submitData.location.label : null,
    };
    delete submitData.gender;
    delete submitData.location;
    delete submitData.profileId;

    const submissionData: IApiEmployeeSubmission = {
        ...submitData,
        department: Number(submitData.department?.value),
        role: Number(submitData.role?.value),
        skills: submitData.skills?.map((skill) => Number(skill.value)),
        moreDetails: JSON.stringify(extraDetails),
    };
    console.log(submissionData);

    try {
        await API({
            method: empId ? 'PATCH' : 'POST',
            url: empId ? `/employee/${empId}` : '/employee',
            data: submissionData,
        });
        toast.success(
            `Employee details ${empId ? 'edited' : 'added'} successfully`
        );
    } catch (error) {
        toast.error(`${empId ? 'Edit' : 'Add'} employee details failed`);
        console.log(`${empId ? 'Edit' : 'Add'} failed`, error);
    }
};

export default handleFormSubmit;
