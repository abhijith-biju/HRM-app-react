import styled from 'styled-components';
import { Table1 } from '..';

const StyledEmployeesTable = styled(Table1)`
    & .employee-actions {
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
    }
`;

export default StyledEmployeesTable;
