import StyledInput from './Input.style';

interface IInput {
    placeholder?: string;
    className?: string;
    type?: string;
}

const Input: React.FC<IInput> = ({ type = 'text', ...props }) => {
    return <StyledInput type={type} {...props} />;
};

export default Input;
