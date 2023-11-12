import { Field, ErrorMessage } from 'formik';

interface ITextarea {
    label: string;
    name: string;
    id?: string;
    placeholder?: string;
    className?: string;
    rows?: string;
}

const Textarea: React.FC<ITextarea> = ({ label, ...props }) => {
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <Field as="textarea" {...props} />
            <ErrorMessage name={props.name} />
        </>
    );
};

export default Textarea;
