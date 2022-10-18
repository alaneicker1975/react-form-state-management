import FormProvider from './providers/FormProvider';
import Login, { initialValues, validationSchema } from './components/Login';
import './styles/main.scss';

// This demo does not take into account how to handle pre-populated values from an API
// request. All initial values by default are an empty string.
//
// In a scenario where the initial values need to be pre-populated, those values could easily
// be mapped to the corresponding "defaultValue" property in the  "initialValues" model.
//
// E.g. The example below implies a 1:1 relationship between the API object properites and the
// form field names. In my opinion, it's best to have field names that correspond to the API,
// that way your POST body is automatically created by Formik. It also makes operations like
// the one below very easy to perform.

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
      <Login />
    </FormProvider>
  );
}

export default App;
