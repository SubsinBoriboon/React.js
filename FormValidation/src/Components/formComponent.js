import React, { useState } from 'react';
import './formComponent.css';
const FormComponent = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verify, setVerify] = useState('');

  const [errorUsername, setErrorUsername] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorVerify, setErrorVerify] = useState('');

  const [userColor, setColor] = useState('');

  const VaridationForm = (e) => {
    e.preventDefault();
    if (username.length >= 8) {
      setErrorUsername('');
      setColor('green');
    } else {
      setErrorUsername('Please enter username at least 8 characters');
      setColor('red');
    }

    if (email.includes('@')) {
      setErrorEmail('');
      setColor('green');
    } else {
      setErrorEmail('email not correct ');
      setColor('red');
    }

    if (password.length >= 8) {
      setErrorPassword('');
      setColor('green');
    } else {
      setErrorPassword('please enter password at least 8 characters');
      setColor('red');
    }

    if (verify === password && verify !== '') {
      setErrorVerify('');
      setColor('green');
    } else {
      setErrorVerify('verify password not currect');
      setColor('red');
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={VaridationForm}>
        <h2>Form Validation</h2>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ borderColor: userColor }}
          ></input>
          <small>{errorUsername}</small>
        </div>
        <div className="form-control">
          <label>E-mail</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <small>{errorEmail} </small>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <small>{errorPassword}</small>
        </div>
        <div className="form-control">
          <label>Verify password</label>
          <input
            type="text"
            name="verify"
            value={verify}
            onChange={(e) => {
              setVerify(e.target.value);
            }}
          ></input>
          <small>{errorVerify}</small>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default FormComponent;
