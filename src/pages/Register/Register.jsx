import React, { useState } from 'react';
import './Register.scss'
import { SiAxios } from 'react-icons/si';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../store/userSlice';
import { useDispatch } from 'react-redux';


const Register = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()
    const [name,setName]= useState()
    const [email,setEmail]= useState()
    const [password,setPassword]= useState()


    const registerUsers=(e)=>{
        e.preventDefault()
        let user ={
            name,
            email,
            password,
        }
        // axios.post('http://localhost:8080/user',user)
        //     .then(({data})=>dispatch(registerUser(data)))
        //         .then(({data})=>localStorage.setItem('user'),JSON.stringify(data))
            
        axios.post('http://localhost:8080/user', user)
    .then(({ data }) => {
        dispatch(registerUser(data)); 
        localStorage.setItem('user', JSON.stringify(data)); 
    })
    .catch(error => {
        console.error('Error during registration:', error); 
    });
        //     .then(({data})=>localStorage.setItem('user',JSON.stringify(data.user)))
    
        navigate('/')
    }


    return (
        <section className='register'>
            <div className="register__container container">
                <form onSubmit={(e)=>registerUsers(e)} className='register__form'>
                    <h2 className='register__name'>Регистрация</h2>
                    <label htmlFor="name">
                        <input onChange={(e)=>setName(e.target.value)} id='name' type="text" placeholder='name'className='register__input' />
                    </label>
                    <label htmlFor="email">
                        <input onChange={(e)=>setEmail(e.target.value)} id='email' type="email" placeholder='email' className='register__input'/>
                    </label>
                    <label htmlFor="password">
                        <input onChange={(e)=>setPassword(e.target.value)} id='password' type="password" placeholder='password'className='register__input' />
                    </label>
                    <button className='register__button'>register</button>
                </form>
            </div>
        </section>
    );
};

export default Register;