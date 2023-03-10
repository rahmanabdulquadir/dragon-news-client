import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

  if(!user){
    return <Navigate to={'/login'}></Navigate>
  }
  return children
};

export default PrivateRoute;