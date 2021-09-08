import React from 'react';

import spaceX from '../assets/images/spacex.png'

import './Header.css'

const Header = () => {

    return (
        <div className="ui segment">
            <div className="ui center aligned">
                <img  className="header-logo" src={spaceX} alt="spacex"/>
            </div>
        </div>
    )
}

export default Header;