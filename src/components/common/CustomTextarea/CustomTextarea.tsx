import { Field, useField } from 'formik';

interface ITextarea {
    label: string;
    name: string;
    id?: string;
    placeholder?: string;
    className?: string;
    rows?: string;
}

const CustomTextarea: React.FC<ITextarea> = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <Field as="textarea" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error-msg">{meta.error}</div>
            ) : null}
        </>
    );
};

export default CustomTextarea;
