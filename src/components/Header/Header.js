import React, { Component } from 'react';
import './header.css';
import logo from '../../assets/logo.png';

class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <>
        <nav>
          <a href="/">
            <img className='logo' src={logo} alt="Logo" />
          </a>

          <div>
            <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <li>
                <a className='active' href="/">ABOUT US</a></li>
              <li><a href="/todo">CONTACT US</a></li>
              <li><a href="/calender">PRIVACY POLICY</a></li>
              <li><a href="/tasks">TERMS & CONDITION</a></li>
              <li><a href="/phone">(855) 939-0621</a></li>
            </ul>
          </div>

          <div id='mobile' onClick={this.handleClick}>
            <i id='bar' className={this.state.clicked ? "fa-solid fa-times" : "fas fa-bars"}></i>

          </div>
        </nav>
      </>
    )
  }

}

export default Header;