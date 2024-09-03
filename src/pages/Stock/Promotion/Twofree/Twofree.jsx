import React from 'react';
import './Twofree.scss'
import photo from './figo_vengeance_i_el_capitane_56af81_10.jpg'

const Twofree = () => {
    return (
        <section className='twoFree'>
            <div className="container">
                <img src={photo} alt="" />
            
            <h2>Два доставим бесплатно</h2>
           <p>При покупке в нашем интернет-магазине fixed gear сразу двух велосипедов действует бесплатная доставка до терминала транспортной компании в вашем городе (за исключением удалённых регионов России и доставки в другие страны).</p>
                <br />
            <p>Сообщите нам о желании участвовать в акции в момент покупки.</p>
                <br />
            <p>Акция не суммируется с другими акциями и предложениями.</p></div>
        </section>
    );
};

export default Twofree;