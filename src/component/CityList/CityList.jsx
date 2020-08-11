import React from 'react';

import './CityList.css';

const CityList = (props) => {
    return (
        <div className='city-list'>
            <div className='city-card'>
                <div className='city-name'>
                    <p>head</p>
                </div>
                <div className='city-temp-container'>
                    <p>temp-1</p>
                    <p>temp-2</p>
                    {/* <img alt='temp-logo' /> */}
                </div>
            </div>
        </div>
    )
};

export default CityList;