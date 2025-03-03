import React, { useState } from 'react';
import FormikForm from './components/FormikForm';

const App = () => {
  // Controlled Components Form
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length === 0) {
      console.log({ username, email, password });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h1>React Form Handling</h1>

      {/* نموذج باستخدام Controlled Components */}
      <h2>Using Controlled Components</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <div>{errors.username}</div>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div>{errors.email}</div>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div>{errors.password}</div>}
        </div>
        <button type="submit">Register</button>
      </form>

      {/* نموذج باستخدام Formik */}
      <h2>Using Formik</h2>
      <FormikForm />
    </div>
  );
};

export default App;
