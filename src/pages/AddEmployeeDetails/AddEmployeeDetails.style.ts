import styled from 'styled-components';

const StyledAddEmployeeDetails = styled.form`
    --input-field-height: 2em;
    min-width: 400px;
    width: 700px;
    border: 1px solid var(--primary-clr);

    & h3 {
        font-weight: normal;
        margin: 0;
    }

    & label,
    & h3 {
        font-size: 0.8em;
        position: relative;
        display: inline-block;
        margin-bottom: 3px;
    }

    & input,
    & select {
        font-size: 1em;
        height: var(--input-field-height);
    }

    & input,
    & select,
    & textarea {
        padding-inline: 7px;
    }

    & .form-row {
        justify-content: space-between;
        gap: 20px;
    }

    & .form-row > .form-entry {
        flex: 1 1 0;
    }

    & .required-field::after {
        content: '*';
        color: #b70000;
        position: absolute;
        top: 0;
        right: -8px;
    }

    & .form-entry {
        margin-bottom: 12px;
    }

    & .error-msg {
        color: #b70000;
        margin: 1px 0 0 0;
        font-size: 0.8em;
        margin-top: 5px;
    }

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

    & .checkbox-container {
        gap: 15px;
        align-items: center;
        height: var(--input-field-height);

        & label {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 1em;
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

    & input:not([type='radio'], [type='file']).error-border,
    & select.error-border,
    & textarea.error-border,
    & .skills-input-container.error-border {
        outline: 1px solid #b70000;
        border-color: #b70000;
    }
`;

export default StyledAddEmployeeDetails;
