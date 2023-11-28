import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import {
    Button,
    CustomInput,
    CustomTextarea,
    // CustomRadioGroup,
    CustomSelect,
} from '..';
import StyledFormWrap from './EmployeeDetailsForm.style';
// import { locations, genders } from '../../pages/EmployeeListing/constants';
import validate from './validation';
import { useAppContext } from '../../core/contexts/AppContext';
import { IEmployeeSubmission } from '../../interfaces/common';
import handleFormSubmit from './handleFormSubmit';

interface IEmployeeDetailsForm {
    empId?: string | null;
    prefillData?: IEmployeeSubmission;
}

const EmployeeDetailsForm: React.FC<IEmployeeDetailsForm> = ({
    empId = null,
    prefillData = {
        firstName: 'abhib',
        lastName: '',
        isActive: true,
        dob: '2017-06-01',
        email: 'abhib@qburst.com',
        phone: '1234567890',
        designation: '',
        salary: '',
        dateOfJoining: '2001-06-01',
        address: 'abc street, pqr',
        role: null,
        department: null,
        skills: [],
        moreDetails: '',
    },
}) => {
    const { appState } = useAppContext();

    // code to handle profile picture

    // const [profilePhoto, setProfilePhoto] = useState(
    //     prefillData.profilePhoto || '/src/assets/images/employee-avatar.svg'
    // );

    // const photoUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files) {
    //         const imgFile = e.target.files[0];
    //         setProfilePhoto(URL.createObjectURL(imgFile));
    //     }
    // };

    return (
        <StyledFormWrap>
            <Formik
                initialValues={prefillData}
                validationSchema={validate}
                onSubmit={(values) => {
                    console.log('submit button clicked');
                    handleFormSubmit(values, empId);
                }}
            >
                {(props) => {
                    return (
                        <form
                            autoComplete="off"
                            onSubmit={props.handleSubmit}
                            noValidate
                        >
                            <div className="flex">
                                <pre>
                                    {JSON.stringify(props.values, null, 2)}
                                    {/* {JSON.stringify(props.touched, null, 2)} */}
                                </pre>
                            </div>

                            {/* code to handle profile picture  */}

                            {/* <div className="flex form-row">
                                <label
                                    htmlFor="profilePhoto"
                                    className="profile-picture-wrap"
                                >
                                    <img
                                        src={profilePhoto}
                                        alt="employee profile photo"
                                        title="Add a profile photo"
                                        draggable="false"
                                    />
                                    <input
                                        type="file"
                                        className="display-none"
                                        name="profilePhoto"
                                        id="profilePhoto"
                                        accept="image/*"
                                        onChange={photoUploadHandler}
                                    />
                                </label>
                            </div> */}
                            <div className="flex form-row">
                                <div className="form-entry">
                                    <CustomInput
                                        label="First Name"
                                        name="firstName"
                                        id="name"
                                        type="text"
                                    />
                                </div>
                                <div className="form-entry">
                                    <CustomInput
                                        label="Email"
                                        name="email"
                                        id="email"
                                        placeholder="user@qburst.com"
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className="flex form-row">
                                <div className="form-entry">
                                    <CustomInput
                                        label="Date of Birth"
                                        name="dob"
                                        id="dob"
                                        type="date"
                                    />
                                </div>
                                {/* <CustomRadioGroup
                                    id="gender"
                                    label="Gender"
                                    name="gender"
                                    options={genders}
                                    className="form-entry"
                                /> */}
                            </div>
                            <div className="flex form-row">
                                <div className="form-entry">
                                    <CustomTextarea
                                        label="Address"
                                        name="address"
                                        rows="3"
                                    />
                                </div>
                            </div>
                            <div className="flex form-row">
                                <div className="form-entry">
                                    <CustomSelect
                                        name="role"
                                        label="Role"
                                        options={appState.roles}
                                        placeholder="Select a Role"
                                    />
                                </div>
                                <div className="form-entry">
                                    <CustomSelect
                                        name="department"
                                        label="Department"
                                        options={appState.departments}
                                        placeholder="Select a Department"
                                    />
                                </div>
                            </div>
                            <div className="flex form-row">
                                <div className="form-entry">
                                    <CustomInput
                                        label="Date of Joining"
                                        name="dateOfJoining"
                                        type="date"
                                    />
                                </div>
                                {/* <div className="form-entry">
                                    <CustomSelect
                                        name="location"
                                        label="Location"
                                        options={locations}
                                        placeholder="Select a Location"
                                    />
                                </div> */}
                            </div>
                            <div className="flex form-row">
                                <div className="form-entry skills-input-container">
                                    <CustomSelect
                                        name="skills"
                                        label="Skills"
                                        options={appState.skills}
                                        placeholder="Select one or more skills"
                                        isMulti
                                        closeMenuOnSelect={false}
                                    />
                                </div>
                            </div>
                            <div className="form-controls-container flex">
                                <Link to="/">
                                    <Button className="outline" type="button">
                                        CANCEL
                                    </Button>
                                </Link>
                                <Button className="primary" type="submit">
                                    SUBMIT
                                </Button>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </StyledFormWrap>
    );
};

export default EmployeeDetailsForm;
