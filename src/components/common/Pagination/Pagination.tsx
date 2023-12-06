import { Button } from '../..';
import PaginationContainer from './Pagination.style';
import { useSearchParams } from 'react-router-dom';

interface IPagination {
    totalEntries: number;
}

const Pagination: React.FC<IPagination> = ({ totalEntries = 0 }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const offset = Number(searchParams.get('offset') ?? 0);
    const limit = Number(searchParams.get('limit') ?? 10);

    const isFirstPage = offset === 0;
    const isLastPage = offset + limit >= totalEntries;
    const currentPage = Math.ceil(offset / limit) + 1;

    return (
        <PaginationContainer>
            <div className="page-controls">
                <Button
                    className="icon-btn primary"
                    disabled={isFirstPage}
                    onClick={() => {
                        searchParams.set('offset', '0');
                        searchParams.set('limit', String(limit));
                        setSearchParams(searchParams);
                    }}
                >
                    <span className="material-symbols-rounded">first_page</span>
                </Button>
                <Button
                    className="icon-btn primary"
                    disabled={isFirstPage}
                    onClick={() => {
                        searchParams.set(
                            'offset',
                            String(Math.max(offset - limit, 0))
                        );
                        searchParams.set('limit', String(limit));
                        setSearchParams(searchParams);
                    }}
                >
                    <span className="material-symbols-rounded">
                        navigate_before
                    </span>
                </Button>
                <input
                    type="text"
                    className="current-page-input"
                    id="current-page"
                    value={currentPage}
                />
                <Button
                    className="icon-btn primary"
                    disabled={isLastPage}
                    onClick={() => {
                        searchParams.set(
                            'offset',
                            String(Math.min(offset + limit, totalEntries))
                        );
                        searchParams.set('limit', String(limit));
                        setSearchParams(searchParams);
                    }}
                >
                    <span className="material-symbols-rounded">
                        navigate_next
                    </span>
                </Button>
                <Button
                    className="icon-btn primary"
                    disabled={isLastPage}
                    onClick={() => {
                        searchParams.set(
                            'offset',
                            String(Math.floor(totalEntries / limit) * limit)
                        );
                        searchParams.set('limit', String(limit));
                        setSearchParams(searchParams);
                    }}
                >
                    <span className="material-symbols-rounded">last_page</span>
                </Button>
            </div>
            <span>
                {offset + 1}-{Math.min(offset + limit, totalEntries)} of{' '}
                {totalEntries} items
            </span>
        </PaginationContainer>
    );
};

export default Pagination;
