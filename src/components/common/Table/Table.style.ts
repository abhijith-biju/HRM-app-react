import styled from 'styled-components';

const StyledTable = styled.table`
    width: 100%;
    border-spacing: 0;
    border-radius: 10px;
    border: 1px solid #000;
    font-size: 1.2em;
    margin-top: 25px;
    overflow: hidden;

    & th,
    & td {
        padding: 10px 7px;
    }

    & th {
        background-color: #d5d5d5;
        text-align: left;
    }

    & th,
    & tr:not(:last-child) td {
        border-bottom: 1px solid #000;
    }
`;

export default StyledTable;
