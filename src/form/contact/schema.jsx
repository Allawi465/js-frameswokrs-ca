import * as yup from 'yup';

const schema = yup
    .object({
        fullName: yup
            .string().trim()
            .required('Please enter your full name')
            .min(3, 'Your first name should be at least 3 characters'),
        email: yup
            .string().trim()
            .required('Please enter your email')
            .email("Invalid email address"),
        subject: yup
            .string().trim()
            .required('Please enter your subject')
            .min(3, 'Your subject should be at least 3 characters'),
        body: yup
            .string().trim()
            .required('Please enter your body texts')
            .min(3, 'Your body texts should be at least 3 characters'),
    })
    .required();

export default schema;