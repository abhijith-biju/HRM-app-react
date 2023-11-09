import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
    background-color: #fff;
    border-bottom: 1px solid var(--gray-clr);
    position: sticky;
    top: 0;
    z-index: 5;
`;

const Navbar = styled.nav`
    height: 64px;
    max-width: var(--max-width);
    width: 100%;
    padding-inline: 10px;
    margin-inline: auto;
    display: flex;
    align-items: center;

    & .brand-logo {
        color: var(--primary-clr);

        & h1 {
            margin: 0;
            font-size: 2em;
        }
    }
`;

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Navbar>
                <Link to="/">
                    <h1 className="brand-logo">HRM APP</h1>
                </Link>
            </Navbar>
        </StyledHeader>
    );
};

export default Header;
