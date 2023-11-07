import StyledButton from './Button.style.ts';

interface IBtn {
    children: React.ReactNode;
    type?: 'submit' | 'reset' | 'button' | undefined;
    className?: string;
}

const Button: React.FC<IBtn> = ({ children, type = 'button', ...props }) => {
    return (
        <StyledButton type={type} {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;
