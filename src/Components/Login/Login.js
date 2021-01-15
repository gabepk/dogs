import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreateAccount from './LoginCreateAccount';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Navigate to="/account" />;
  }

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/createaccount" element={<LoginCreateAccount />}></Route>
          <Route path="/passwordlost" element={<LoginPasswordLost />}></Route>
          <Route path="/reset" element={<LoginPasswordReset />}></Route>
        </Routes>
      </div>
    </section>
  );
};

export default Login;
