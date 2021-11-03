import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import logo from './img/logo.svg';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link to="/">
          <img src={logo} alt="Reddit Timer logo" width="150" height="36" />
        </Link>
      </div>
      <ul className={styles.nav}>
        <li>
          <Link to="/search/javascript">Search</Link>
        </li>
        <li>
          <Link to="/#how-it-works">How it works</Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
