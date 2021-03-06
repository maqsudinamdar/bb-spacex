import React from 'react';

import Funnel from '../../assets/icons/Funnel.svg';

import './Dropdown.scss'

const Dropdown = ({ selectValue, filterData, onSelectChange }) => {

    const handleChange = e => {
		onSelectChange(e.target.value);
	};

    return (
        <div className="frame">
            <div className="overlap-group">
                <img 
                    className="funnel"
                    src={Funnel}
                />
            </div>
            <div className="dropdown-text valign-text-middle">
                <select 
                    value={selectValue['value']} 
                    onChange={handleChange}
                    style={{ backgroundColor: 'white', border: '0px'}}
                >
                    <option hidden>{selectValue['value']}</option>
                    {filterData.map(data => {
                        return (
                            <option key={data['id']} value={data['id']}>
                                {data['value']}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>

    )
}

export default Dropdown;