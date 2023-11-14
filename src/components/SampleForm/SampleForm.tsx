import { Formik, Form, Field } from 'formik';
import { Button, CustomInput, Textarea, RadioGroup } from '..';
import Select from '../common/Select/Select';
import StyledForm from './SampleForm.style';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        firstName: '',
        email: 'add@qburst.com',
        dob: '',
        gender: '',
        address: '',
        role: '',
        department: '',
        doj: '',
        location: '',
    };

    return (
        <StyledForm>
            <Formik
                initialValues={initialValues}
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
                                type="text"
                                className="form-entry"
                            />
                        </div>
                        <div className="form-entry">
                            <CustomInput
                                label="Email"
                                name="email"
                                type="email"
                                className="form-entry"
                            />
                        </div>
                    </div>
                    <div className="flex form-row">
                        <div className="form-entry">
                            <CustomInput
                                label="Date of Birth"
                                name="dob"
                                type="date"
                                className="form-entry"
                            />
                        </div>
                        <RadioGroup
                            id="gender"
                            label="Gender"
                            className="form-entry"
                        >
                            <label>
                                <Field
                                    type="radio"
                                    name="gender"
                                    value="male"
                                />
                                Male
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="gender"
                                    value="female"
                                />
                                Female
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="gender"
                                    value="others"
                                />
                                Others
                            </label>
                        </RadioGroup>
                    </div>
                    <div className="flex form-row">
                        <div className="form-entry">
                            <Textarea label="Address" name="address" rows="3" />
                        </div>
                    </div>
                    <div className="flex form-row">
                        <div className="form-entry">
                            <Select
                                label="Role"
                                name="role"
                                className="form-entry"
                            >
                                <option value="" hidden>
                                    Select a Role
                                </option>
                                <option value="engineer">Engineer</option>
                            </Select>
                        </div>
                        <div className="form-entry">
                            <Select
                                label="Department"
                                name="departement"
                                className="form-entry"
                            >
                                <option value="" hidden>
                                    Select a Department
                                </option>
                                <option value="development">Development</option>
                            </Select>
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
                            <Select
                                label="Location"
                                name="location"
                                className="form-entry"
                            >
                                <option value="" hidden>
                                    Select a Location
                                </option>
                                <option value="development">Development</option>
                            </Select>
                        </div>
                    </div>
                    <div className="flex form-row">
                        <div className="form-entry skills-input-container">
                            <Select
                                label="Location"
                                name="location"
                                className="form-entry"
                            >
                                <option value="" hidden>
                                    Select a Location
                                </option>
                                <option value="development">Development</option>
                            </Select>
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
