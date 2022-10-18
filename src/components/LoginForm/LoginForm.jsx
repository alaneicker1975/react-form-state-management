import React from 'react';
import classnames from 'classnames';
import { useFormikContext } from '../../providers/FormProvider';
import { fields } from '../../models/Login.model';

const LoginForm = () => {
  const { errors, handleChange, handleSubmit, touched, values } =
    useFormikContext();

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <h1>Log In</h1>
      {Object.entries(fields).map(([field, { id, label, ...otherProps }]) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            type="text"
            id={id}
            name={field}
            onChange={handleChange}
            value={values[field]}
            className={classnames('login-form__input', {
              'has-error': errors[[field]] && touched[field],
            })}
            {...otherProps}
          />
          {errors[field] && touched[field] && (
            <div className="login-form__error">{errors[field]}</div>
          )}
        </div>
      ))}
      {/* <div>
        <label htmlFor={username.id}>{username.label}</label>
        <input
          type="text"
          id={username.id}
          name={username.name}
          onChange={handleChange}
          value={values.username}
          className={classnames('login-form__input', {
            'has-error': errors.username && touched.username,
          })}
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
          className={classnames('login-form__input', {
            'has-error': errors.password && touched.password,
          })}
        />
        {errors.password && touched.password && (
          <div className="login-form__error">{errors.password}</div>
        )}
      </div> */}
      <button className="button" type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
