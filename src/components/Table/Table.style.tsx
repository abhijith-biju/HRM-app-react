import styled from 'styled-components';

const StyledTable = styled.table`
    width: 100%;
    border-spacing: 0;
    border-radius: 10px;
    border: 1px solid #000;
    font-size: 1.2em;
    margin-top: 25px;

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

    .employee-actions {
        padding-left: 0;
        margin: 0;
        list-style: none;
        align-items: center;
        gap: 25px;

        & li button {
            padding: 0;
            align-items: center;
        }

        & li span {
            color: #000;

            &:hover {
                scale: 1.2;
                font-variation-settings: 'FILL' 1;
            }
        }

        & .view-emp-btn span {
            color: green;
        }

        & .edit-emp-btn span {
            color: orange;
        }

        & .delete-emp-btn span {
            color: red;
        }

        & th {
            background-color: #d5d5d5;
        }
    }
`;

export default StyledTable;
