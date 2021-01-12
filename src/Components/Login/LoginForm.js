import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../../Helper/Error';
import styles from './LoginForm.module.css';
import stylesbtn from '../Forms/Button.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, loginError, loginLoading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username, password);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} action="" onSubmit={handleSubmit}>
        <Input type="text" label="Username" name="username" {...username} />
        <Input type="password" label="Password" name="password" {...password} />
        {loginLoading ? (
          <Button disabled>...Loading</Button>
        ) : (
          <Button>Sign in</Button>
        )}
        <Error error={loginError} />
      </form>
      <Link className={styles.passwordLost} to="/login/passwordlost">
        Forgot the password?
      </Link>
      <div className={styles.createAccount}>
        <h2 className={styles.subtitle}>Create Account</h2>
        <p>Don't have an account?</p>
        <Link className={stylesbtn.button} to="/login/createaccount">
          Sign up
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
