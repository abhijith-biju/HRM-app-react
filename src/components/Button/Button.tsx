import React from 'react';
import './Button.css';

interface Button {
    type?: 'button' | 'submit' | 'reset' | undefined;
    children: React.ReactNode;
}

const Button: React.FC<Button> = ({ children, type = 'button' }) => {
    return (
        <button type={type} className="btn btn-primary">
            {children}
        </button>
    );
};

export default Button;
