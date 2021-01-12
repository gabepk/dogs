import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';

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
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input type="text" label="Username" name="username" {...username} />
        <Input type="password" label="Password" name="password" {...password} />
        {loginLoading ? (
          <Button disabled>...Loading</Button>
        ) : (
          <Button>Sign in</Button>
        )}
        {loginError && <p>{loginError}</p>}
      </form>

      <Link to="/login/create">Create</Link>
    </section>
  );
};

export default LoginForm;
