import StyledAddEmployeeDetails from './AddEmployeeDetails.style';
import avatarPhoto from '../../assets/images/employee-avatar.svg';
import { Button } from '../../components';

const AddEmployeeDetails: React.FC = () => {
    return (
        <StyledAddEmployeeDetails
            action=""
            id="add-emp-form"
            noValidate
            autoComplete="off"
            className="margin-inline-auto"
        >
            <div className="form-entry form section">
                <label
                    htmlFor="profile-photo-input"
                    className="display-block margin-inline-auto"
                    id="profile-photo-label"
                >
                    <img
                        src={avatarPhoto}
                        alt="employee image"
                        draggable="false"
                        className="profile-photo"
                        title="Add a profile photo"
                    />
                    <input
                        type="file"
                        id="profile-photo-input"
                        accept="image/*"
                        className="display-none"
                        required
                    />
                </label>
                <p className="error-msg text-center display-hidden"></p>
            </div>

            <div className="form section">
                <div className="form-row flex-container">
                    <div className="form-entry">
                        <label htmlFor="full-name" className="required-field">
                            Name
                        </label>
                        <input
                            type="text"
                            id="full-name"
                            name="name"
                            minLength={3}
                            maxLength={100}
                            required
                        />
                        <p className="error-msg display-hidden"></p>
                    </div>
                    <div className="form-entry">
                        <label
                            htmlFor="company-email"
                            className="required-field"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="company-email"
                            name="email"
                            required
                            value="@qburst.com"
                        />
                        <p className="error-msg display-hidden"></p>
                    </div>
                </div>

                <div className="form-row flex-container">
                    <div className="form-entry">
                        <label
                            htmlFor="date-of-birth"
                            className="required-field"
                        >
                            Date Of Birth
                        </label>
                        <input
                            type="date"
                            id="date-of-birth"
                            name="dob"
                            required
                        />
                        <p className="error-msg display-hidden"></p>
                    </div>
                    <div className="form-entry">
                        <h3 className="required-field">Gender</h3>
                        <div className="flex-container checkbox-container">
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    required
                                />
                                Male
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    required
                                />
                                Female
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    required
                                />
                                Other
                            </label>
                        </div>
                        <p className="error-msg display-hidden"></p>
                    </div>
                </div>
                <div className="form-row flex-container">
                    <div className="form-entry">
                        <label htmlFor="address" className="required-field">
                            Address
                        </label>
                        <textarea
                            name="address"
                            id="address"
                            minLength={3}
                            maxLength={250}
                            rows={4}
                            required
                            spellCheck="false"
                        ></textarea>
                        <p className="error-msg display-hidden"></p>
                    </div>
                </div>
            </div>

            <div className="form-section">
                <div className="form-row flex-container">
                    <div className="form-entry">
                        <label
                            htmlFor="company-role"
                            className="required-field"
                        >
                            Role
                        </label>
                        <select
                            name="role"
                            id="company-role"
                            className="role-select"
                            required
                        >
                            <option value="" disabled selected>
                                Select a role
                            </option>
                        </select>
                        <p className="error-msg display-hidden"></p>
                    </div>

                    <div className="form-entry">
                        <label
                            htmlFor="company-dept"
                            className="required-field"
                        >
                            Department
                        </label>
                        <select
                            name="department"
                            id="company-dept"
                            className="dept-select"
                            required
                        >
                            <option value="" disabled selected>
                                Select a department
                            </option>
                        </select>
                        <p className="error-msg display-hidden"></p>
                    </div>
                </div>
                <div className="form-row flex-container">
                    <div className="form-entry">
                        <label
                            htmlFor="date-of-joining"
                            className="required-field"
                        >
                            Date Of Joining
                        </label>
                        <input
                            type="date"
                            id="date-of-joining"
                            name="doj"
                            required
                        />
                        <p className="error-msg display-hidden"></p>
                    </div>

                    <div className="form-entry">
                        <label
                            htmlFor="company-location"
                            className="required-field"
                        >
                            Location
                        </label>
                        <select
                            name="location"
                            id="company-location"
                            className="location-select"
                            required
                        >
                            <option value="" disabled selected>
                                Select a location
                            </option>
                        </select>
                        <p className="error-msg display-hidden"></p>
                    </div>
                </div>

                <div className="form-row">
                    <h3 className="required-field">Skills</h3>
                    <div className="form-entry">
                        <div className="skills-input-container">
                            <div className="custom-select-wrap margin-inline-auto">
                                <input
                                    type="text"
                                    placeholder="Add one or more skills"
                                    className="skill-search-input"
                                />
                                <ul className="select-options display-none"></ul>
                            </div>
                            <ul className="selected-skills-list flex-container"></ul>
                        </div>
                        <p className="error-msg display-hidden"></p>
                    </div>
                </div>
            </div>
            <div className="flex-container form-controls-container">
                <Button className="primary">SUBMIT</Button>
                <Button className="outline">CANCEL</Button>
            </div>
        </StyledAddEmployeeDetails>
    );
};

export default AddEmployeeDetails;
