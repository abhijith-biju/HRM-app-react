import StyledEmpDetailsWrap from './ViewEmployeeDetails.style';
import { modifyFetchedEmployeeData } from '../../utils/employees';
import { Loader, Chip, LinkButton, Button } from '../../components';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useApi from '../../core/api/useApi';
import { IApiFetchEmployee } from '../../interfaces/ApiDataInterface';
import { IEmployee } from '../../interfaces/common';
import profilePictureAvatar from '../../assets/images/employee-avatar.svg';

const ViewEmployeeDetails = () => {
    const { employeeId } = useParams();
    const navigate = useNavigate();

    const notAvailableString = 'N/A';
    const noSkillsString = 'No Skills Entered';

    const { response, loading, error } = useApi<IApiFetchEmployee>(
        'GET',
        `/employee/${employeeId}`
    );

    let employeeDetails = {} as IEmployee;
    if (response && response.data) {
        employeeDetails = modifyFetchedEmployeeData(response.data);
    }

    useEffect(() => {
        if (error) {
            toast.error(`Could not fetch the requested employee's details`);
            navigate('/');
        }

        if (response && !response.data) {
            toast.error('Could not find the requested employee.');
            navigate('/view-employee');
        }
    }, [loading]);

    return (
        <>
            {loading && <Loader className="full-screen-loader" />}
            {response && response.data && (
                <StyledEmpDetailsWrap>
                    <div className="view-emp-card">
                        <div className="main-details">
                            <img
                                src={
                                    employeeDetails.photoId ||
                                    profilePictureAvatar
                                }
                                alt="Profile Photo"
                                className="profile-photo"
                                draggable="false"
                            />
                            <p className="full-name">
                                {`${employeeDetails.firstName} ${employeeDetails.lastName}` ||
                                    `Name : ${notAvailableString}`}
                            </p>
                            <p className="role">
                                {employeeDetails.role?.label ||
                                    `Role : ${notAvailableString}`}
                            </p>
                            <p className="department">
                                {employeeDetails.department?.label ||
                                    `Department : ${notAvailableString}`}
                            </p>
                            <p className="location">
                                {employeeDetails.location?.label ||
                                    `Location : ${notAvailableString}`}
                            </p>
                        </div>
                        <dl className="extended-details">
                            <div className="data-entry">
                                <dt>Employee ID</dt>
                                <dd className="emp-id">
                                    {employeeDetails.id || notAvailableString}
                                </dd>
                            </div>
                            <div className="data-entry">
                                <dt>Email</dt>
                                <dd className="email">
                                    {employeeDetails.email ||
                                        notAvailableString}
                                </dd>
                            </div>
                            <div className="data-entry">
                                <dt>Gender</dt>
                                <dd className="gender">
                                    {employeeDetails.gender ||
                                        notAvailableString}
                                </dd>
                            </div>
                            <div className="data-entry">
                                <dt>Date of Birth</dt>
                                <dd className="dob">
                                    {employeeDetails.dob || notAvailableString}
                                </dd>
                            </div>
                            <div className="data-entry">
                                <dt>Date of Joining</dt>
                                <dd className="doj">
                                    {employeeDetails.dateOfJoining ||
                                        notAvailableString}
                                </dd>
                            </div>
                            <div className="data-entry">
                                <dt>Address</dt>
                                <dd className="address">
                                    {employeeDetails.address ||
                                        notAvailableString}
                                </dd>
                            </div>
                            <div className="data-entry">
                                <dt>Skills</dt>
                                <dd>
                                    <ul className="selected-skills-list flex-container">
                                        {employeeDetails.skills?.map(
                                            (skill) => (
                                                <li key={skill.value}>
                                                    <Chip>{skill.label}</Chip>
                                                </li>
                                            )
                                        ) || noSkillsString}
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div className="navigation-controls">
                        <LinkButton
                            to={`/edit-employee/${employeeId}`}
                            className="primary edit-emp-btn"
                        >
                            Edit Employee Details
                        </LinkButton>
                        <Button
                            className="primary"
                            onClick={() => navigate(-1)}
                        >
                            Go Back
                        </Button>
                    </div>
                </StyledEmpDetailsWrap>
            )}
        </>
    );
};

export default ViewEmployeeDetails;
