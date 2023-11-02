import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #fff;
    border-bottom: 1px solid var(--gray-clr);
    position: sticky;
    top: 0;
    z-index: 5;
    display: flex;
    align-items: center;
`;

const Navbar = styled.nav`
    height: 64px;
    max-width: var(--max-width);
    width: 100%;
    padding-inline: 10px;
    margin-inline: auto;

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
                <a href="">
                    <h1 className="brand-logo">HRM APP</h1>
                </a>
            </Navbar>
        </StyledHeader>
    );
};

export default Header;
