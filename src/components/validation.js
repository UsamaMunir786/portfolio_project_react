import * as Yup from 'yup';

 const signupSchema = Yup.object({
    name: Yup.string().min(3) .required('Please enter your name.'),
    email: Yup.string().email().required('Please enter your email.'),
    password: Yup.string().min(3).required('Please enter your Password.'),
})
export default signupSchema