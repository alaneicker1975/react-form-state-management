import * as yup from 'yup';

export const createInitialValuesObject = (models) =>
  Object.fromEntries(
    Object.entries(models).map(([key, model]) => [key, model.defaultValue]),
  );

export const createValidationSchema = (models) =>
  yup.object().shape(
    Object.fromEntries(
      Object.entries(models)
        .filter(([_, model]) => !!model.validator)
        .map(([key, model]) => [key, model.validator]),
    ),
  );
