import styled from 'styled-components';

const StyledForm = styled.div`
    min-width: 1000px;
    padding: 40px;
    margin: 20px auto;
    width: 700px;
    box-shadow: 0 6px 20px -5px rgba(0, 0, 0);
    border-radius: 5px;

    --input-field-height: 2em;

    & h3 {
        font-weight: normal;
        margin: 0;
    }

    & label,
    & .checkbox-label {
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

    .profile-picture-wrap {
        height: 130px;
        width: 130px;
        cursor: pointer;
        margin: 0 auto 40px;
        border-radius: 50%;
        overflow: clip;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
            rgba(0, 0, 0, 0.23) 0px 3px 6px;

        & > img {
            height: 100%;
            width: 100%;
        }
    }

    & .checkbox-container {
        height: var(--input-field-height);

        & label {
            font-size: 1em;
        }
    }

    & input:not([type='radio'], [type='file']).error-border,
    & select.error-border,
    & textarea.error-border,
    & .skills-input-container.error-border {
        outline: 1px solid #b70000;
        border-color: #b70000;
    }

    & .skills-input-container {
        border: 1px solid #d5d5d5;
        border-radius: 3px;
        padding: 10px;

        & select {
            width: 150px;
        }
    }

    & .form-controls-container {
        justify-content: end;
        gap: 20px;
        margin: 10px 0 0 0;
    }
`;

export default StyledForm;
