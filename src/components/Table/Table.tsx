import { Button } from '..';
import StyledTable from './Table.style';
import { Link } from 'react-router-dom';

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
    deleteBtnOnClick: () => void;
}

const Table: React.FC<ITable> = ({ headers, data = [], deleteBtnOnClick }) => {
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
                                    <td key={cellData}>{cellData}</td>
                                ))}
                                <td>
                                    <ul className="employee-actions flex-container">
                                        <li>
                                            <Link to="/view-employee">
                                                <Button
                                                    type="button"
                                                    className="view-emp-btn flex-container"
                                                >
                                                    <span className="material-symbols-rounded">
                                                        visibility
                                                    </span>
                                                </Button>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/edit-employee">
                                                <Button
                                                    type="button"
                                                    className="edit-emp-btn flex-container"
                                                >
                                                    <span className="material-symbols-rounded">
                                                        edit_square
                                                    </span>
                                                </Button>
                                            </Link>
                                        </li>
                                        <li>
                                            <Button
                                                type="button"
                                                className="delete-emp-btn flex-container"
                                                onClick={deleteBtnOnClick}
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
