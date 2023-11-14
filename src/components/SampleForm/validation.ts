import * as Yup from 'yup';

const validate = Yup.object().shape({
    profilePicture: Yup.string(),
    firstName: Yup.string()
        .required('First name is required')
        .min(2, 'First name must be at least 2 characters')
        .max(50, 'First name cannot exceed 50 characters'),
    email: Yup.string()
        .email('Invalid email')
        .matches(/@qburst\.com$/, 'Email must end with @qburst.com')
        .required('Email is required'),
    dob: Yup.date()
        .max(new Date(), 'Date of birth cannot be in the future')
        .required(),
    gender: Yup.string().required('Invalid gender'),
    address: Yup.string()
        .min(10, 'Address must be at least 10 characters')
        .max(200, 'Address cannot exceed 200 characters'),
    role: Yup.string().required(),
    department: Yup.string().required(),
    doj: Yup.date()
        .max(new Date(), 'Date of joining cannot be in the future')
        .required(),
    location: Yup.object().required(),
    skills: Yup.object().required(),
});

export default validate;
