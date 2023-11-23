import StyledEmpDetailsWrap from './ViewEmployeeDetails.style';
import employeeDetails from './constants';
import { Chip, Button } from '../../components';
import { Link } from 'react-router-dom';
import { Flex } from '../../components';

const ViewEmployeeDetails = () => {
    return (
        <StyledEmpDetailsWrap
            className="details column align-center"
            tag="section"
        >
            <Flex className="view-emp-card">
                <div className="main-details">
                    <img
                        src={employeeDetails.profilePhoto}
                        alt="profile photo"
                        className="profile-photo"
                        draggable="false"
                    />
                    <p className="full-name">{employeeDetails.name}</p>
                    <p className="role">{employeeDetails.role}</p>
                    <p className="department">{employeeDetails.department}</p>
                    <p className="location">{employeeDetails.location}</p>
                </div>
                <div className="extended-details">
                    <dl>
                        <div className="data-entry">
                            <dt>Employee ID</dt>
                            <dd className="emp-id">{employeeDetails.empId}</dd>
                        </div>
                        <div className="data-entry">
                            <dt>Email</dt>
                            <dd className="email">{employeeDetails.email}</dd>
                        </div>
                        <div className="data-entry">
                            <dt>Gender</dt>
                            <dd className="gender">{employeeDetails.gender}</dd>
                        </div>
                        <div className="data-entry">
                            <dt>Date of Birth</dt>
                            <dd className="dob">{employeeDetails.dob}</dd>
                        </div>
                        <div className="data-entry">
                            <dt>Date of Joining</dt>
                            <dd className="doj">{employeeDetails.doj}</dd>
                        </div>
                        <div className="data-entry">
                            <dt>Address</dt>
                            <dd className="address">
                                {employeeDetails.address}
                            </dd>
                        </div>
                        <div className="data-entry">
                            <dt>Skills</dt>
                            <dd>
                                <ul className="selected-skills-list flex-container">
                                    {employeeDetails.skills.map((skill) => (
                                        <li key={skill}>
                                            <Chip>{skill}</Chip>
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </Flex>
            <Link to="/">
                <Button className="primary back-btn">Go Back</Button>
            </Link>
        </StyledEmpDetailsWrap>
    );
};

export default ViewEmployeeDetails;
