import StyledEditEmployeeDetails from './EditEmployeeDetails.style';
import SampleForm from '../../components/SampleForm/SampleForm';

const EditEmployeeDetails: React.FC = () => {
    return (
        <StyledEditEmployeeDetails>
            <h2 className="text-center">Edit Employee Details</h2>
            <SampleForm />
        </StyledEditEmployeeDetails>
    );
};

export default EditEmployeeDetails;
