import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';

const UserProfile = () => {
  const { user } = useParams();
  return (
    <section className="container mainContainer">
      {/*  TODO: verify if user exists before, otherwise PHOTOS_GET will fetch the photos of all users */}
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
