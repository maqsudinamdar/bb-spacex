import React from 'react';

import spaceX from '../../assets/images/Logo.png'

import './Header.scss'

const Header = () => {

    return (
        <div className="header">

            <div className="Rectangle">
                <img  className="Logo" src={spaceX} alt="spacex"/>
            </div>
        </div>
    )
}

export default Header;