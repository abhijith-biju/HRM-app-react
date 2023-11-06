import { Button } from '..';
import StyledTable from './Table.style';

interface IRow {
    empId: number;
    email: string;
    department: string;
    name: string;
    role: string;
}

interface ITable {
    headers: string[];
    data: IRow[];
}

const Table: React.FC<ITable> = ({ headers, data = [] }) => {
    return (
        <StyledTable>
            {
                <>
                    <thead>
                        <tr>
                            {headers.map((heading) => (
                                <th key={heading}>{heading}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((rowData, index) => (
                            <tr key={index}>
                                {Object.values(rowData).map((cellData) => (
                                    <td>{cellData}</td>
                                ))}
                                <td>
                                    <ul className="employee-actions flex-container">
                                        <li>
                                            <Button
                                                type="button"
                                                className="view-emp-btn flex-container"
                                            >
                                                <span className="material-symbols-rounded">
                                                    visibility
                                                </span>
                                            </Button>
                                        </li>
                                        <li>
                                            <Button
                                                type="button"
                                                className="edit-emp-btn flex-container"
                                            >
                                                <span className="material-symbols-rounded">
                                                    edit_square
                                                </span>
                                            </Button>
                                        </li>
                                        <li>
                                            <Button
                                                type="button"
                                                className="delete-emp-btn flex-container"
                                            >
                                                <span className="material-symbols-rounded">
                                                    delete
                                                </span>
                                            </Button>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </>
            }
        </StyledTable>
    );
};

export default Table;
