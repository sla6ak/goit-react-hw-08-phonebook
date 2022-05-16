import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const curentAuth = useSelector(state => state.auth);

  return curentAuth === '' ? children : <Navigate to="/" />;
}

PublicRoute.propTypes = {};

export default PublicRoute;
