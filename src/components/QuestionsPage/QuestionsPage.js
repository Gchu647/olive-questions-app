import React, { Component } from 'react';
import './QuestionsPage.css';
import oliveDB from '../../data/oliveDB';

class QuestionsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: 'hi'
    }

    this.pickQuestion = this.pickQuestion.bind(this);
  }

  componentDidMount () {
    this.pickQuestion();
  }

  pickQuestion() {
    let randomIndex = Math.floor(Math.random() * oliveDB.length);
    let randomQ = oliveDB.splice(randomIndex, 1)[0];
    console.log('index: ', randomIndex); // test id

    this.setState({ question: randomQ });
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
          <div className='btn' onClick={this.pickQuestion}>NEXT QUESTION</div>
          <div className='btn'>PREVIOUS QUESTION</div>
       </div>
      </div>
    );
  }
}

export default QuestionsPage;