import styled from 'styled-components';

const PaginationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    .page-controls {
        display: flex;
        margin-inline: auto;
        gap: 20px;
    }

    .current-page-input {
        text-align: center;
        width: max-content;
        font-size: 1.2em;
        font-weight: 500;
    }
`;

export default PaginationContainer;
