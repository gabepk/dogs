import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import { TOKEN_POST } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Loading from '../../Helper/Loading';

const UserProfile = () => {
  const { user } = useParams();
  const { error, request } = useFetch();

  React.useEffect(() => {
    /* Because the API doesnt have a method to verify if the user exists,
      I'll pretend to login with a fake password and check the error message */
    async function verifyUser() {
      const { url, options } = TOKEN_POST({
        username: user,
        password: 'verifyUser',
      });
      await request(url, options);
    }
    verifyUser();
  }, [request, user]);

  if (error) {
    return (
      <section className="container mainContainer">
        <h1 className="title">{user}</h1>
        {error && error.includes('Nome de usuário desconhecido') ? (
          <p>User not found</p>
        ) : (
          <Feed user={user} />
        )}
      </section>
    );
  } else return <Loading />;
};

export default UserProfile;
