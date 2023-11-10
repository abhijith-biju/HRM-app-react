import { useField } from 'formik';

interface ISelect {
    label: string;
    name: string;
    id?: string;
    className?: string;
    children: JSX.Element[];
    defaultValue?: string;
}

const Select: React.FC<ISelect> = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>

            <select {...field} {...props} />

            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default Select;
