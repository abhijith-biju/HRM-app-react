import { useField, Field } from 'formik';

interface ICustomInput {
    label: string;
    name: string;
    id?: string;
    type: string;
    placeholder?: string;
    className?: string;
}

const CustomInput: React.FC<ICustomInput> = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <Field {...field} {...props} />
            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
        </>
    );
};

export default CustomInput;
