import StyledTable from './Table.style';
import { Loader, Button } from '../..';
import { useSearchParams } from 'react-router-dom';

interface ITheader {
    value: string;
    label: string;
    isSortable: boolean;
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
    const [searchParams, setSearchParams] = useSearchParams();

    const sortButtonClickHandler = (event: React.MouseEvent<HTMLElement>) => {
        const buttonElement = event.target as HTMLElement;
        const tableHeaderValue = buttonElement.getAttribute('data-value');
        const currentSortDirection =
            buttonElement.getAttribute('data-sort-dir');
        const nextSortDirection =
            currentSortDirection === 'asc' ? 'desc' : 'asc';

        if (tableHeaderValue && currentSortDirection) {
            buttonElement.setAttribute('data-sort-dir', nextSortDirection);
            searchParams.set('sortBy', tableHeaderValue);
            searchParams.set('sortDir', nextSortDirection);
            setSearchParams(searchParams);
        }
    };

    const getSortDirection = (headerValue: string) => {
        const currentSortBy = searchParams.get('sortBy');
        const currentSortDir = searchParams.get('sortDir');

        if (currentSortBy === headerValue) {
            return currentSortDir;
        } else {
            return 'asc';
        }
    };

    let tableBodyData;
    if (tableData.length === 0) {
        tableBodyData = (
            <tr>
                <td colSpan={100} className="text-center">
                    No records to display
                </td>
            </tr>
        );
    } else {
        tableBodyData = tableData.map((rowData) => (
            <tr key={rowData.id}>
                {tableHeaders.map((header) => (
                    <td key={header.value}>{rowData[header.value]}</td>
                ))}
            </tr>
        ));
    }

    return (
        <StyledTable className={className}>
            <thead>
                <tr>
                    {tableHeaders.map((header) => (
                        <th key={header.value}>
                            <div className="emp-heading-wrap">
                                <span>{header.label}</span>
                                {header.isSortable && (
                                    <Button
                                        className="btn sort-btn"
                                        data-value={header.value}
                                        data-sort-dir={getSortDirection(
                                            header.value
                                        )}
                                        onClick={sortButtonClickHandler}
                                    >
                                        <span className="material-symbols-rounded">
                                            arrow_upward_alt
                                        </span>
                                    </Button>
                                )}
                            </div>
                        </th>
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
                    tableBodyData
                )}
            </tbody>
        </StyledTable>
    );
};

export default Table1;
