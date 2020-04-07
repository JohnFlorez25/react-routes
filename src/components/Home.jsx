import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => (
    <>
        <h3>Bienvenido a nuestra compañia, serás lo más feliz.</h3>
        <Link to="/main">
            <button>Presioname!!!</button>
        </Link>
        
    </>
);

export default Home;