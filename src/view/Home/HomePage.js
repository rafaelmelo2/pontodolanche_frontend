import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import Carousel  from '../Home/Carousel';

function HomePage() {
    return(
        <>
        <NavBar />
        <Carousel />
        </>
    );
}

export default HomePage