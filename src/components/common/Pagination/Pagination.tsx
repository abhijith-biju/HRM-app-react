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

    return (
        <PaginationContainer>
            <Button
                className="btn primary"
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
                Previous
            </Button>
            <Button
                className="btn primary"
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
                Next
            </Button>
        </PaginationContainer>
    );
};

export default Pagination;
