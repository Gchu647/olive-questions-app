import React from 'react';
import logo from '../../assets/olive-logo.png';
import './App.css';
import StartPage from '../StartPage/StartPage';
import QuestionsPage from '../QuestionsPage/QuestionsPage';

function App() {
  return (
    <div className="App">
      <div className="Mobile-container">
        <StartPage />
      </div>
    </div>
  );
}

export default App;
