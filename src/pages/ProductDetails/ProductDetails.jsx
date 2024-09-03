import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './ProductDetails.scss';
import { addToCart } from '../../store/cartSlice';

const ProductDetails = () => {
    const dispatch = useDispatch();

    const add = (product) => {
        dispatch(addToCart({ product, count: 1 }));
    };

    const { id } = useParams();
    const { data } = useSelector(state => state.fixedSlice);
    const product = data.find(item => item.id === parseInt(id));

    if (!product) {
        return <p>Товар не найден</p>;
    }

    

    return (
        <section className='product-details'>
            <div className="product-details__container container">
                <div className="product-details__img-container">
                    <img src={product.img} alt={product.title} className="product-details__img" />
                </div>
                <div className="product-details__info">
                    <h1 className="product-details__title">{product.title}</h1>
                    <p className="product-details__price">{product.price}</p>
                    
                    <div className="product-details__size-selection">
                        <label htmlFor="frame-size">Размер рамы:</label>
                        <select className='frame-size' id="frame-size" name="frame-size">
                            <option value="49">49</option>
                            <option value="52">52</option>
                            <option value="55">55</option>
                            <option value="58">58</option>
                        </select>
                    </div>

                    <button 
                        className="product-details__add-to-cart" 
                        onClick={() => add(product)}
                    > 
                        В корзину
                    </button>
                    <h3 className="product-details__description-title">Описание</h3>
                    <p className="product-details__description">{product.description}</p>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;