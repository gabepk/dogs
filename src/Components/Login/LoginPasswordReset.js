import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Head from '../../Helper/Head';
import Error from '../../Helper/Error';
import { useNavigate } from 'react-router-dom';
import { PASSWORD_RESET } from '../../api';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    // useParams() cannot be used inside useEffect
    // const { key } = useParams();
    const params = new URLSearchParams(window.location.search);

    const key = params.get('key');
    if (key) setKey(key);
    const login = params.get('login');
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) navigate('/login');
  }

  return (
    <div>
      <Head title="Reset Password" />
      <h1 className="title">Reset your password</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="New Password"
          type="password"
          name="password"
          {...password}
        />
        {loading ? <Button>Reseting...</Button> : <Button>Reset</Button>}
      </form>

      <Error error={error} />
    </div>
  );
};

export default LoginPasswordReset;
