import StyledAddEmployeeDetails from './AddEmployeeDetails.style';
import SampleForm from '../../components/SampleForm/SampleForm';

const AddEmployeeDetails: React.FC = () => {
    return (
        <StyledAddEmployeeDetails>
            <h2 className="text-center">Add Employee Details</h2>
            <SampleForm />
        </StyledAddEmployeeDetails>
    );
};

export default AddEmployeeDetails;
