import React from 'react';
import LoginForm from './LoginForm';
import { initialValues, validationSchema } from './Login.model';
import FormProvider from '../../providers/FormProvider';

const Login = () => {
  const onSubmit = (form) => {
    console.log(form);
  };

  return (
    <FormProvider
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <LoginForm />
    </FormProvider>
  );
};

export default Login;
