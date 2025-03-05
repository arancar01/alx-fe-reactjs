import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';  // استيراد مكونات Formik
import * as Yup from 'yup';  // استيراد Yup للتحقق من البيانات

// تعريف التحقق من البيانات باستخدام Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long'),
});

function FormikForm() {
  return (
    <div>
      <h2>Registration Form</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // هنا يمكنك إضافة الكود لإرسال البيانات إلى API أو معالج آخر
          console.log('Form data', values);
        }}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
              />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
