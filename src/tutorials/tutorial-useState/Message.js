import React from 'react';

const Message = ({ message }) => {
  console.log('message: ', message);
  return <p>{message}</p>;
};

export default Message;
