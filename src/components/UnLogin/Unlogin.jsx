import React from 'react';
import { useDispatch } from 'react-redux';
import { newToken } from 'redux/sliceToken';
import { UnLogined } from './UnLogin.styled';
import { useSelector } from 'react-redux';
import { isAuth } from 'redux/sliceAuth';

export function Unlogin(props) {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <div>User :{auth}</div>
      <UnLogined
        onClick={() => {
          dispatch(newToken(''));
          dispatch(isAuth(''));
        }}
      >
        Unlogin
      </UnLogined>
    </>
  );
}

Unlogin.propTypes = {};
