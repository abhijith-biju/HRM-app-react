import StyledTable from './Table.style';

interface ITheader {
    value: string;
    label: string;
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
                        <th key={header.value}>{header.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.map((rowData) => (
                    <tr key={rowData.id}>
                        {tableHeaders.map((header) => (
                            <td key={header.value}>{rowData[header.value]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    );
};

export default Table1;
