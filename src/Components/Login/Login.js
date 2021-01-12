import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Navigate to="/account" />;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/create" element={<LoginCreate />}></Route>
        <Route path="/passwordlost" element={<LoginPasswordLost />}></Route>
        <Route path="/reset" element={<LoginPasswordReset />}></Route>
      </Routes>
    </div>
  );
};

export default Login;
