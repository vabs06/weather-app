import React, { useState, useCallback, useEffect, useRef } from 'react'

// import CityList from '../CityList/CityList';
import Body from '../Body/Body';

import './CountryList.css'

const CountryList = ({ cities, country_code, country_name }) => {

    const [city, setCity] = useState({});
    const [isSending, setIsSending] = useState(false)
    const isMount = useRef(false);

    useEffect(() => {
        return () => { isMount.current = false }
    }, []);

    const populateList = useCallback(async () => {
        if (isSending) return;
        setIsSending(true);
        // below is for test remove and using original request to fetch data
        for (let i = 1; i <= 3; i++) {
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
                .then(data => data.json())
            setCity(response);
        }
        if (isMount.current)
            setIsSending(false);
    }, [])

    return (
        <div className='country-list' >
            <p onClick={() => populateList(cities)}>
                {country_name}
            </p>
            {/* {
                city &&
                (<Body info={city} />)
            } */}
        </div >
    );
}
export default CountryList;