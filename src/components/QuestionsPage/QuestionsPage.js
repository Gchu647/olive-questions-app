import React, { Component } from 'react';
import './QuestionsPage.css';
import oliveDB from '../../data/oliveDB';

class QuestionsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: 'hi'
    }

  }

  pickQuestion() {
    let randomIndex = Math.floor(Math.random() * oliveDB.length);
    let randomQ = oliveDB.splice(randomIndex, 1)[0];
    console.log('index: ', oliveDB.indexOf(randomQ)); // test id

    this.setState({ vocab: randomQ });
  }

  render () {
    return (
      <div class='QuestionsPage'>
        <div class='Questions-num'>
          <p>Q5</p>
        </div>
        <div class='Questions-content'>
          <p>{this.state.question}</p>
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