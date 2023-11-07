import { Flex } from '..';

interface ITableFilters {
    children: React.ReactNode;
    className?: string;
}

const TableFilters: React.FC<ITableFilters> = ({ children, className }) => {
    const flex = ` gap-15p flex-grow`;
    className = className ? className + flex : flex;

    return <Flex className={className}>{children}</Flex>;
};

export default TableFilters;
