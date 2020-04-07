import React from 'react';

class Footer extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    render(){
        const { company, nameCompany} = this.props;
        return(
        <h4>{`${company} es ${nameCompany}`}</h4>
        );
    }
}

export default Footer;