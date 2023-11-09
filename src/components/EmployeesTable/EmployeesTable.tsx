import { ITable } from '../common/Table/Table';
import StyledEmployeesTable from './EmployeesTable.style';

interface IEmployeesTable extends ITable {
    onClick: () => void;
}

const EmployeesTable: React.FC<IEmployeesTable> = ({ ...props }) => {
    return <StyledEmployeesTable {...props}></StyledEmployeesTable>;
};

export default EmployeesTable;
