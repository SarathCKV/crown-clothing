import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assests/crown.svg';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
