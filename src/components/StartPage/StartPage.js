import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StartPage.css';
import logo from '../../assets/olive-logo.png';

const StartPage = props => {
  return(
    <div className="StartPage">
      <img src={logo} className="StartPage-logo" alt="logo" />
      <div class='StartPage-content'>
          <p>12 Questions for</p>
          <p>First Dates</p>
          <Link className='btn' to='/questions'>START</Link>
      </div>
    </div>
  );
}

export default StartPage;