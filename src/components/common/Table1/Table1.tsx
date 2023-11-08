import StyledTable from './Table1.style';

interface ITheader {
    id: string;
    value: string;
}

export interface ITable {
    tableHeaders: ITheader[];
    tableData: any[];
    className?: string;
}

const Table1: React.FC<ITable> = ({ tableHeaders, tableData, className }) => {
    return (
        <StyledTable className={className}>
            <thead>
                <tr>
                    {tableHeaders.map((header) => (
                        <th key={header.id}>{header.value}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.map((rowData) => (
                    <tr key={rowData.id}>
                        {tableHeaders.map((header) => (
                            <td key={header.id}>{rowData[header.id]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    );
};

export default Table1;
