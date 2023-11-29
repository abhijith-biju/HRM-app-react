import { ITable } from '../common/Table/Table';
import StyledEmployeesTable from './EmployeesTable.style';

const EmployeesTable: React.FC<ITable> = ({ ...props }) => {
    return (
        <>
            <StyledEmployeesTable {...props}></StyledEmployeesTable>
        </>
    );
};

export default EmployeesTable;
