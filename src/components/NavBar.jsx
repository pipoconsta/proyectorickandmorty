import React from 'react';
import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar({ onSearch, logout }) {
  return (
    <nav className={styles.nav}>

      <div className={styles.dropdown}>
        <button className={styles.navButton}>MENÚ</button>
        <div className={styles.dropdownContent}>
          <NavLink className={styles.dropdownItem} to="/about">ABOUT</NavLink>
          <NavLink className={styles.dropdownItem} to="/home">HOME</NavLink>
          <NavLink className={styles.dropdownItem} to="/favorites">FAVORITOS</NavLink>
        </div>
      </div>
      <SearchBar onSearch={onSearch} />
          <button className={styles.dropdownItem} onClick={logout}>LOGOUT</button>
    </nav>
  );
}