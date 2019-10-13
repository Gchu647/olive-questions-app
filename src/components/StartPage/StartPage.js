import React from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css';
import logo from '../../assets/olive-logo.png';

const StartPage = () => {
  return(
    <div className="StartPage">
      <div className='StartPage-logo-wrap'>
        <img src={logo} className="StartPage-logo" alt="logo" />
      </div>
      <div class='StartPage-content'>
        <p>12 Questions for</p>
        <p>First Dates</p>
      </div>
      <div class='StartPage-btn-wrap'>
        <Link className='btn' to='/questions'>START</Link>
      </div>
    </div>
  );
}

export default StartPage;