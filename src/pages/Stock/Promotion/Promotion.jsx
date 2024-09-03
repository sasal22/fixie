import React from 'react';
import './Promotion.scss'
import photo1 from './Photo/figo_vengeance_i_el_capitane_56af81_10.jpg'
import photo2 from './Photo/things_organized_55dc68_3.jpg'
import photo3 from './Photo/dylan_buffington_576c1e_3.jpg'
import { Link } from 'react-router-dom';


const Promotion = () => {
    return (
        <section className='promotion'>
            <div className="container">
                    <h2>Акции</h2>

                   <div className="promotion__bigBox">
                        <div className="promotion__box">
                            <img src={photo1} alt="" className='promotion__box__img'/>

                            <h3 className='promotion__box__name'><Link to='/twofree'>Два доставим бесплатно</Link></h3>
                            <p className='promotion__box__info'>Купи два фикса и получи бесплатную доставку до пункта выдачи.</p>
                        </div>
                        <div className="promotion__box">
                            <img src={photo2} alt="" className='promotion__box__img'/>
                            <h3 className='promotion__box__name'> <Link to='/birthday'>День рождения</Link></h3>
                            <p className='promotion__box__info'>Всем именинникам дарим скидку на фикс и аксессуары к нему.</p>
                        </div>
                        <div className="promotion__box">
                            <img src={photo3} alt="" className='promotion__box__img'/>
                            <h3 className='promotion__box__name'><Link to='/bonus'>Бонусы клиентам</Link></h3>
                            <p className='promotion__box__info'>Скидки и подарки нашим постоянным клиентам.</p>
                        </div>
                   </div>

            </div>
        </section>
    );
};

export default Promotion;