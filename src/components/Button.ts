import styled from 'styled-components';

interface IBtn {
    $outline?: boolean;
    $iconBtn?: boolean;
}

const Button = styled.button<IBtn>`
    background-color: transparent;
    cursor: pointer;
    border: none;
    padding: 7px 15px;
    border-radius: 5px;
    font-weight: bold;
    background-color: var(--primary-clr);
    color: #fff;
    margin: 0.5rem;

    &:hover {
        background-color: var(--primary-clr-accent);
    }

    ${({ $outline }) =>
        $outline &&
        `   
            background-color: #fff;
            border: 1px solid var(--primary-clr);
            color: var(--primary-clr);

            &:hover {
                background-color: var(--primary-clr);
                color: #fff;
            }`}

    ${({ $iconBtn }) =>
        $iconBtn &&
        `   
            display: flex;
            align-items: center;
            gap: 7px;

            & .icon {
                color: inherit;
            }
            
            }`}
`;

export default Button;
