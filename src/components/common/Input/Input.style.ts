import styled from 'styled-components';

interface IInput {
    placeholder?: string;
    className?: string;
}

const StyledInput = styled.input<IInput>`
    &:focus-visible {
        outline: 1px solid #000;
        border-color: #000;
    }

    border: 1px solid #7e7e7e;
    border-radius: 3px;
    padding: 5px;
    font-size: 1em;
    width: 220px;
    background-color: transparent;
    margin: 0.5rem 0;

    &.w-full {
        display: block;
        width: 100%;
    }
`;

export default StyledInput;
