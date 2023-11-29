import { Flex, Button } from '../..';

interface IFetchUrl {
    sortBy: string;
    sortDir: string;
    limit: number;
    offset: number;
}

interface IPagination {
    fetchUrl: IFetchUrl;
    setFetchUrl: (url: IFetchUrl) => void;
}

const Pagination: React.FC<IPagination> = ({ fetchUrl, setFetchUrl }) => {
    const isFirstPage = fetchUrl.offset === 0;

    return (
        <Flex className="gap-15p">
            <Button
                className="btn primary"
                disabled={isFirstPage}
                onClick={() => {
                    setFetchUrl({
                        ...fetchUrl,
                        offset: fetchUrl.offset - 10,
                    });
                    console.log('previous clicked');
                }}
            >
                Previous
            </Button>
            <Button
                className="btn primary"
                onClick={() => {
                    setFetchUrl({
                        ...fetchUrl,
                        offset: fetchUrl.offset + 10,
                    });
                    console.log('next clicked');
                }}
            >
                Next
            </Button>
        </Flex>
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
