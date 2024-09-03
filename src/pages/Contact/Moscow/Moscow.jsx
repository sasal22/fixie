import React from 'react';
import './Moscow.scss'
import { Link } from 'react-router-dom';

const Moscow = () => {
    return (
        <section className='moscow'>
            <div className="container">
                <h3>Контакты магазинов</h3>
                <p>Обязательно уточняйте наличие перед визитом!!! Посетить наши уютные шоурумы и купить себе <Link to='/'>велосипед Fixed Gear</Link> можно по адресам:</p>
            </div>
            <div className="moscow__bigBox">
                <div className="moscow__box">
                    <h2>Москва</h2>
                    <br />
                    <p>м. Авиамоторная</p>
                    <p>ул. Красноказарменная, д. 10</p>
                    <br />
                    <p>Режим работы:</p>
                    <p>будни: 11:00 – 21:00</p>
                    <p>выходные: 11:00 – 19:00</p>
                    <br />
                    <p className="phone">+7 495 64-981-64</p>
                    <br />
                    <p className="email">mail@myfixedgear.ru</p>
                </div>
                <div className="moscow__box">
                    <h2>Санкт-Петербург</h2>
                    <br />
                    <p>м. Площадь Александра Невского</p>
                    <p>ул. Кременчугская, д. 13, к. 1</p>
                    <br />
                    <p>Режим работы:</p>
                    <p>будни: 11:30 – 18:30</p>
                    <p>выходные: 11:30 – 18:30</p>
                    <br />
                    <p className="phone">+7 812 407-207-9</p>
                    <br />
                    <p className="email">mail@myfixedgear.ru</p>
                </div>

            </div>
            <div className="moscow__map">
        
     
        <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.420133682418!2d37.63002911592566!3d55.78843728040739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ad3c850e5b1c3%3A0x10e0f83a9a65e2!2z0J3QvtC_0YbQuNGB0YLRg9C10YIg0JrQsNGA0LXRgtC-0LfQvdC-0L3Qs9GA0LDQvdCw0L3R!5e0!3m2!1sru!2sru!4v1648260951770!5m2!1sru!2sru"
                    width="100%"
                    height="400"
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            
            
        </div>
        </section>
    );
};

export default Moscow;