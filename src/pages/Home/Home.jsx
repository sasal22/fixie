import React from 'react';
import './Home.scss'
import Content from './Content/Content';
import Peculiarties from './Peculiarities/Peculiarties';
import Article from './Article/Article';
import Beautiful from './Beautiful/Beautiful';

const Home = () => {
    return (
        <>
           <Content/>
           <Peculiarties/>
           <Article/>
           <Beautiful/>
        </>
    );
};

export default Home;