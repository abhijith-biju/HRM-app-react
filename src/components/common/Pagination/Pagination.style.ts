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

    .current-page-input-wrap {
        display: flex;
        gap: 5px;

        .current-page-input {
            text-align: center;
            /* display: inline-block; */
            /* width: auto; */
            font-size: 1.2em;
        }
    }
`;

export default PaginationContainer;
