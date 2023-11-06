import { ReactNode } from 'react';
import { ComponentType } from 'react';
import StyledFlex from './Flex.style';

interface IFlex {
    children: ReactNode;
    tag?: keyof JSX.IntrinsicElements | ComponentType;
    className?: string;
}

const Flex: React.FC<IFlex> = ({ children, tag = 'div', ...props }) => {
    //flexContainer is the element to be used as the wrap for flex items. It can be both inbuilt html element or custom component.
    const Tag = tag;
    return (
        <>
            <StyledFlex as={Tag} {...props}>
                {children}
            </StyledFlex>
        </>
    );
};

export default Flex;
