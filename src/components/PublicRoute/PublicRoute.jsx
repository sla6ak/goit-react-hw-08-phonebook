import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const curentAuth = useSelector(state => state.auth);

  return curentAuth === '' ? children : <Navigate to="/contacts" />;
}

export default PublicRoute;
