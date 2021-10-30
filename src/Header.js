import React from 'react';

import styles from './Header.module.css';
import logo from './img/logo.svg';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <a href="/">
          <img src={logo} alt="Reddit Timer logo" width="150" height="36" />
        </a>
      </div>
      <ul className={styles.nav}>
        <li>
          <a href="/search/javascript">Search</a>
        </li>
        <li>
          <a href="#how-it-works">How it works</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
