import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../..';
import PaginationContainer from './Pagination.style';

interface IPagination {
    totalEntries: number;
}

const Pagination: React.FC<IPagination> = ({ totalEntries = 0 }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const offset = Number(searchParams.get('offset') ?? 0);
    const limit = Number(searchParams.get('limit') ?? 10);

    const [currentPage, setCurrentPage] = useState<String>(
        String(Math.ceil(offset / limit) + 1)
    );

    const isFirstPage = offset === 0;
    const isLastPage = offset + limit >= totalEntries;

    const pageInputButtonClickHandler = () => {
        let newOffset = String((Number(currentPage) - 1) * limit + 1);

        if (Number(newOffset) > totalEntries) {
            newOffset = String(Math.floor(totalEntries / limit) * limit);
        }

        searchParams.set('offset', newOffset);
        searchParams.set('limit', String(limit));
        setSearchParams(searchParams);
    };

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
                <div className="current-page-input-wrap">
                    <input
                        type="text"
                        className="current-page-input"
                        value={String(currentPage)}
                        onChange={(e) => {
                            const inputText = e.target.value;
                            if (
                                /^[1-9]\d*$/.test(inputText) ||
                                inputText === ''
                            ) {
                                setCurrentPage(inputText);
                            }
                        }}
                    />
                    <Button
                        className="outline"
                        onClick={pageInputButtonClickHandler}
                    >
                        Go
                    </Button>
                </div>

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
