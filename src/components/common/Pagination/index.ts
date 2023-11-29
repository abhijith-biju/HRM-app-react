import { useMemo } from 'react';

export interface IPagination {
    totalCount: number;
    currentPage: number;
    pageSize: number;
    onPageChange: (currentPage: number) => void;
    siblingCount?: number;
}

export interface IUsePagination {
    totalCount: number;
    currentPage: number;
    pageSize: number;
    siblingCount?: number;
}

const range = (startIndex: number, endIndex: number) => {
    const length = endIndex - startIndex + 1;
    return Array.from(new Array(length), (_, index) => index + startIndex);
};

export const DOTS = '...';

export const usePagination = ({
    totalCount,
    currentPage,
    pageSize,
    siblingCount = 1,
}: IUsePagination) => {
    const paginationrange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);

        //siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPagePills = siblingCount + 5;

        //If the number of pages is less than the page pills to show
        if (totalPagePills >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 1;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );

            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalCount, currentPage, pageSize, siblingCount]);

    return paginationrange;
};
