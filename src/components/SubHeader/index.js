import React from 'react';

import Dropdown from '../Dropdown';

import './SubHeader.scss'

const SubHeader = ({ selectValue, filterData, onSelectChange }) => {


    return (
        <div className="sub-header">
            <Dropdown 
                selectValue={selectValue}
                filterData={filterData}
                onSelectChange={onSelectChange}
            />
        </div>
    )
}

export default SubHeader;