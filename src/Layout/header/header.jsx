import React, { useEffect, useState } from 'react';
import './header.scss'
import { Link } from 'react-router-dom';
import logo from './logo/tsunami.icon.webp'
import phoneLogo from './logo/telephone 1.png'
import binLogo from './logo/Group (1).png'
import { FiUserMinus } from 'react-icons/fi';
import regLogo from './logo/gratis-png-icono-de-computadora-icono-usuario-de-diseno-boton-de-registro.png'
import { LuUserCheck2 } from 'react-icons/lu';
import { IoIosLogOut } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { useSelector } from 'react-redux';
import { logOut } from '../../store/userSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch()

    // const [user,setUser] = useState('')
    // useEffect(()=>{
    //     setUser(JSON.parse(localStorage.getItem('user')))
    // },[])

    // const state = useSelector(state=>state.user)
    const {user} =useSelector(state=>state.user)

    // const logout=()=>{
    //     localStorage.removeItem('user')
    //     setUser('')
    // }
    
    return (
        <header className='header'>
          <div className="container">
            <div className="header__box">
                <div className="header__logo">
                    <img src={logo} alt="" className='header__img' />
                </div>
                <ul className='header__ul'>
                    
                <Link to=''><li>Главная</li></Link>
                <Link to='/bicycles'><li>Велосипеды</li></Link>
                    <li><Link to='/stock'>Акции</Link></li> 
                    <li><Link to='/contact'>Контакты</Link></li>  
                </ul>
                <p>{user?.name}</p>
                <div className="header__bin">
                    
                    <span className='header__regLogo'>
                        {user?<LuUserCheck2/>:
                        <Link to='/register'>
                        <FiUserMinus /></Link>}
                    </span>
                    <Link to='/cart'><span className='header__binLogo'><SlBasket /></span></Link>
                    
                </div>
                {user?<span className='header__logout'onClick={()=>dispatch(logOut())}><IoIosLogOut /></span>:''}
                </div>
           </div>  
           {/* logout */}
        </header>
    );
};

export default Header;