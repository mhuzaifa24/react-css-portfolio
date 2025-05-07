import React from 'react';
import styles from './Sidenav.module.css';

function Sidenav() {
  return (
    <aside className={styles.sidenav}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/education">Education</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </aside>
  );
}

export default Sidenav;
<button className={styles.toggle}>Toggle Sidebar</button>
