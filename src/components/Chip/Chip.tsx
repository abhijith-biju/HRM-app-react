import StyledChip from './Chip.style';

interface IChip {
    children: React.ReactNode;
}

const Chip: React.FC<IChip> = ({ children }) => {
    return <StyledChip>{children}</StyledChip>;
};

export default Chip;
