import styled from 'styled-components';

const StyledAddEmployeeDetails = styled.section`
    min-width: 1000px;
    padding: 40px;
    margin: 20px auto;
    width: 700px;
    box-shadow: 0 6px 20px -5px rgba(0, 0, 0);
    border-radius: 5px;

    & #profile-photo-label {
        display: block;
        max-width: min-content;
        cursor: pointer;
        border-radius: 50%;

        & .profile-photo {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    & .skills-input-container {
        border: 1px solid #d5d5d5;
        border-radius: 3px;
        padding: 10px;

        & select {
            width: 150px;
        }
    }
`;

export default StyledAddEmployeeDetails;
