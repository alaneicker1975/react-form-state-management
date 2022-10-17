import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

const FormContext = createContext({});
export const useFormikContext = () => useContext(FormContext);

const FormProvider = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
  ...rest
}) => {
  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    ...rest,
  });

  return (
    <FormContext.Provider value={{ form }}>{children}</FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
};

FormProvider.defaultProps = {
  children: <></>,
  onSubmit: () => {},
  initialValues: {},
  validationSchema: undefined,
};

export default FormProvider;
