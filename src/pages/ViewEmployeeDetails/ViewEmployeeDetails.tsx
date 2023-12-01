import StyledEmpDetailsWrap from './ViewEmployeeDetails.style';
import { Loader, Chip, LinkButton } from '../../components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useApi from '../../core/api/useApi';
import {
    IApiEmployee,
    IApiFetchEmployee,
} from '../../interfaces/ApiDataInterface';
import profilePictureAvatar from '../../assets/images/employee-avatar.svg';
import { toast } from 'react-toastify';

const ViewEmployeeDetails = () => {
    const { employeeId } = useParams();
    if (!employeeId) {
        throw new Response('Not Found', { status: 404 });
    }

    const [employeeDetails, setEmployeeDetails] = useState({} as IApiEmployee);

    let gender: string | undefined = undefined;

    const { response, loading, error } = useApi<IApiFetchEmployee>(
        'GET',
        `/employee/${employeeId}`
    );

    useEffect(() => {
        if (response && response.data) {
            const moreDetails = JSON.parse(response.data.moreDetails);
            gender = moreDetails.gender ?? undefined;
            setEmployeeDetails(response.data);
        }
        if (error) {
            toast.error('Could not employee details');
        }
    }, [response, error]);

    return (
        <>
            {loading ? (
                <Loader className="full-screen-loader" />
            ) : (
                <StyledEmpDetailsWrap>
                    <div className="view-emp-card">
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
                            <p className="role">{employeeDetails.role?.role}</p>
                            <p className="department">
                                {employeeDetails.department?.department}
                            </p>
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
                                {gender && (
                                    <div className="data-entry">
                                        <dt>Gender</dt>
                                        <dd className="gender">{gender}</dd>
                                    </div>
                                )}
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
                                <div className="data-entry">
                                    <dt>Skills</dt>
                                    <dd>
                                        <ul className="selected-skills-list flex-container">
                                            {employeeDetails.skills?.map(
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
                                </div>
                            </dl>
                        </div>
                    </div>
                    <LinkButton to="/employees" className="primary back-btn">
                        Go to Home Page
                    </LinkButton>
                </StyledEmpDetailsWrap>
            )}
        </>
    );
};

export default ViewEmployeeDetails;
