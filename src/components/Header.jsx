import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>My Portfolio</h1>
    </header>
  );
}

export default Header;
  <nav>
    <a href="/">Home</a> | <a href="/education">Education</a> | <a href="/projects">Projects</a> | <a href="/contact">Contact</a>
  </nav>
