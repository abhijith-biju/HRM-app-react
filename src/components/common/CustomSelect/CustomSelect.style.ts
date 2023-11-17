import { StylesConfig } from 'react-select';
import { IOption } from './CustomSelect';

const CustomSelectStyles: StylesConfig<IOption, boolean> = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: '#fff',
        boxShadow: 'none',
        cursor: 'text',
        width: '100%',
        minHeight: 'initial',
        height: 'var(--input-field-height)',
        borderRadius: '3px',
        borderColor: state.isFocused ? '#000' : '#7e7e7e',
        '&:hover': {
            borderColor: state.isFocused ? '#000' : '#7e7e7e',
        },
        outline: state.isFocused ? '1px solid #000' : 'none',
    }),
    valueContainer: (provided) => ({
        ...provided,
        paddingTop: 0,
        paddingBottom: 0,
    }),
    input: (provided) => ({
        ...provided,
        '& input': {
            height: 'auto',
        },
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        marginTop: 0,
        marginBottom: 0,
        alignSelf: 'center',
        height: '60%',
    }),
    clearIndicator: (provided) => ({
        ...provided,
        cursor: 'pointer',
        color: '#7e7e7e',
        paddingTop: 0,
        paddingBottom: 0,
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        cursor: 'pointer',
        color: '#7e7e7e',
        paddingTop: 0,
        paddingBottom: 0,
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

export default CustomSelectStyles;
