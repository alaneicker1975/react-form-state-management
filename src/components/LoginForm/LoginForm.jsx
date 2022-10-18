import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormikContext } from '../../providers/FormProvider';
import { fields } from '../../models/Login.model';

const LoginForm = () => {
  const { errors, handleChange, handleSubmit, touched, values } =
    useFormikContext();

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <h1 className="login-form__title">User Login</h1>
      {Object.entries(fields).map(
        ([field, { id, label, type = 'text', ...otherProps }]) => (
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
              {...otherProps}
            />
          </div>
        ),
      )}
      <div>
        <Button size="large" variant="contained" type="submit">
          Log In
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
