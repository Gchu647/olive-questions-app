import React from 'react';
import logo from '../../assets/olive-logo.png';
import './App.css';
import StartPage from '../StartPage/StartPage';
import QuestionsPage from '../QuestionsPage/QuestionsPage';

function App() {
  return (
    <div className="App">
      <div className="Mobile-container">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <StartPage />
      </div>
    </div>
  );
}

export default App;
