import React from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loginLoading, setLoginLoading] = React.useState(false);
  const [loginError, setLoginError] = React.useState('');
  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    const data = await response.json();
    setData(data);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setLoginError(null);
      setLoginLoading(true);
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      const { token } = await response.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/account');
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setLoginLoading(false);
    }
  }

  const userLogout = React.useCallback(
    async function userLogout() {
      setData(null);
      setLogin(false);
      setLoginLoading(false);
      setLoginError(false);
      window.localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate],
  );

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setLoginError(null);
          setLoginLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Error: Invalid token');
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoginLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, login, loginLoading, loginError }}
    >
      {children}
    </UserContext.Provider>
  );
};
