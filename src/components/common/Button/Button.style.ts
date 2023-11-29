import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: none;
    padding: 7px 15px;
    border-radius: 5px;
    font-weight: bold;

    &.primary {
        background-color: var(--primary-clr);
        color: #fff;

        &:hover {
            background-color: var(--primary-clr-accent);
        }
    }

    &.outline {
        background-color: #fff;
        border: 1px solid var(--primary-clr);
        color: var(--primary-clr);

        &:hover {
            background-color: var(--primary-clr);
            color: #fff;
        }
    }

    &.icon-btn {
        display: flex;
        align-items: center;
        gap: 7px;

        & .icon {
            color: inherit;
        }
    }

    &:disabled {
        background-color: var(--gray-clr);
        pointer-events: none;
    }
`;

export default StyledButton;
