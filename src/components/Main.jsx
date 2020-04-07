import React from 'react';
import { Link } from 'react-router-dom';
const Main = () => {
    return ( 
        <>
            <h2>Esta es mi página principal de productos</h2>
            <Link to="/">
                <button>Rregresar al HOME</button>
            </Link>          
        </>
     );
}
 
export default Main;