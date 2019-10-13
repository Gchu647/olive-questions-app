import React from 'react';
import logo from '../../assets/olive-logo.png';
import './App.css';
import StartPage from '../StartPage/StartPage';
import QuestionsPage from '../QuestionsPage/QuestionsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="Mobile-container">
      <Router>
        <Switch>
            <Route exact={true} path='/' component={StartPage} />
            <Route path='/questions' component={QuestionsPage} />
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;