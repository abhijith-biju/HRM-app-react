import StyledInput from './Input.style';

interface IInput {
    placeholder?: string;
    className?: string;
    type: string;
}

const Input: React.FC<IInput> = ({ ...props }) => {
    return <StyledInput {...props} />;
};

export default Input;
