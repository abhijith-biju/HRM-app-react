import Select from 'react-select';
import { useField } from 'formik';
import CustomSelectStyles from './CustomSelect.style';

export interface IOption {
    value: string;
    label: string;
}

interface ICustomSelect {
    label: string;
    name: string;
    id?: string;
    placeholder?: string;
    options: IOption[];
    isMulti?: boolean;
    closeMenuOnSelect?: false;
    required?: boolean;
}

const CustomSelect: React.FC<ICustomSelect> = ({
    label,
    options,
    ...props
}) => {
    const [field, meta, helpers] = useField(props);
    const { setValue } = helpers;

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <Select
                options={options}
                styles={CustomSelectStyles}
                onBlur={field.onBlur}
                value={field.value}
                onChange={(option: IOption) => {
                    if (option) {
                        setValue(option);
                    }
                }}
                {...props}
            />
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </>
    );
};

export default CustomSelect;
