import styled from 'styled-components';

interface IInput {
    $maxWidth?: string;
}

const Input = styled.input<IInput>`
    border: 1px solid #7e7e7e;
    border-radius: 3px;
    height: 25px;
    padding-inline: 5px;
    font-size: 1em;
    width: 220px
    background-color: transparent;
    margin: 0.5rem;
`;

export default Input;
