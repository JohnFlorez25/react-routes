import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout (props) {
    return(
        <React.Fragment>
            <Header name="El mejor encabezado del mundo" />
                {props.children}
            <Footer 
                company="La mejor empresa del mundo"
                nameCompany="Geek Girls Company S.A.S" />
        </React.Fragment>
    )
}

export default Layout;