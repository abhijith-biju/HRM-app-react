import { Formik, Form } from 'formik';
import { Button, CustomInput, Textarea, CustomRadioGroup } from '..';
import StyledForm from './SampleForm.style';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import CustomSelect from '../common/CustomSelect/CustomSelect';
import {
    roles,
    departments,
    locations,
    skills,
    genders,
} from '../../pages/EmployeeListing/constants';

import validate from './validation';

const SampleForm = () => {
    const [profilePicture, setProfilePicture] = useState(
        '/src/assets/images/employee-avatar.svg'
    );

    const profilePictureInputHandler = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (e.target.files) {
            const imgFile = e.target.files[0];
            setProfilePicture(URL.createObjectURL(imgFile));
        }
    };

    const initialValues = {
        profilePicture: '',
        firstName: 'abhijith',
        email: 'add@qburst.com',
        dob: '',
        gender: 'male',
        address: 'asdfghjkl;zxcvbnm,',
        role: '',
        department: '',
        doj: '',
        location: '',
        skills: '',
    };

    return (
        <StyledForm>
            <Formik
                initialValues={initialValues}
                validationSchema={validate}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form autoComplete="off">
                    <div className="flex form-row">
                        <label
                            htmlFor="profilePicture"
                            className="profile-picture-wrap"
                        >
                            <img
                                src={profilePicture}
                                alt="employee profile picture"
                                title="Add a profile photo"
                                draggable="false"
                            />
                            <input
                                type="file"
                                className="display-none"
                                name="profilePicture"
                                id="profilePicture"
                                accept="image/*"
                                onChange={profilePictureInputHandler}
                            />
                        </label>
                    </div>
                    <div className="flex form-row">
                        <div className="form-entry">
                            <CustomInput
                                label="First Name"
                                name="firstName"
                                id="firstName"
                                type="text"
                                className="form-entry"
                            />
                        </div>
                        <div className="form-entry">
                            <CustomInput
                                label="Email"
                                name="email"
                                id="email"
                                type="email"
                                className="form-entry"
                                placeholder="user@qburst.com"
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
                                className="form-entry"
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
                            <Textarea label="Address" name="address" rows="3" />
                        </div>
                    </div>
                    <div className="flex form-row">
                        <div className="form-entry">
                            <CustomSelect
                                name="role"
                                label="Role"
                                options={roles}
                                placeholder="Select a Role"
                            />
                        </div>
                        <div className="form-entry">
                            <CustomSelect
                                name="department"
                                label="Department"
                                options={departments}
                                placeholder="Select a Department"
                            />
                        </div>
                    </div>
                    <div className="flex form-row">
                        <div className="form-entry">
                            <CustomInput
                                label="Date of Joining"
                                name="doj"
                                type="date"
                                className="form-entry"
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
                                options={skills}
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
                </Form>
            </Formik>
        </StyledForm>
    );
};

export default SampleForm;
