import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import { useFormContext } from '../../providers/Form.provider';
import { formSchema } from '../../models/Login.model';
import './LoginForm.scss';

const LoginForm = () => {
  const { errors, handleChange, handleSubmit, touched, values, isSubmitting } =
    useFormContext();

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <h1 className="login-form__title">User Login</h1>
      {Object.entries(formSchema).map(
        ([field, { id, label, validator, type = 'text' }]) => (
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
              required={!!validator}
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
        ),
      )}
      <div>
        <LoadingButton loading={isSubmitting} variant="contained" type="submit">
          Log In
        </LoadingButton>
      </div>
    </form>
  );
};

export default LoginForm;
