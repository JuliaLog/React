import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' className = {s.active}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' className = {s.active}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;