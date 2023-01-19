import React from 'react';
import {NavLink } from 'react-router-dom';
const Header = () =>(
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" className={({isActive})=>(isActive?'active':'inactive')}>Dashboard</NavLink>
      <NavLink to="/create" className={({isActive})=>(isActive?'active':'inactive')}>Create</NavLink>
      <NavLink to="/edit" className={({isActive})=>(isActive?'active':'inactive')}>Edit</NavLink>
      <NavLink to="/help" className={({isActive})=>(isActive?'active':'inactive')}>Help</NavLink>
    </header>
)

export default Header;