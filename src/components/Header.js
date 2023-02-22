import React from 'react';
import {NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


export const Header = ({ startLogout }) =>(
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" className={({isActive})=>(isActive?'active':'inactive')}>Dashboard</NavLink>
      <NavLink to="/create" className={({isActive})=>(isActive?'active':'inactive')}>Create</NavLink>
      <NavLink to="/edit" className={({isActive})=>(isActive?'active':'inactive')}>Edit</NavLink>
      <NavLink to="/help" className={({isActive})=>(isActive?'active':'inactive')}>Help</NavLink>
      <button onClick = {startLogout}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header);