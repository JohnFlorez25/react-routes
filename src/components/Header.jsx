import React from 'react';

class Header extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        const { name } = this.props;
        return(
            <h1>{name}</h1>
        );
    }
}

export default Header;