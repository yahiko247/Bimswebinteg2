import '../components/css/Stylelogin.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Validation from '../../LoginValidation';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';


function Login() {
 const [values, setValues] = useState({
    email: '',
    password: ''

  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput =(event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.email === "" && errors.password === ""){
      axios.post('http://localhost:8081/login', values)
      .then(res => {
        if(res.data === "Login success") {
          navigate('/home');
        } else {
          alert("no records");
        }
      })
      .catch(err => console.log(err))
    }
  }
  return (
    <div className='row w-100'>
      <div className='col-md-6'>
        <div className='login-container d-flex justify-content-center align-items-center vh-100'>
          <div className=' text-white text-center '>
            <h2>B I M S</h2>
            <form action="" onSubmit={handleSubmit}>
              <div className='mb-3'>
                <input type="email" placeholder='Enter email' name='email'
                  value={values.email} onChange={handleInput} className='form-control rounded-50'/>
                {errors.email && <span className='text-danger'>{errors.email}</span>}
              </div>
              <div className='mb-3'>
                <input type="password" placeholder='Enter Password' name='password'
                  value={values.password} onChange={handleInput} className='form-control rounded-50'/>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <p style={{ fontSize: '12px' }}>Remember me?</p>
                <button type='submit' className='btn btn-success w-50'>Login</button>
              </div>
              <hr className="divider" />
              <p style={{ fontSize: '12px', margin: '0 10px' }}>or create with <Link to="/register">Sign Up</Link></p>
              <div className='d-flex align-items-center' style={{ color: 'rgba(16, 170, 142, 1)', margin: '20px' }}>
                <FacebookIcon style={{ marginRight: '90px', marginLeft: '10px' }} />
                <GoogleLogin
                    onSuccess={credentialResponse => {
                      console.log(credentialResponse);
                      navigate('/home');
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />;
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='col-md-5 d-flex justify-content-center align-items-center'>
        <div>
          <h3>Welcome to</h3>
          <p>Brangay Information Management System.
          BIMS can track residents record such as personal to family information,
          complaints to amicable settlement information (Barangay Justice System) and can create daily reports for the Barangay.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
