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
                <select value={selectValue} onChange={handleChange}>
                    <option hidden>Select your option</option>
                    {filterData.map(data => {
                        console.log(data)
                        return (
                            <option key={data['id']} value={data['value']}>
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