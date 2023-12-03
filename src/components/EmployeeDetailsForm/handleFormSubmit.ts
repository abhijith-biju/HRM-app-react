import { IEmployee } from '../../interfaces/common';
import { IApiEmployeeSubmission } from '../../interfaces/ApiDataInterface';
import { API } from '../../core/api/useApi';
import { toast } from 'react-toastify';
import { getPhotoUrl } from '../../core/api/firebase';

const handleFormSubmit = async (
    submitData: IEmployee,
    empId: string | null,
    photoRef: HTMLInputElement | null
) => {
    let photoUrl = '';
    try {
        if (submitData.photoId) {
            photoUrl = submitData.photoId;
        }

        if (photoRef?.files && photoRef?.files[0]) {
            photoUrl = await getPhotoUrl(photoRef.files[0]);
        }
    } catch (error) {
        toast.error('Profile photo could not be uploaded.');
        console.log(error);
    }

    const extraDetails = {
        gender: submitData.gender,
        location: submitData.location ? submitData.location.label : null,
        photoId: photoUrl,
    };
    // delete submitData.gender;
    // delete submitData.location;
    // delete submitData.photoId;

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
            `Employee details ${empId ? 'edited' : 'added'} successfully.`
        );
    } catch (error) {
        toast.error(`${empId ? 'Edit' : 'Add'} employee details failed.`);
        console.log(`${empId ? 'Edit' : 'Add'} failed`, error);
    }
};

export default handleFormSubmit;
