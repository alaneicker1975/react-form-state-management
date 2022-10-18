import * as yup from 'yup';
import {
  createInitialValuesObject,
  createValidationSchema,
} from '../../helpers/form';

export const fields = {
  username: {
    id: 'username',
    label: 'Username',
    name: 'username',
    defaultValue: '',
    validator: yup.string().required('Username is required'),
  },
  password: {
    id: 'password',
    label: 'Password',
    name: 'password',
    defaultValue: '',
    validator: yup.string().required('Password is required'),
  },
};

export const initialValues = createInitialValuesObject(fields);
export const validationSchema = createValidationSchema(fields);
