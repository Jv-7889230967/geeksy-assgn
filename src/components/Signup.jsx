import React from 'react';
import { useForm } from 'react-hook-form';
import './Signup.css';
import { validationRules } from '../utils/validationSchema';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    localStorage.setItem('userData', JSON.stringify(data));
    console.log('Data saved to local storage:', data);
    navigate('/login')
  };

  return (
    <div className='signup-container'>
      <div className='signup-page'>
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className='signup-input-container'>
            <div className='name'>
              <label>Name:</label>
              <input
                type='text'
                placeholder='Enter your Name'
                {...register('name', validationRules.name)}
              />
              {errors.name && <p className='error'>{errors.name.message}</p>}
            </div>

            <div className='number'>
              <label>Phone Number:</label>
              <input
                type='number'
                placeholder='Enter your Phone Number'
                {...register('phoneNumber', validationRules.phoneNumber)}
              />
              {errors.phoneNumber && <p className='error'>{errors.phoneNumber.message}</p>}
            </div>

            <div className='email'>
              <label>Email:</label>
              <input
                type='text'
                placeholder='Enter your email'
                {...register('email', validationRules.email)}
              />
              {errors.email && <p className='error'>{errors.email.message}</p>}
            </div>

            <div className='password'>
              <label>Password:</label>
              <input
                type='password'
                placeholder='Enter your password'
                {...register('password', validationRules.password)}
              />
              {errors.password && <p className='error'>{errors.password.message}</p>}
            </div>

            <div className='profession'>
              <label>Profession:</label>
              <select {...register('profession', validationRules.profession)}>
                <option value=''>Select your profession</option>
                <option value='student'>Student</option>
                <option value='working-professional'>Working Professional</option>
              </select>
              {errors.profession && <p className='error'>{errors.profession.message}</p>}
            </div>

          </div>
          <button className='signup-button' type='submit'>
            Create Account
          </button>
        </form>
        <a href='/login'>Already have an Account?</a>
      </div>
    </div>
  );
};

export default Signup;
