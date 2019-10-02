import React, { Component } from 'react';
import './QuestionsPage.css';
import questions from '../../data/questions';

class QuestionsPage extends Component {
  render () {
    return (
      <div class='QuestionsPage'>
        <p>QuestionsPage</p>
        <p>{questions[1]}</p>
      </div>
    );
  }
}

export default QuestionsPage;