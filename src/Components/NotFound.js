import React from 'react';
import Head from '../Helper/Head';

const NotFound = () => {
  return (
    <div className="container mainContainer">
      <Head title="Error 404" />
      <h1 className="title">Error 404</h1>
      <p>Page not found</p>
    </div>
  );
};

export default NotFound;
