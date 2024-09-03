import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { Link, useNavigate } from 'react-router-dom';
import './Content.scss';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Content = () => {
    const { data } = useSelector(state => state.fixedSlice);
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true, 
        centerMode: true,
        centerPadding: '15px', 
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div className="slick-arrow slick-next" onClick={onClick}>
                <i className="arrow right"></i>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div className="slick-arrow slick-prev" onClick={onClick}>
                <i className="arrow left"></i>
            </div>
        );
    }

    const handleCardClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <section className='content'>
            <div className="container">
                <div className="content__box">
                    <h2 className='content__box__h2'>ВЫБЕРИ СВОЙ</h2>
                    <p className='content__box__p'>Модели велосипедов Fixed Gear</p>
                    <Link to="/bicycles"><button className='content__box__button'>Смотреть католог</button></Link>
                </div>
                <h2>Велосипеды Fixed Gear</h2> <br />
                <p>Что такое велосипед fixed gear? Почему стоит купить велосипед с фиксированой передачей, а не классический круизер?</p> <br />
                <p>Велосипед фиксед гир (англ. fixed gear) — велосипед с фиксированной передачей, у которого в конструкции нет свободного хода, и <br />
                колеса при езде продолжают крутиться, даже если мы перестаем крутить педали. Фикс велосипеды устроены просто: при движении  <br />
                педали вращаются всегда!</p>
                <br />
                <p>Это заставляет педали крутиться при вращении колеса, причем как при езде вперед, так и при движении назад. Другое название подобных 
                моделей — fixed gear bike.</p>
            </div>
            <div className='carousel'>
                <div className="container">
                    <Slider {...settings}>
                        {data.map((el) => (
                            <div 
                                className="carousel__card" 
                                key={el.id}
                                onClick={() => handleCardClick(el.id)} // Обработчик клика
                            >
                                <img src={el.img} alt={el.title} className="carousel__card__img" />
                                <div className="carousel__card__info">
                                    <h3 className="carousel__card__title">{el.title}</h3>
                                    <p className="carousel__card__price">{el.price}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Content;