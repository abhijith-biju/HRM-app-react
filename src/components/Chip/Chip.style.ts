import styled from 'styled-components';

const Chip = styled.div`
    min-height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    padding-inline: 8px;
    border-radius: 15px;
    border: 1px solid var(--primary-clr);
    color: var(--primary-clr);
    font-size: 0.8em;
`;

export default Chip;
