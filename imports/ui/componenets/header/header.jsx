import React from 'react';

import './header.style.scss';

class Header extends React.PureComponent {
  render() {
    return (
      <div className="app-header">
        <nav>
          <a href="#">Home</a>
          <a href="#">Contact form</a>
          <a href="#">Sign in</a>
          <a href="#">Administration</a>
        </nav>
      </div>
    );
  }
}

export default Header;