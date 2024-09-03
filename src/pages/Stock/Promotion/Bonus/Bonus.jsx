import React from 'react';
import photo from './dylan_buffington_576c1e_3.jpg'
import './Bonus.scss'

const Bonus = () => {
    return (
        <section className='bonus'> 
            <div className="container">
                <img src={photo} alt="" />
            
            <h2>Бонусы клиентам</h2>
           <p>Если вы покупали у нас велосипед ранее — возьмите с собой (или приложите фото/скан по электронной почте) чек или номер прошлого оплаченного заказа при новой покупке. Мы обязательно сделаем скидку или подарок постоянным клиентам.</p>
                <br />
            <p>Сообщите нам о желании участвовать в акции в момент покупки.</p>
                <br />
            <p>Акция не суммируется с другими акциями и предложениями.</p></div>
        </section>
    );
};

export default Bonus;