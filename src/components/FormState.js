import React, { useState } from 'react';
import Card from './Card';

const FormState = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fullName);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
  };

  return (
    <Card>
      <h2>Using useState for Input and Submission Handling</h2>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">Full Name:</label>
          <input type="text" id="full_name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <input type="password" id="password_confirmation" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormState;
