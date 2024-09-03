import React from 'react';
import './Catalog.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Catalog = () => {
    const { data } = useSelector(state => state.fixedSlice);
    const navigate = useNavigate(); // Хук для навигации

    const handleCardClick = (id) => {
        navigate(`/product/${id}`); // Перенаправляем на страницу с деталями товара
    };

    return (
        <section className='catalog'>
            <div className="catalog__container container">
                <div className="catalog__cards">
                    {data.map((el) => (
                        <div 
                            className="catalog__card" 
                            key={el.id} 
                            onClick={() => handleCardClick(el.id)} // Обработчик клика
                        >
                            <img src={el.img} alt={el.title} className="catalog__card__img" />
                            <div className="catalog__card__info">
                                <h3 className="catalog__card__title">{el.title}</h3>
                                <p className="catalog__card__price">{el.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Catalog;