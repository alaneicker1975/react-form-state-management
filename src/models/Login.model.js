import * as yup from 'yup';
import {
  createInitialValuesObject,
  createValidationSchema,
} from '../helpers/form';

export const formSchema = {
  username: {
    id: 'username',
    label: 'Username',
    type: 'text',
    defaultValue: '',
    // Adding a validator will make a form field requird.
    validator: yup.string().required('Username is required'),
  },
  password: {
    id: 'password',
    label: 'Password',
    type: 'password',
    defaultValue: '',
    validator: yup.string().required('Password is required'),
  },
};

export const initialValues = createInitialValuesObject(formSchema);
export const validationSchema = createValidationSchema(formSchema);
