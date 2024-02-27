import React, { useState,useEffect } from 'react';
import '../../styles/LoginRegister.css';
import { RiUserFill } from "react-icons/ri";
import { IoMdLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import {useNavigate } from 'react-router-dom'
import axios from 'axios'
function LoginRegister() {
  const navigate = useNavigate();
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [role, setRole] = useState('');
  const [emailValidation, setEmailValidation] = useState({ isValid: null, message: '' });
  const [passwordValidation, setPasswordValidation] = useState({ isValid: null, message: '' });
  const [usernameValidation, setUsernameValidation] = useState({ isValid: null, message: '' });
  const [mobileValidation, setMobileValidation] = useState({ isValid: null, message: '' });
  const [roleValidation, setRoleValidation] = useState({ isValid: null, message: '' });
  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
    setEmailValidation({ isValid: null, message: '' });
    setPasswordValidation({ isValid: null, message: '' });
    setUsernameValidation({ isValid: null, message: '' });
    setMobileValidation({ isValid: null, message: '' });
    setRoleValidation({ isValid: null, message: '' });
    setEmail('');
    setPassword('');
    setUsername('');
    setMobile('');
    setRole('');
  };
  useEffect(() => {
    const tokenExpiration = setTimeout(() => {
      localStorage.removeItem('token');
    }, 3600000);

    return () => clearTimeout(tokenExpiration);
  }, []);
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
  const validateRole = (value) => {
    const isValid = value.trim() !== '';
    const message = isValid ? 'Correct' : 'Please select a role';
    setRoleValidation({ isValid, message });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(isLoginForm){
      axios.defaults.withCredentials=true;
      axios.post('http://localhost:4000/login',{email,password})
      .then(res=>{
        if(res.data.status==='Success'){
          localStorage.setItem('token', [res.data.token,email]);
          if(res.data.role==='Admin'){
            navigate('/admin');
          }
          else if(res.data.role==='User'){
            navigate('/');
          }
          else if(res.data.role==='Dealer'){
            navigate('/dealers');
          }
        }
      })
      .catch(err=>console.log(err))
      setEmail('');
      setEmailValidation({ isValid: null, message: '' });
      setPassword('');
      setPasswordValidation({ isValid: null, message: '' });
    }
    else{
      if (role.trim() === '') {
        setRoleValidation({ isValid: false, message: 'Please select a role' });
        return;
      }
      axios.post('http://localhost:4000/register',{username,email,password,mobile,role})
      .then(res=>{
        window.location.reload();
      })
      .catch(err=>console.log(err))
      setEmail('');
      setEmailValidation({ isValid: null, message: '' });
      setPassword('');
      setPasswordValidation({ isValid: null, message: '' });
      setUsername('');
      setUsernameValidation({ isValid: null, message: '' });
      setMobile('');
      setMobileValidation({ isValid: null, message: '' });
      setRole('');
      setRoleValidation({ isValid: null, message: '' });
    }

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
          <div className='login-container'>
            <div className='login-inputs'>
              <form onSubmit={handleSubmit}>
                <h2 className='login-header'>Sign In</h2>
                <input type='text' placeholder='Email' className='login-email' value={email} onChange={(e) => {setEmail(e.target.value);validateEmail(e.target.value);}}/><MdEmail size={22} className='login-register-icon1'/>
                <span className={`validation-message ${emailValidation.isValid === true ? 'valid' : emailValidation.isValid === false ? 'invalid' : ''}`}>{emailValidation.message}</span>
                <input type='password' placeholder='Password' className='login-password' value={password} onChange={(e) => {setPassword(e.target.value); validatePassword(e.target.value);}} /><IoMdLock size={22} className='login-register-icon2'/>
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
        <div className='register-container'>
          <div className='register-inputs'>
            <form onSubmit={handleSubmit}>
              <h2 className='register-header'>Sign Up</h2>
              <input type='text' placeholder='Username' className='register-username' value={username} onChange={(e) => { setUsername(e.target.value);validateUsername(e.target.value);}}/><RiUserFill size={22} className='login-register-icon3'/>
              <span className={`validation-message ${usernameValidation.isValid === true ? 'valid' : usernameValidation.isValid === false ? 'invalid' : ''}`}>{usernameValidation.message}</span>
              <input type='text' placeholder='Email' className='register-email' value={email} onChange={(e) => {setEmail(e.target.value);validateEmail(e.target.value);}}/><MdEmail size={22} className='login-register-icon4'/>
              <span className={`validation-message ${emailValidation.isValid === true ? 'valid' : emailValidation.isValid === false ? 'invalid' : ''}`}>{emailValidation.message}</span>
              <input type='password' placeholder='Password' className='register-password' value={password}onChange={(e) => {setPassword(e.target.value);validatePassword(e.target.value);}}/><IoMdLock size={22} className='login-register-icon5'/>
              <span className={`validation-message ${passwordValidation.isValid === true ? 'valid' : passwordValidation.isValid === false ? 'invalid' : ''}`}>{passwordValidation.message}</span>
              <input type='tel'placeholder='Mobile'className='register-mobile'value={mobile}onChange={(e) => {setMobile(e.target.value);validateMobile(e.target.value);}}/><MdLocalPhone size={22} className='login-register-icon6'/>
              <span className={`validation-message ${mobileValidation.isValid === true ? 'valid' : mobileValidation.isValid === false ? 'invalid' : ''}`}>{mobileValidation.message}</span>
              <select name="role" id="role" className='register-role' value={role} onChange={(e) => { setRole(e.target.value); validateRole(e.target.value); }}>
                <option value="">Select Role</option>
                <option value="Dealer">Dealer</option>
                <option value="User">User</option>
              </select>
              <span className={`validation-message ${roleValidation.isValid === true ? 'valid' : roleValidation.isValid === false ? 'invalid' : ''}`}>{roleValidation.message}</span>
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
