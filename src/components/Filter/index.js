import React from 'react';

import {ReactComponent as Funnel} from '../../assets/icons/Funnel.svg';
import {ReactComponent as SmallDropdown} from '../../assets/icons/SmallDropdown.svg';

import './Filter.scss'

const Filter = () => {

    return (
        <div className="Filter">
            <Funnel />
                All Launches
            <SmallDropdown />
        </div>
    )
}

export default Filter;