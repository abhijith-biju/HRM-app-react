import StyledInput from './Input.style';

interface IInput {
    placeholder?: string;
    className?: string;
    type?: string;
}

const Input: React.FC<IInput> = ({ type = 'string', ...props }) => {
    return <StyledInput {...props} />;
};

export default Input;
