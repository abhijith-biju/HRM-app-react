import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
    background-color: #fff;
    border-bottom: 1px solid var(--gray-clr);
    position: sticky;
    top: 0;
    z-index: 2;
`;

const Navbar = styled.nav`
    height: 64px;
    max-width: var(--max-width);
    width: 100%;
    padding-inline: 10px;
    margin-inline: auto;
    display: flex;
    gap: 10px;
    align-items: center;

    & .brand-logo {
        color: var(--primary-clr);
        margin: 0;
        font-size: 2em;
    }

    & .navlinks {
        padding: 0;
        display: flex;
        margin-left: auto;

        & a {
            font-size: 1em;
            font-weight: 500;
            color: #000;

            &:hover {
                color: var(--primary-clr);
            }
        }
    }
`;

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Navbar>
                <Link to="/employees">
                    <h1 className="brand-logo">HRM APP</h1>
                </Link>
                <ul className="navlinks">
                    <Link to="/view-employee">Search Employee</Link>
                </ul>
            </Navbar>
        </StyledHeader>
    );
};

export default Header;
