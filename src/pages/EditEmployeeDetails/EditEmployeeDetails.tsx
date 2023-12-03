import StyledEditEmployeeDetails from './EditEmployeeDetails.style';
import { EmployeeDetailsForm, Loader } from '../../components';
import { useParams } from 'react-router-dom';
import useApi from '../../core/api/useApi';
import { IApiFetchEmployee } from '../../interfaces/ApiDataInterface';
import { modifyFetchedEmployeeData } from '../../utils/employees';

const EditEmployeeDetails: React.FC = () => {
    const { employeeId } = useParams();
    if (!employeeId) {
        throw new Response('Not Found', { status: 404 });
    }

    const { response, loading } = useApi<IApiFetchEmployee>(
        'GET',
        `/employee/${employeeId}`
    );

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
                        <EmployeeDetailsForm
                            empId={employeeId}
                            prefillData={modifyFetchedEmployeeData(
                                response!.data
                            )}
                        />
                    )}
                </StyledEditEmployeeDetails>
            )}
        </>
    );
};

export default EditEmployeeDetails;
