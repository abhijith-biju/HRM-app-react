import StyledTable from './Table1.style';

interface ITheader {
    id: string;
    value: string;
}

interface ITable {
    tableHeaders: ITheader[];
    tableData: any[];
}

interface ITableRow {
    tableHeaders: ITheader[];
    rowData: any;
}

// const TableRow: React.FC<ITableRow> = ({ tableHeaders, rowData }) => {
//     return (
//         <tr>
//             {tableHeaders.map((header) => (
//                 <td key={header.id}>{rowData[header.id]}</td>
//             ))}
//         </tr>
//     );
// };

const Table1: React.FC<ITable> = ({ tableHeaders, tableData }) => {
    return (
        <StyledTable>
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
