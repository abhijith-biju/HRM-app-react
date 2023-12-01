import * as Yup from 'yup';

const selectShape = Yup.object().shape({
    label: Yup.string().required(),
    value: Yup.string().required(),
});

const validate = Yup.object().shape({
    firstName: Yup.string()
        .trim()
        .required('First name is required')
        .min(2, 'First name must be at least 2 characters')
        .max(50, 'First name cannot exceed 50 characters'),
    email: Yup.string()
        .email('Invalid email')
        .matches(/@qburst\.com$/, 'Email must end with @qburst.com')
        .required('Email is required'),
    dob: Yup.date()
        .max(new Date(), 'Date of birth cannot be in the future')
        .required('Date of Birth is required'),
    gender: Yup.string().required('Gender is required.'),
    address: Yup.string()
        .min(10, 'Address must be at least 10 characters')
        .max(200, 'Address cannot exceed 200 characters')
        .required('Address is required'),
    role: selectShape.required('Role is required.'),
    department: selectShape.required('Department is required.'),
    dateOfJoining: Yup.date()
        .max(new Date(), 'Date of joining cannot be in the future.')
        .required('Date of Joining is required'),
    // location: selectShape.required('Location is required.'),
    skills: Yup.array()
        .of(selectShape)
        .min(1, 'Atleast one skill is required.'),
});

export default validate;
