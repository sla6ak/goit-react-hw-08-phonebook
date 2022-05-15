import React from 'react';
import { useDispatch } from 'react-redux';
import { newToken } from 'redux/sliceToken';
import { UnLogined } from './UnLogin.styled';

export function Unlogin(props) {
  const dispatch = useDispatch();
  return (
    <UnLogined
      onClick={() => {
        dispatch(newToken(''));
      }}
    >
      Unlogin
    </UnLogined>
  );
}

Unlogin.propTypes = {};
