import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { validationRules } from '../utils/validationSchema';

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData=localStorage.getItem('userData');
    const newData = userData ? JSON.parse(userData) : {};
    const storedEmail = newData.email;
    const storedPassword = newData.password;

    if (storedEmail === data.email && storedPassword === data.password) {
      navigate('/home');
    } else {
      setLoginError('Wrong credentials, please try again.');
    }
  };

  return (
    <div className='login-container'>
      <div className='login-page'>
        <h2>Login to your Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='input-container'>
          <div className='email'>
            <label>Email :</label>
            <input
              type='text'
              placeholder='Enter your email'
              {...register('email', validationRules.email)}
            />
            {errors.email && <p className='error'>{errors.email.message}</p>}
          </div>
          <div className='password'>
            <label>Password :</label>
            <input
              type='password'
              placeholder='Enter your password'
              {...register('password', validationRules.password)}
            />
            {errors.password && <p className='error'>{errors.password.message}</p>}
          </div>
          <button className='login-button' type='submit'>
            Login
          </button>
          {loginError && <p className='error'>{loginError}</p>}
        </form>
        <a href='/'>Don't have an Account?</a>
      </div>
    </div>
  );
};

export default Login;
