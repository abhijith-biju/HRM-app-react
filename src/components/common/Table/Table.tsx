import StyledTable from './Table.style';
import { Loader } from '../..';

interface ITheader {
    value: string;
    label: string;
}

export interface ITable {
    tableHeaders: ITheader[];
    tableData: any[];
    className?: string;
    loading?: boolean;
}

const Table1: React.FC<ITable> = ({
    tableHeaders,
    tableData,
    className,
    loading,
}) => {
    return (
        <StyledTable className={className}>
            <thead>
                <tr>
                    {tableHeaders.map((header) => (
                        <th key={header.value}>{header.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {loading ? (
                    <tr>
                        <td colSpan={100}>
                            <Loader />
                        </td>
                    </tr>
                ) : (
                    tableData.map((rowData) => (
                        <tr key={rowData.id}>
                            {tableHeaders.map((header) => (
                                <td key={header.value}>
                                    {rowData[header.value]}
                                </td>
                            ))}
                        </tr>
                    ))
                )}
            </tbody>
        </StyledTable>
    );
};

export default Table1;
