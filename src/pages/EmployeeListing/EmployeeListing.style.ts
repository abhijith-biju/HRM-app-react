import { StylesConfig } from 'react-select';

interface IOption {
    label: string;
    value: string;
}

const CustomSelectStyles: StylesConfig<IOption, boolean> = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: '#fff',
        boxShadow: 'none',
        cursor: 'text',
        width: '100%',
        minWidth: '300px',
        borderColor: state.isFocused ? '#000' : '#7e7e7e',
        '&:hover': {
            borderColor: state.isFocused ? '#000' : '#7e7e7e',
        },
        outline: state.isFocused ? '1px solid #000' : 'none',
    }),
    clearIndicator: (provided) => ({
        ...provided,
        cursor: 'pointer',
        color: '#7e7e7e',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        cursor: 'pointer',
        color: '#7e7e7e',
    }),
    multiValueRemove: (provided) => ({
        ...provided,
        cursor: 'pointer',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'black',
    }),
};

export { CustomSelectStyles };
