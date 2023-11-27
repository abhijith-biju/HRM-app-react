import StyledEmpDetailsWrap from './ViewEmployeeDetails.style';
import { Button } from '../../components';
import { Link } from 'react-router-dom';
import { Flex } from '../../components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useApi from '../../core/api/useApi';
import {
    IApiEmployee,
    IApiFetchEmployee,
} from '../../interfaces/ApiDataInterface';
import profilePictureAvatar from '../../assets/images/employee-avatar.svg';

const ViewEmployeeDetails = () => {
    const { employeeId } = useParams();
    if (!employeeId) {
        throw new Response('Not Found', { status: 404 });
    }

    const [employeeDetails, setEmployeeDetails] = useState({} as IApiEmployee);

    const { response, loading } = useApi<IApiFetchEmployee>(
        `/employee/${employeeId}`
    );

    useEffect(() => {
        if (response && response.data) {
            console.log(response);
            setEmployeeDetails(response.data);
        }
    }, [response]);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <StyledEmpDetailsWrap
                    className="details column align-center"
                    tag="section"
                >
                    <Flex className="view-emp-card">
                        <div className="main-details">
                            <img
                                src={profilePictureAvatar}
                                alt="profile photo"
                                className="profile-photo"
                                draggable="false"
                            />
                            <p className="full-name">
                                {employeeDetails.firstName}
                            </p>
                            {/* <p className="role">{employeeDetails.role.role}</p> */}
                            {/* <p className="department">
                                {employeeDetails.department.department}
                            </p> */}
                            {/* <p className="location">{employeeDetails.location.label}</p> */}
                        </div>
                        <div className="extended-details">
                            <dl>
                                <div className="data-entry">
                                    <dt>Employee ID</dt>
                                    <dd className="emp-id">
                                        {employeeDetails.id}
                                    </dd>
                                </div>
                                <div className="data-entry">
                                    <dt>Email</dt>
                                    <dd className="email">
                                        {employeeDetails.email}
                                    </dd>
                                </div>
                                <div className="data-entry">
                                    <dt>Gender</dt>
                                    {/* <dd className="gender">{employeeDetails.gender}</dd> */}
                                </div>
                                <div className="data-entry">
                                    <dt>Date of Birth</dt>
                                    <dd className="dob">
                                        {employeeDetails.dob}
                                    </dd>
                                </div>
                                <div className="data-entry">
                                    <dt>Date of Joining</dt>
                                    <dd className="doj">
                                        {employeeDetails.dateOfJoining}
                                    </dd>
                                </div>
                                <div className="data-entry">
                                    <dt>Address</dt>
                                    <dd className="address">
                                        {employeeDetails.address}
                                    </dd>
                                </div>
                                {/* <div className="data-entry">
                                    <dt>Skills</dt>
                                    <dd>
                                        <ul className="selected-skills-list flex-container">
                                            {employeeDetails.skills.map(
                                                (skill) => (
                                                    <li key={skill.id}>
                                                        <Chip>
                                                            {skill.skill}
                                                        </Chip>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </dd>
                                </div> */}
                            </dl>
                        </div>
                    </Flex>
                    <Link to="/">
                        <Button className="primary back-btn">Go Back</Button>
                    </Link>
                </StyledEmpDetailsWrap>
            )}
        </>
    );
};

export default ViewEmployeeDetails;
