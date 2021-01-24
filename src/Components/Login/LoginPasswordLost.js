import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Head from '../../Helper/Head';
import Error from '../../Helper/Error';
import { PASSWORD_LOST } from '../../api';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('passwordlost', 'passwordreset'),
      });
      const { response } = await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Password Lost" />
      <h1 className="title">Lost your password?</h1>
      {data ? (
        <p style={{ color: '#0b5' }}>Email sent</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Username" type="text" name="email" {...login} />
          {loading ? (
            <Button>Sending email...</Button>
          ) : (
            <Button>Send email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
