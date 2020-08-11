import React from 'react';

import Sidebar from '../Sidebar/Sidebar';

import './MainActivity.css';
import Body from '../Body/Body';

const MainActivity = () => (
    <div className='main-activity'>
        <Sidebar />
        <Body />
    </div>
);

export default MainActivity;