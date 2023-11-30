import { Field, useField } from 'formik';
import StyledRadioGrup from './CustomRadioGroup.style';
import { IReactSelectOption } from '../../../interfaces/common';

interface IRadioGroup {
    label: string;
    id: string;
    name: string;
    options: IReactSelectOption[];
    className?: string;
}

const CustomRadioGroup: React.FC<IRadioGroup> = ({
    label,
    id,
    name,
    className,
    options,
}) => {
    const [_, meta] = useField(name);

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
                {options.map((option) => (
                    <label key={option.value}>
                        <Field type="radio" name={name} value={option.value} />
                        {option.label}
                    </label>
                ))}
            </div>
            {meta.touched && meta.error ? (
                <div className="error-msg">{meta.error}</div>
            ) : null}
        </StyledRadioGrup>
    );
};

export default CustomRadioGroup;
