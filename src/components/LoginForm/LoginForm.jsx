import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import { useFormikContext } from '../../providers/Form.provider';
import { fields } from '../../models/Login.model';

const LoginForm = () => {
  const { errors, handleChange, handleSubmit, touched, values, isSubmitting } =
    useFormikContext();

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <h1 className="login-form__title">User Login</h1>
      {Object.entries(fields).map(([field, { id, label, type = 'text' }]) => (
        <div key={id}>
          <TextField
            type={type}
            id={id}
            label={label}
            name={field}
            onChange={handleChange}
            value={values[field]}
            error={errors[[field]] && touched[field]}
            helperText={errors[field]}
            variant="outlined"
            fullWidth
          />
        </div>
      ))}
      <div>
        <LoadingButton
          loading={isSubmitting}
          size="large"
          variant="contained"
          type="submit"
        >
          Log In
        </LoadingButton>
      </div>
    </form>
  );
};

export default LoginForm;
