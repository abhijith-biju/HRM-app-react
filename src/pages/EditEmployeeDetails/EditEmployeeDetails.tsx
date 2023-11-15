import StyledEditEmployeeDetails from './EditEmployeeDetails.style';
import { EmployeeDetailsForm } from '../../components';

const EditEmployeeDetails: React.FC = () => {
    return (
        <StyledEditEmployeeDetails>
            <h2 className="text-center">Edit Employee Details</h2>
            <EmployeeDetailsForm />
        </StyledEditEmployeeDetails>
    );
};

export default EditEmployeeDetails;
