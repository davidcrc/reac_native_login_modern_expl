import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const signUpSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup.string().required('Password is required').min(8, 'Password must contain at least 8 characters'),
});

export const SignUpResolver = yupResolver(signUpSchema);
