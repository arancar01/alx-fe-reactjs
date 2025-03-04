import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

const App = () => {
  return (
    <div>
      <h1>Form Handling in React</h1>
      
      <h2>Using Controlled Components</h2>
      <RegistrationForm />

      <h2>Using Formik</h2>
      <FormikForm />
    </div>
  );
};

export default App;
