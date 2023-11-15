import StyledEditEmployeeDetails from './EditEmployeeDetails.style';
import { EmployeeDetailsForm } from '../../components';
import { useParams } from 'react-router-dom';
import { getEmployeeDetails } from '../../utils/employees';

const EditEmployeeDetails: React.FC = () => {
    const { employeeId } = useParams();

    if (!employeeId) {
        throw new Response('Not Found', { status: 404 });
    }

    const employeeDetails = getEmployeeDetails(parseInt(employeeId));
    if (!employeeDetails) {
        throw new Response('Not Found', { status: 404 });
    }

    return (
        <StyledEditEmployeeDetails>
            <h2 className="text-center">Edit Employee Details</h2>
            <EmployeeDetailsForm prefillData={employeeDetails} />
        </StyledEditEmployeeDetails>
    );
};

export default EditEmployeeDetails;
