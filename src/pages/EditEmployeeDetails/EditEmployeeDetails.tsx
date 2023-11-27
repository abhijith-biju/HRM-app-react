import StyledEditEmployeeDetails from './EditEmployeeDetails.style';
import { EmployeeDetailsForm, Loader } from '../../components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useApi from '../../core/api/useApi';
import {
    IApiEmployee,
    IApiFetchEmployee,
} from '../../interfaces/ApiDataInterface';

const EditEmployeeDetails: React.FC = () => {
    const { employeeId } = useParams();

    if (!employeeId) {
        throw new Response('Not Found', { status: 404 });
    }
    const [employeeDetails, setEmployeeDetails] = useState({} as IApiEmployee);

    const { response, loading } = useApi<IApiFetchEmployee>(
        `/employee/${employeeId}`
    );

    useEffect(() => {
        if (response && response.data) {
            console.log(response);
            setEmployeeDetails(response.data);
        }
    }, [response]);

    return (
        <>
            {loading ? (
                <Loader className="full-screen-loader" />
            ) : (
                <StyledEditEmployeeDetails>
                    <h2 className="text-center">Edit Employee Details</h2>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <EmployeeDetailsForm prefillData={employeeDetails} />
                    )}
                </StyledEditEmployeeDetails>
            )}
        </>
    );
};

export default EditEmployeeDetails;
