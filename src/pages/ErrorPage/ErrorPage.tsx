import { Link } from 'react-router-dom';
import { Button } from '../../components';
import StyledErrorPage from './ErrorPage.style';

const ErrorPage: React.FC = () => {
    return (
        <StyledErrorPage>
            <h1>404</h1>
            <p>Oops! Something is wrong.</p>
            <Link to="/employees">
                <Button className="primary">Go to Home Page</Button>
            </Link>
        </StyledErrorPage>
    );
};

export default ErrorPage;
