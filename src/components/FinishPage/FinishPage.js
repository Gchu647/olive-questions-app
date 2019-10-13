import React from 'react';
import { Link } from 'react-router-dom';
import './FinishPage.css';

const FinishPage = () => {
  return(
    <div className="FinishPage">
      <div class='FinishPage-content'>
        <p>Finish!</p>
      </div>
      <div class='FinishPage-btn-wrap'>
        <Link className='btn' to='/'>TRY AGAIN</Link>
      </div>
    </div>
  );
}

export default FinishPage;