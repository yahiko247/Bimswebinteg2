import '../components/css/Stylelogin.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate if using React Router v6 or later
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Validation from '../../SignUpValidation';
import axios from 'axios'

function Register() {
    const [values, setValues] = useState({
        name:'',
        email: '',
        password: ''
    });
    const navigate = useNavigate(); // Make sure to import useNavigate if using React Router v6 or later
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    };

  const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));  
        if(errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/signup', values) 
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
      }

    return (
        <div className='row w-100'>
            <div className='col-md-6'>
                <div className='register-container d-flex justify-content-center align-items-center vh-100'>
                    <div className='text-white text-center' >
                        <h2>B I M S</h2>
                        <form action="" onSubmit={handleSubmit}>
                            <div className='mb-3'>

                                <input type="text" placeholder='Enter username' name='name'
                                    onChange={handleInput} className='form-control rounded-50'></input>
                                {errors.name && <span className='text-danger'>{errors.name}</span>}
                            </div>
                            <div className='mb-3'>

                                <input type='email' placeholder='User Email' name='email'
                                    onChange={handleInput} className='form-control rounded-50'></input>
                                {errors.email && <span className='text-danger'>{errors.email}</span>}
                            </div>
                            <div className='mb-3'>

                                <input type='password' placeholder='Password' name='password'
                                    onChange={handleInput} className='form-control rounded-50'></input>
                                {errors.password && <span className='text-danger'>{errors.password}</span>}
                            </div>

                            <button type='submit' className='btn btn-success w-100'>Register</button>
                            <hr className='divider' />
                            <p>Do you already have an Account? <Link to="/">Log In</Link></p>
                             
                                <div className='d-flex align-items-center'  style={{color: 'rgba(16, 170, 142, 1)', margin:'20px'}}>
                                    <FacebookIcon style={{marginRight: '90px', marginLeft:'40px'}}/>
                                    <GoogleIcon/>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='col-md-5 d-flex justify-content-center align-items-center'>
                <div>
                    <h3>Welcome to</h3>
                    <p>Brangay Information Management System. BIMS can track residents record such as personal to family information,
                        complaints to amicable settlement information (Barangay Justice System) and can create daily reports for the Barangay.
                    </p>
                </div>
            </div>
        </div>
        
        
    );
}

export default Register;
