import StyledTable from './Table.style';
import { Loader, Button } from '../..';
import { useSearchParams } from 'react-router-dom';
import { initQueryParams } from '../../../pages/ManageEmployees/constants';

interface ITheader {
    value: string;
    label: string;
    isSortable: boolean;
    sortValue: string;
}

export interface ITable {
    tableHeaders: ITheader[];
    tableData: any[];
    className?: string;
    loading?: boolean;
}

const Table: React.FC<ITable> = ({
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

        if (currentSortBy === headerValue) {
            return searchParams.get('sortDir') || 'desc';
        }
        return initQueryParams.sortDir;
    };

    const isSortActiveColumn = (headerValue: string) => {
        const currentSortBy = searchParams.get('sortBy');

        if (!currentSortBy && headerValue === initQueryParams.sortBy) {
            return 'true';
        }
        if (currentSortBy === headerValue) {
            return 'true';
        }
        return 'false';
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
            {loading ? (
                <tbody>
                    <tr>
                        <td>
                            <Loader className="table-loader" />
                        </td>
                    </tr>
                </tbody>
            ) : (
                <>
                    <thead>
                        <tr>
                            {tableHeaders.map((header) => {
                                const isSortActive = isSortActiveColumn(
                                    header.sortValue
                                );
                                return (
                                    <th key={header.value}>
                                        <div className="emp-heading-wrap">
                                            <span>{header.label}</span>
                                            {header.isSortable && (
                                                <Button
                                                    className="btn sort-btn"
                                                    data-value={
                                                        header.sortValue
                                                    }
                                                    data-sort-dir={getSortDirection(
                                                        header.sortValue
                                                    )}
                                                    data-is-sort-active-column={
                                                        isSortActive
                                                    }
                                                    onClick={
                                                        sortButtonClickHandler
                                                    }
                                                >
                                                    {isSortActive === 'true' ? (
                                                        <span className="material-symbols-rounded">
                                                            arrow_upward_alt
                                                        </span>
                                                    ) : (
                                                        <span className="material-symbols-rounded">
                                                            sync_alt
                                                        </span>
                                                    )}
                                                </Button>
                                            )}
                                        </div>
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>{tableBodyData}</tbody>
                </>
            )}
        </StyledTable>
    );
};

export default Table;
