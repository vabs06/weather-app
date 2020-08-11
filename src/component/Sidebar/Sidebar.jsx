import React, { useState } from 'react';

import LIST from '../../data-store/country-city';

import './Sidebar.css';
import CountryList from '../CountryList/CountryList';

const Sidebar = (props) => {
    const [countryList] = useState(LIST);
    console.log("Sidebar props: ", props);
    return (
        <div className='sidebar'>
            {countryList.map(country =>
                (<CountryList
                    key={country.id}
                    {...country}
                />)
            )}
        </div>
    )
};

export default Sidebar;