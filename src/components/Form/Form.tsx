import { Flex } from '..';
import { Button } from '..';
import StyledForm from './Form.style';
import { Link } from 'react-router-dom';

interface IForm {
    children: React.ReactNode;
    className?: string;
}

const Form: React.FC<IForm> = ({ children, ...props }) => {
    return (
        <StyledForm {...props}>
            {children}
            <Flex className="form-controls-container">
                <Button type="submit" className="primary">
                    SUBMIT
                </Button>
                <Link to="/">
                    <Button className="outline">CANCEL</Button>
                </Link>
            </Flex>
        </StyledForm>
    );
};

export default Form;
