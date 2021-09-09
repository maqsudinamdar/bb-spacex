import React from 'react';

import Filter from '../Filter';

import './SubHeader.scss'

const SubHeader = () => {

    return (
        <div className="SubHeader">
            <div className="mt-5 ml-5 mr-5 mb-0">
                <div className="d-flex justify-content-between align-items-center mr-1 ml-1">
                    <Filter />
                </div>
            </div>
        </div>
    )
}

export default SubHeader;