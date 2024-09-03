import React from 'react';
import './Footer.scss'
import logo from './tsunami.icon.webp'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__img"><img src={logo} alt="" />
                <h3>© 2012–2024 Myfixedgear — интернет-магазин велосипедов фиксед гир и синглспидов</h3>
                <p>При копировании информации с сайта активная ссылка на источник обязательна.</p>
            </div></div>
        </footer>
    );
};

export default Footer;