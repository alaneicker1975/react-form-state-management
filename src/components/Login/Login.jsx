import React from 'react';
import { useFormikContext } from '../../providers/FormProvider';
import { fields } from './Login.model';

const Login = () => {
  const { username, password } = fields;

  const { errors, handleChange, handleSubmit, touched, values } =
    useFormikContext();

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <h1>Log In</h1>
      <div>
        <label htmlFor={username.id}>{username.label}</label>
        <input
          type="text"
          id={username.id}
          name={username.name}
          onChange={handleChange}
          value={values.username}
          {...(errors.username &&
            touched.username && { className: 'has-error' })}
        />
        {errors.username && touched.username && (
          <div className="login-form__error">{errors.username}</div>
        )}
      </div>
      <div>
        <label htmlFor={password.id}>{password.label}</label>
        <input
          type="password"
          id={password.id}
          name={password.name}
          onChange={handleChange}
          value={values.password}
          {...(errors.password &&
            touched.password && { className: 'has-error' })}
        />
        {errors.password && touched.password && (
          <div className="login-form__error">{errors.password}</div>
        )}
      </div>
      <button className="button" type="submit">
        Log In
      </button>
    </form>
  );
};

export default Login;
