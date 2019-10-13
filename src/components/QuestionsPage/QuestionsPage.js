import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './QuestionsPage.css';
import oliveDB from '../../data/oliveDB';

class QuestionsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      question: '',
      questionList: shuffleArray(oliveDB), // function on the bottom of page
    }

    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
  }

  componentDidMount () {
    this.setState(prevState => ({
      question: prevState.questionList[0]
    }));
    console.log(this.state.questionList);
  }

  nextQuestion () {
    if (this.state.index > 10)
      return null;
    
    this.setState(prevState => ({
      question: prevState.questionList[ prevState.index + 1],
      index: prevState.index + 1
    }));
  }

  prevQuestion () {
    if (this.state.index < 1)
    return null;
  
    this.setState(prevState => ({
      question: prevState.questionList[ prevState.index - 1],
      index: prevState.index - 1
    }));
  }

  render () {
    return (
      <div class='QuestionsPage'>
        <div class='Questions-num'>
          <p>Q{this.state.index + 1}</p>
        </div>
        <div class='Questions-content'>
          <p>{this.state.question}</p>
        </div>
       <div class='Questions-btn-wrap'>
          <div className='btn next-btn' onClick={this.nextQuestion}>NEXT QUESTION</div>
          <Link className='btn end-btn' to='/questions'>LAST QUESTION</Link>
          <div className='btn' onClick={this.prevQuestion}>PREVIOUS QUESTION</div>
       </div>
      </div>
    );
  }
}

function shuffleArray(arr) {
  let i = arr.length - 1;

  for (; i > 0; i--) { // moves the position of each index at least once
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

export default QuestionsPage;