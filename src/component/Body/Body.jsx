import React, { useState } from 'react';

import CountryList from '../CountryList/CountryList';
import CityList from '../CityList/CityList';

import './Body.css';
// { city, lat, lon }
const Body = ({ info }) => {

    // console.log('Body-props: ', props)
    return (
        <div className='body-list'>
            {
                info &&
                <CityList info />
            }
        </div>
    )
};

export default Body;