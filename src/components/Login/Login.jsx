import React from 'react';
import { useFormikContext } from '../../providers/FormProvider';
import { fields } from './Login.model';

const Login = () => {
  const { username, password } = fields;

  const { error, handleChange, handleSubmit, touched, values } =
    useFormikContext();

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <div>
        <label for={username.id}>{username.label}</label>
        <input
          type="text"
          id={username.id}
          name={username.name}
          onChange={handleChange}
          value={values.username}
        />
      </div>
      <div>
        <label for={password.id}>{password.label}</label>
        <input
          type="text"
          id={password.id}
          name={password.name}
          onChange={handleChange}
          value={values.password}
        />
      </div>
      <button id="password" type="submit">
        Log In
      </button>
    </form>
  );
};

export default Login;
