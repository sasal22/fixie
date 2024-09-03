import React from 'react';
import './Peculiarties.scss'
import logo1 from './Photo/dizajn.png'
import logo2 from './Photo/ves.png'
import logo3 from './Photo/skorost.png'
import logo4 from './Photo/obsluzhivanie.png'
import logo5 from './Photo/2v1.png'
import logo6 from './Photo/trjuki.png'



const Peculiarties = () => {
    return (
        <section className='peculiarities'>
            <div className="container">
                <h2 className='peculiarities__name'>Особенности Fixed Gear байков</h2> <br />
                <p className='peculiarities__info'>Трековый или велосипед фикс похож на шоссейный, но с отличиями. Наверное, первое, о чем вы задумаетесь — это как тормозить на таком байке? Да, обычной системы тормозов на велосипеде фиксед гир не предусмотрено (хотя ручные тормоза идут в комплекте и их можно установить). Но существуют особые способы торможения, основанные на том, чтобы противодействовать движению педалей, и овладеть ими можно очень быстро.</p> <br />
                <p className='peculiarities__info1'>Вскоре вы привыкнете к своему fix велосипеду и обнаружите, что такая система торможения ничуть не хуже ручной.</p>
                <div className="peculiarities__box">
                    <div className="peculiarities__box__box">
                        <img src={logo1} alt=""  className='peculiarities__box__box__img'/>
                        <p className='peculiarities__box__box__info'>Красивый дизайн</p>
                    </div>
                    <div className="peculiarities__box__box">
                        <img src={logo2} alt=""  className='peculiarities__box__box__img'/>
                        <p className='peculiarities__box__box__info'>Малый вес</p>
                    </div>
                    <div className="peculiarities__box__box">
                        <img src={logo3} alt=""  className='peculiarities__box__box__img'/>
                        <p className='peculiarities__box__box__info'>Высокая скорость</p>
                    </div>
                    <div className="peculiarities__box__box">
                        <img src={logo4} alt=""  className='peculiarities__box__box__img'/>
                        <p className='peculiarities__box__box__info'>Простота в обслуживании</p>
                    </div>
                    <div className="peculiarities__box__box">
                        <img src={logo5} alt=""  className='peculiarities__box__box__img'/>
                        <p className='peculiarities__box__box__info'>Фикс + свободный ход</p>
                    </div>
                    <div className="peculiarities__box__box">
                        <img src={logo6} alt=""  className='peculiarities__box__box__img'/>
                        <p className='peculiarities__box__box__info'>Необычные трюки</p>
                    </div>
                </div>
                <p className='peculiarities__info'>Велосипеды фиксед гир купить стоит и из-за того, что они необычайно просты в обслуживании. Представьте: никаких тормозов (их можно поставить при необходимости) и многочисленных передач, а, значит, ваш фикс байк не нуждается в ежедневном осмотре и уходе, не говоря уже о сложном ремонте.</p>
                <br />
                <p className='peculiarities__info'>Помните: вам все время придется крутить педали, а при высокой скорости они вертятся очень и очень быстро. На педали для вашего велосипеда fixed gear купить можно специальные застежки на ноги, которые называются Toe Clips (туклипсы): они не позволяют ноге съезжать с педали, и контролировать ее при движении намного легче.</p>
                <br />
                <p className='peculiarities__info1'>Неискушенным новичкам кажется, что кататься на подобных байках невероятно сложно (если вообще возможно). Но ключевое слово тут — «кажется»! Уже через пару дней все особенности фикс велосипеда станут для вас привычными и удобными, а чем чаще вы будете кататься, тем больше удовольствия принесет вам этот процесс. И, поверьте, тут есть чем насладиться!</p>

            </div>

        </section>
    );
};

export default Peculiarties;