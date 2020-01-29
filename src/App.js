import React from 'react';
import logo from './IMG_0485.png';
import './App.css';

 
class App extends React.Component {
  handleMouseMove(event){
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 50 / window.innerHeight + "%";
    var eyel = document.getElementById("eye-l");    
    var eyer = document.getElementById("eye-r");
    eyel.style.left = x;
    eyel.style.top = y;
    eyel.style.transform = "translate(" +x+"," +y+")";
    eyer.style.left = x;
    eyer.style.top = y;
    eyer.style.transform = "translate("+x+"," +y+")";
    console.log(event.clientX);
  }
  render(){
    return (
      <div className="App" onMouseMove={this.handleMouseMove}>
        <header className="App-header">
          <div className="left-side">
            <img src={logo} className="App-logo-l" alt="logo" />
          </div>
          <div className="middle-side">
            <div className="tae">
              <img src={logo} className="App-log" alt="logo" />
              <div className="white-eye" id="weyel">
                <div className="eyes" id="eye-l">
                </div>
              </div>
              <div className="white-eye" id="weyer">
                <div className="eyes" id="eye-r">
                </div>
              </div>
              
            </div>
            <div>
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
          </div>
            
          <div className="right-side">
            <img src={logo} className="App-logo-r" alt="logo" />
          </div>
        </header>
      </div>
    );
  }
  
}

export default App;
