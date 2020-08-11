import React from 'react';
// import logo from './logo.svg';

import MainActivity from './component/MainActivity/MainActivity';
import Header from './component/Header/Header';



import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <MainActivity />
      </div>

    </div>
  );
}

export default App;