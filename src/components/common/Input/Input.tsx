import StyledInput from './Input.style';

interface IInput {
    placeholder?: string;
    className?: string;
}

const Input: React.FC<IInput> = ({ ...props }) => {
    return <StyledInput {...props} />;
};

export default Input;
