import StyledChip from './Chip.style';
import { Flex, Button } from '..';

interface IChip {
    children: React.ReactNode;
    isDeletable?: boolean;
}

const Chip: React.FC<IChip> = ({ children, isDeletable }) => {
    return (
        <Flex className="align-center justify-bw" tag={StyledChip}>
            {children}
            {isDeletable && (
                <Button className="skill-remove-btn flex align-items-center">
                    <span className="material-symbols-rounded icon">
                        cancel
                    </span>
                </Button>
            )}
        </Flex>
    );
};

export default Chip;
