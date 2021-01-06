import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title;
  });
  return <div></div>;
};

export default Head;
