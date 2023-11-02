import React from 'react';
import styled from 'styled-components';
import './Button.css';

const StyledButton = styled.button`
    padding: 7px 15px;
    border-radius: 5px;
    font-weight: bold;
    background-color: teal;
`;

interface Button {
    type?: 'button' | 'submit' | 'reset' | undefined;
    children: React.ReactNode;
}

const Button: React.FC<Button> = ({ children, type = 'button' }) => {
    return <StyledButton type={type}>{children}</StyledButton>;
};

export default Button;
