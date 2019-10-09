import React, { Component } from 'react';
import './QuestionsPage.css';
import oliveDB from '../../data/oliveDB';

class QuestionsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      questionList: shuffleArray(oliveDB), // function on the bottom
      index: 0
    }
  }

  componentDidMount () {
    this.setState(prevState => ({
      question: prevState.questionList[0]
    }));
    console.log(this.state.questionList);
  }

  // pickQuestion() {
  //   let randomIndex = Math.floor(Math.random() * oliveDB.length);
  //   let randomQ = oliveDB.splice(randomIndex, 1)[0];
  //   console.log('index: ', randomIndex); // test id

  //   this.setState({ question: randomQ });
  // }

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
          <div className='btn' onClick={this.pickQuestion}>NEXT QUESTION</div>
          <div className='btn'>PREVIOUS QUESTION</div>
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