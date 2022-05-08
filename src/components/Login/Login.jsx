import React from 'react';
import { NavLink } from 'react-router-dom';
import { BoxLogin } from './Login.styled';

export function Login(props) {
  return (
    <BoxLogin>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
    </BoxLogin>
  );
}
