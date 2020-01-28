import React from 'react';
import logo from './IMG_0485.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="left-side">
          <img src={logo} className="App-logo-l" alt="logo" />
        </div>
        <div className="middle-side">
          <img src={logo} className="App-log" alt="logo" />
          <p>
            Wittawin Muangnoi
          </p>
          <p>
            วิธวินท์ เมืองน้อย
          </p>
          <p>
            61010968
          </p>
        </div>
          
        <div className="right-side">
          <img src={logo} className="App-logo-r" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
