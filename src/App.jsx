import React, { useEffect, useState } from 'react';
import './App.scss'
import Header from './Layout/header/header';
import Footer from './Layout/Footer/Footer';
import {Routes,Route} from 'react-router-dom'
import Layout from './Layout/Layout';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Stock from './pages/Stock/Stock';
import Twofree from './pages/Stock/Promotion/Twofree/Twofree';
import Birthday from './pages/Stock/Promotion/Birthday/Birthday';
import Bonus from './pages/Stock/Promotion/Bonus/Bonus';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import Bicycles from './pages/Bicycles/Bicycles';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getAllFixed } from './store/fixedSlice';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart.jsx/Cart';

const App = () => {
    // const [fixed,setFixed] = useState([])

    const dispatch = useDispatch()
    useEffect(()=>{
        axios('http://localhost:8080/fixed-gear')
        .then(({data})=>dispatch(getAllFixed(data)))
    },[])
    return (
        <>
            
                <Routes>
                    <Route path='/'element={<Layout/>}>
                        <Route path=''element={ <Home/>}/>
                        <Route path='/bicycles'element={<Bicycles />}/>
                        <Route path='/stock'element={<Stock/>}/>
                        <Route path='/contact'element={<Contact/>}/>
                        <Route path='/twofree'element={<Twofree/>}/>
                        <Route path='/birthday'element={<Birthday/>}/>
                        <Route path='/bonus'element={<Bonus/>}/>
                        <Route path='/register'element={<Register/>}/>
                        <Route path="/product/:id" element={<ProductDetails/>} />
                        <Route path="/cart" element={<Cart/>} />
                        <Route path/>
                    </Route>
                        <Route path='/login'element={<Login/>}/>
                        <Route path='*'element={<NotFound/>}/>
                </Routes>
           
           
        </>
    );
};

export default App;
