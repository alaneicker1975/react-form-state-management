import LoginForm from './components/LoginForm';
import FormProvider from './providers/Form.provider';
import { initialValues, validationSchema } from './models/Login.model';
import './App.scss';

// This demo does not take into account how to handle pre-populated values from an API request.
// All initial values by default are an empty string.
//
// In a scenario where the initial values need to be pre-populated, those values could easily
// be mapped to the corresponding "defaultValue" property in the  "initialValues" model.
//
// E.g. The example below implies a 1:1 relationship between the API response and the form model.
// In my opinion, it's best to have field names that correspond to the API, that way your POST
// body is automatically created by Formik. It also makes operations like the one below very
// easy to perform.

// const { data } = await axios.get('path/to/api');
// const mappedInitialValues = initialValues.map(model => ({ ...model, defaultValue: data[model.name] }));

function App() {
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
}

export default App;
