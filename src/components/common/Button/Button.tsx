import StyledButton from './Button.style.ts';

interface IBtn {
    children: React.ReactNode;
    type?: 'submit' | 'reset' | 'button' | undefined;
    className?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<IBtn> = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
