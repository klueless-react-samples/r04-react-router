import logo from '../logo.svg';

import React from 'react'
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Link to="/" className='App-link'>Home</Link>
      <Link to="/about" className='App-link'>About</Link>
      <Link to="/contact" className='App-link'>Contact</Link>
    </header>
  )
}
