import React, { useState } from 'react';
import '../styles/LoginRegister.css';
function LoginRegister() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      {isLoginForm ? (
        <div className='login-container'>
          <div className='login-inputs'>
            <form>
              <h2 className='login-header'>Sign In</h2>
              <input type='text' placeholder='Email' className='login-email' />
              <input type='text' placeholder='Password' className='login-password' />
              <input type='submit' className='login-submit' value='Login' />
            </form>
          </div>
          <div className='login-optionals'>
            <div className='forget-password'>Forget Password</div>
            <div className='no-account'>Don't have an account?<p className='login-to-register' onClick={handleToggleForm}>Register</p>
            </div>
          </div>
        </div>
      ) : (
        <div className='register-container'>
          <div className='register-inputs'>
            <form>
              <h2 className='register-header'>Sign Up</h2>
              <input type='text' placeholder='Username' className='register-username' />
              <input type='text' placeholder='Email' className='register-email' />
              <input type='password' placeholder='Password' className='register-password' />
              <input type='tel' placeholder='Mobile' className='register-mobile' />
              <input type='submit' className='register-submit' value='Register' />
            </form>
          </div>
          <div className='register-optionals'>
            <div className='have-account'>Already have an account?<p className='register-to-login' onClick={handleToggleForm}>Login</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginRegister;
