import React from 'react';
import './style.scss';

function Header() {
  return <div className="header-container flex space-between vertical-align">
      <div>Summary</div>
      <div className="font-12">Suggested: 300 characters</div>
  </div>
}

export default Header;