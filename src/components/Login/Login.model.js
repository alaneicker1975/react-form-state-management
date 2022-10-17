import * as yup from 'yup';

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

export const initialValues = Object.fromEntries(
  Object.entries(fields).map(([key, model]) => [key, model.defaultValue]),
);

export const validationSchema = Object.fromEntries(
  Object.entries(fields).map(([key, model]) => [key, model.validator]),
);
