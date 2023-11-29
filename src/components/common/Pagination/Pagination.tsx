import { Button } from '../..';
import { IEmployeesFetchSearchParams } from '../../../interfaces/common';
import PaginationContainer from './Pagination.style';
import { useState } from 'react';

interface IPagination {
    fetchUrl: IEmployeesFetchSearchParams;
    setFetchUrl: (url: IEmployeesFetchSearchParams) => void;
    totalEntries: number;
}

const Pagination: React.FC<IPagination> = ({
    fetchUrl,
    setFetchUrl,
    totalEntries = 0,
}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const isFirstPage = fetchUrl.offset === 0;
    const totalPageCount = Math.ceil(totalEntries / fetchUrl.limit);
    const isLastPage = currentPage === totalPageCount;
    console.log('Current Page', currentPage);
    console.log('Total Pages', totalPageCount);

    return (
        <PaginationContainer>
            <Button
                className="btn primary"
                disabled={isFirstPage}
                onClick={() => {
                    setFetchUrl({
                        ...fetchUrl,
                        offset: fetchUrl.offset - 10,
                    });
                    setCurrentPage(currentPage - 1);
                }}
            >
                Previous
            </Button>
            <Button
                className="btn primary"
                disabled={isLastPage}
                onClick={() => {
                    setFetchUrl({
                        ...fetchUrl,
                        offset: fetchUrl.offset + 10,
                    });
                    setCurrentPage(currentPage + 1);
                }}
            >
                Next
            </Button>
        </PaginationContainer>
    );
};

export default Pagination;

// import { IPagination, usePagination, DOTS } from '.';
// import PaginationContainer from './Pagination.style';

// const Pagination: React.FC<IPagination> = ({
//     totalCount,
//     pageSize,
//     currentPage,
//     siblingCount = 1,
//     onPageChange,
// }) => {
//     const paginationRange = usePagination({
//         currentPage,
//         totalCount,
//         siblingCount,
//         pageSize,
//     });

//     // handle no return from paginationRange
//     if (!paginationRange) {
//         return null;
//     }

//     // If there are less than 2 times in pagination range we shall not render the component
//     if (currentPage === 0 || paginationRange.length < 2) {
//         return null;
//     }

//     const onNext = () => {
//         onPageChange(currentPage + 1);
//     };

//     const onPrevious = () => {
//         onPageChange(currentPage - 1);
//     };

//     let lastPage = paginationRange[paginationRange.length - 1];
//     return (
//         <PaginationContainer>
//             {/* Left navigation arrow */}
//             <li
//                 className={
//                     'pagination-item' + (currentPage === 1) ? 'disabled' : ''
//                 }
//                 onClick={onPrevious}
//             >
//                 <div className="arrow left" />
//             </li>
//             {paginationRange.map((pageNumber) => {
//                 // If the pageItem is a DOT, render the DOTS unicode character
//                 if (pageNumber === DOTS) {
//                     return <li className="pagination-item dots">&#8230;</li>;
//                 }

//                 // Render our Page Pills
//                 return (
//                     <li
//                         className={
//                             'pagination-item' + (currentPage === pageNumber)
//                                 ? 'selected'
//                                 : ''
//                         }
//                         onClick={() => onPageChange(Number(pageNumber))}
//                     >
//                         {pageNumber}
//                     </li>
//                 );
//             })}
//             {/*  Right Navigation arrow */}
//             <li
//                 className={
//                     'pagination-item' + (currentPage === Number(lastPage))
//                         ? 'disabled'
//                         : ''
//                 }
//                 onClick={onNext}
//             >
//                 <div className="arrow right" />
//             </li>
//         </PaginationContainer>
//     );
// };

// export default Pagination;
