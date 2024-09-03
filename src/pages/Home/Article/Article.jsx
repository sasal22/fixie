import React from 'react';
import './Article.scss'
import Logo1 from './Photo/kto-takie-fiksery-anons.jpg'
import Logo2 from './Photo/tokio-gorod-fixed-gear-anons.jpg'
import Logo3 from './Photo/velosipedy-cannondale-anons.jpg'

const Article = () => {
    return (
        <section className='article'>
            <div className="container">
                <h2 className='article__name'>Популярные статьи о фиксах</h2>
                <div className="article__bigBox">
                    <div className="article__box">
                        <img src={Logo1} alt="" className='article__box__photo'/>
                        <h3 className='article__box__name'>Фиксеры</h3>
                        <p className='article__box__info'>Днем они занятые профессионалы, однако ночью они — одетые в лайкру суперспортсмены.</p>
                        <h4 className='article__box__hashtag'>#Культура Fixed Gear</h4>
                    </div>
                    <div className="article__box">
                        <img src={Logo2} alt="" className='article__box__photo'/>
                        <h3 className='article__box__name'>Токио — город fixed gear</h3>
                        <p className='article__box__info'>Япония — страна с богатейшими велотрадициями, ставшая колыбелью Ренессанса мировой моды на фиксы.</p>
                        <h4 className='article__box__hashtag'>#Культура Fixed Gear</h4>
                    </div>
                    <div className="article__box">
                        <img src={Logo3} alt="" className='article__box__photo'/>
                        <h3 className='article__box__name'>Велосипеды Cannondale</h3>
                        <p className='article__box__info'>Конструкторы фирмы постоянно совершенствуют и внедряют новые технологии.</p>
                        <h4 className='article__box__hashtag'>#Производители</h4>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Article;