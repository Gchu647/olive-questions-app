import React, { Component } from 'react';
import './QuestionsPage.css';
import questions from '../../data/questions';

class QuestionsPage extends Component {
  render () {
    return (
      <div class='QuestionsPage'>
        <div class='Questions-num'>
          <p>Q5</p>
        </div>
        <div class='Questions-content'>
          <p>{questions[5]}</p>
        </div>
       <div class='Questions-btn-wrap'>
          <div className='btn'>NEXT QUESTION</div>
          <div className='btn'>PREVIOUS QUESTION</div>
       </div>
      </div>
    );
  }
}

export default QuestionsPage;