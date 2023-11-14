import { Formik, Form } from 'formik';
import CustomInput from '../common/CustomInput/CustomInput';
import { Button } from '..';
import RadioGroup from '../common/CustomRadioGroup/RadioGroup';
import { Field } from 'formik';
// import Select from '../common/Select/Select';
import StyledSection from './ManageEmployeeDetails.style';

const SampleForm = () => {
    const initialValues = {
        firstName: '',
        email: 'add@qburst.com',
        dob: '',
        gender: '',
        role: '',
        department: '',
        doj: '',
        location: '',
        address: '',
    };

    return (
        <StyledSection>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form autoComplete="off">
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
                            {/* <Select
                                label="Role"
                                name="role"
                                className="form-entry"
                            >
                                <option value="" hidden>
                                    Select a Role
                                </option>
                                <option value="engineer">Engineer</option>
                            </Select> */}
                        </div>
                        <div className="form-entry">
                            {/* <Select
                                label="Department"
                                name="departement"
                                className="form-entry"
                            >
                                <option value="" hidden>
                                    Select a Department
                                </option>
                                <option value="development">Development</option>
                            </Select> */}
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
                            {/* <Select
                                label="Location"
                                name="location"
                                className="form-entry"
                            >
                                <option value="" hidden>
                                    Select a Location
                                </option>
                                <option value="development">Development</option>
                            </Select> */}
                        </div>
                    </div>

                    <div className="flex form-row form-controls-container ">
                        <Button className="outline" type="button">
                            cancel
                        </Button>
                        <Button className="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Formik>
        </StyledSection>
    );
};

export default SampleForm;
