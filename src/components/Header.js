import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className='navbar navbar-default navbar-fixed-top'>
        <div className='container-fluid'>
            <ul className='nav nav-bar'>
              <li><Link className='btn btn-primary' to='/'>Home</Link></li>
            </ul>
        </div>
      </div>
    );
  }
}
