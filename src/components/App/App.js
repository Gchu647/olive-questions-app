import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import StartPage from '../StartPage/StartPage';
import QuestionsPage from '../QuestionsPage/QuestionsPage';
import FinishPage from '../FinishPage/FinishPage';

function App() {
  return (
    <div className="App">
      <div className="Mobile-container">
      <Router>
        <Switch>
            <Route exact={true} path='/' component={StartPage} />
            <Route path='/questions' component={QuestionsPage} />
            <Route path='/finish' component={FinishPage} />
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;