import Select from 'react-select';
import { useField } from 'formik';
import CustomSelectStyles from './CustomSelect.style';
import makeAnimated from 'react-select/animated';
import { IReactSelectOption } from '../../../interfaces/common';

interface ICustomSelect {
    label: string;
    name: string;
    id?: string;
    placeholder?: string;
    options: IReactSelectOption[];
    isMulti?: boolean;
    closeMenuOnSelect?: false;
    required?: boolean;
}

const animatedComponents = makeAnimated();

const CustomSelect: React.FC<ICustomSelect> = ({
    label,
    options,
    required,
    ...props
}) => {
    const [field, meta, helpers] = useField(props);
    const { setValue } = helpers;

    return (
        <>
            <label
                htmlFor={props.id || props.name}
                className={required ? 'required-field' : ''}
            >
                {label}
            </label>
            <Select
                options={options}
                styles={CustomSelectStyles}
                onBlur={() =>
                    field.onBlur({
                        target: {
                            name: field.name,
                        },
                    })
                }
                value={field.value}
                onChange={(option: IReactSelectOption) => {
                    if (option) {
                        setValue(option);
                    }
                }}
                components={animatedComponents}
                {...props}
            />
            {meta.touched && meta.error ? (
                <div className="error-msg">{meta.error}</div>
            ) : null}
        </>
    );
};

export default CustomSelect;
