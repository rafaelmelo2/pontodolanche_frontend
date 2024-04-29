import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import Carousel  from '../Home/Carousel';
import Main  from '../Home/Main';
import Infos from './Infos';


function HomePage() {
    useEffect(() => {
        document.title = "Ponto do lanche"; // Defina o título desejado aqui
    }, []);
    
    return(
        <>
        
        <NavBar />
        <Carousel />
        <Main />
        <Infos />
        
        </>
    );
}

export default HomePage