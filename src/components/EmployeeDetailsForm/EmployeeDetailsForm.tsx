import { useState, useRef } from 'react';
import { Formik } from 'formik';
import {
    Button,
    CustomInput,
    CustomTextarea,
    CustomRadioGroup,
    CustomSelect,
    Loader,
    LinkButton,
} from '..';
import StyledFormWrap from './EmployeeDetailsForm.style';
import {
    genders,
    locations,
    prefillDataOnEmployeeAdd,
} from '../../pages/ManageEmployees/constants';
import validate from './validation';
import { useAppContext } from '../../core/contexts/AppContext';
import { IEmployee } from '../../interfaces/common';
import handleFormSubmit from './handleFormSubmit';
import { useNavigate } from 'react-router-dom';

interface IEmployeeDetailsForm {
    empId?: string | null;
    prefillData?: IEmployee;
}

const EmployeeDetailsForm: React.FC<IEmployeeDetailsForm> = ({
    empId = null,
    prefillData = {
        ...prefillDataOnEmployeeAdd,
    },
}) => {
    const { appState } = useAppContext();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [photoId, setPhotoId] = useState(
        prefillData.photoId === ''
            ? '/src/assets/images/employee-avatar.svg'
            : prefillData.photoId
    );
    const photoRef = useRef<HTMLInputElement>(null);

    const photoUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const imgFile = e.target.files[0];
            setPhotoId(URL.createObjectURL(imgFile));
        }
    };

    return (
        <>
            {loading ? (
                <Loader className="full-screen-loader" />
            ) : (
                <StyledFormWrap>
                    <Formik
                        initialValues={prefillData}
                        validationSchema={validate}
                        onSubmit={async (values) => {
                            setLoading(true);
                            await handleFormSubmit(
                                values,
                                empId,
                                photoRef.current
                            );
                            navigate(`/`);
                            setLoading(false);
                        }}
                    >
                        {(props) => {
                            return (
                                <form
                                    autoComplete="off"
                                    onSubmit={props.handleSubmit}
                                    noValidate
                                >
                                    <div className="flex form-row">
                                        <label
                                            htmlFor="photoId"
                                            className="profile-picture-wrap"
                                        >
                                            <img
                                                src={photoId}
                                                alt="employee profile photo"
                                                title="Add a profile photo"
                                                draggable="false"
                                            />
                                            <input
                                                type="file"
                                                className="display-none"
                                                name="photoId"
                                                id="photoId"
                                                accept="image/*"
                                                ref={photoRef}
                                                onChange={photoUploadHandler}
                                            />
                                        </label>
                                    </div>
                                    <div className="flex form-row">
                                        <div className="form-entry">
                                            <CustomInput
                                                label="Full Name"
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
                                        <CustomRadioGroup
                                            id="gender"
                                            label="Gender"
                                            name="gender"
                                            options={genders}
                                            className="form-entry"
                                        />
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
                                        <div className="form-entry">
                                            <CustomSelect
                                                name="location"
                                                label="Location"
                                                options={locations}
                                                placeholder="Select a Location"
                                            />
                                        </div>
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
                                        <LinkButton
                                            to="/employees"
                                            className="outline"
                                        >
                                            CANCEL
                                        </LinkButton>
                                        <Button
                                            className="primary"
                                            type="submit"
                                            disabled={props.isSubmitting}
                                        >
                                            SUBMIT
                                        </Button>
                                    </div>
                                </form>
                            );
                        }}
                    </Formik>
                </StyledFormWrap>
            )}
        </>
    );
};

export default EmployeeDetailsForm;
