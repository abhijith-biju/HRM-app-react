import StyledRadioGrup from './RadioGroup.style';

interface IRadioGroup {
    label: string;
    id: string;
    className?: string;
    children: JSX.Element[];
}

const RadioGroup: React.FC<IRadioGroup> = ({
    label,
    id,
    children,
    className,
}) => {
    return (
        <StyledRadioGrup className={className}>
            <div id={id} className="checkbox-label">
                {label}
            </div>
            <div
                role="group"
                aria-labelledby={id}
                className="checkbox-container"
            >
                {children}
            </div>
        </StyledRadioGrup>
    );
};

export default RadioGroup;
