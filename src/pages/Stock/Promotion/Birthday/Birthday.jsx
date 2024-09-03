import React from 'react';
import photo from './things_organized_55dc68_3.jpg'
import './Birthday.scss'

const Birthday = () => {
    return (
        <section className='birthday'>
            <div className="container">
                <img src={photo} alt="" />
            </div>
            <h2>День рождения</h2>
           <p>Всем именинникам дарим скидку на фикс и аксессуары к нему: на любой велосипед — скидка 5% + на все аксессуары — скидка 15%. Предложение действует за неделю до и неделю после твоего дня рождения.</p>
                <br />
            <p>Сообщите нам о желании участвовать в акции в момент покупки.</p>
                <br />
            <p>Акция не суммируется с другими акциями и предложениями.</p>
        </section>
    );
};

export default Birthday;