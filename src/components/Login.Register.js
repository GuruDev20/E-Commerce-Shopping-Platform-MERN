import React, { useState } from 'react';
import '../styles/LoginRegister.css';
function LoginRegister() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [emailValidation, setEmailValidation] = useState({ isValid: null, message: '' });
  const [passwordValidation, setPasswordValidation] = useState({ isValid: null, message: '' });
  const [usernameValidation, setUsernameValidation] = useState({ isValid: null, message: '' });
  const [mobileValidation, setMobileValidation] = useState({ isValid: null, message: '' });

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
    setEmailValidation({ isValid: null, message: '' });
    setPasswordValidation({ isValid: null, message: '' });
    setUsernameValidation({ isValid: null, message: '' });
    setMobileValidation({ isValid: null, message: '' });
    setEmail('');
    setPassword('');
    setUsername('');
    setMobile('');
  };
  
  const validateEmail = (value) => {
    const isValid = /^[^\s@]+@[^\s@]+\.(com|in|ac\.in)$/.test(value);
    const message = isValid ? 'Correct' : 'Invalid email address';
    setEmailValidation({ isValid, message });
  };

  const validatePassword = (value) => {
    const isValid = value.length >= 6;
    const message = isValid ? 'Correct' : 'Password should be at least 6 characters';
    setPasswordValidation({ isValid, message });
  };

  const validateUsername = (value) => {
    const isValid = /^[a-zA-Z]+$/.test(value);
    const message = isValid ? 'Correct' : 'Username should contain only letters';
    setUsernameValidation({ isValid, message });
  };

  const validateMobile = (value) => {
    const isValid = /^\d{10}$/.test(value);
    const message = isValid ? 'Correct' : 'Invalid mobile number';
    setMobileValidation({ isValid, message });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setEmailValidation({ isValid: null, message: '' });
    setPassword('');
    setPasswordValidation({ isValid: null, message: '' });
    setUsername('');
    setUsernameValidation({ isValid: null, message: '' });
    setMobile('');
    setMobileValidation({ isValid: null, message: '' });
    console.log(email+" "+password+" "+username+" "+mobile);
  };
  
  return (
    <div>
      <style>{`
        body {
          overflow-y: hidden;
        }
      `}</style>
      {isLoginForm ? (
        <div>
          {/* <div className='circle1'></div>
          <div className='circle2'></div> */}
          <div className='login-container'>
            <div className='login-inputs'>
              <form onSubmit={handleSubmit}>
                <h2 className='login-header'>Sign In</h2>
                <input type='text' placeholder='Email' className='login-email' value={email} onChange={(e) => {setEmail(e.target.value);validateEmail(e.target.value);}}/>
                <span className={`validation-message ${emailValidation.isValid === true ? 'valid' : emailValidation.isValid === false ? 'invalid' : ''}`}>{emailValidation.message}</span>
                <input type='password' placeholder='Password' className='login-password' value={password} onChange={(e) => {setPassword(e.target.value); validatePassword(e.target.value);}} />
                <span className={`validation-message ${passwordValidation.isValid === true ? 'valid' : passwordValidation.isValid === false ? 'invalid' : ''}`}>{passwordValidation.message}</span>
                <input type='submit' className='login-submit' value='Login'/>
              </form>
            </div>
            <div className='login-optionals'>
              <div className='forget-password'>Forget Password</div>
              <div className='no-account'>Don't have an account?<p className='login-to-register' onClick={handleToggleForm}>Register</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* <div className='circle3'></div>
          <div className='circle4'></div> */}
        <div className='register-container'>
          <div className='register-inputs'>
            <form onSubmit={handleSubmit}>
              <h2 className='register-header'>Sign Up</h2>
              <input type='text' placeholder='Username' className='register-username' value={username} onChange={(e) => { setUsername(e.target.value);validateUsername(e.target.value);}}/>
              <span className={`validation-message ${usernameValidation.isValid === true ? 'valid' : usernameValidation.isValid === false ? 'invalid' : ''}`}>{usernameValidation.message}</span>
              <input type='text' placeholder='Email' className='register-email' value={email} onChange={(e) => {setEmail(e.target.value);validateEmail(e.target.value);}}/>
              <span className={`validation-message ${emailValidation.isValid === true ? 'valid' : emailValidation.isValid === false ? 'invalid' : ''}`}>{emailValidation.message}</span>
              <input type='password' placeholder='Password' className='register-password' value={password}onChange={(e) => {setPassword(e.target.value);validatePassword(e.target.value);}}/>
              <span className={`validation-message ${passwordValidation.isValid === true ? 'valid' : passwordValidation.isValid === false ? 'invalid' : ''}`}>{passwordValidation.message}</span>
              <input type='tel'placeholder='Mobile'className='register-mobile'value={mobile}onChange={(e) => {setMobile(e.target.value);validateMobile(e.target.value);}}/>
              <span className={`validation-message ${mobileValidation.isValid === true ? 'valid' : mobileValidation.isValid === false ? 'invalid' : ''}`}>{mobileValidation.message}</span>
              <input type='submit' className='register-submit' value='Register'/>
            </form>
          </div>
          <div className='register-optionals'>
            <div className='have-account'>Already have an account?<p className='register-to-login' onClick={handleToggleForm}>Login</p>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default LoginRegister;