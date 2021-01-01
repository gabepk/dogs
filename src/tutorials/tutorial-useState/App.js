import React from 'react';
import Button from './Button';
import Item from './Item';
import Message from './Message';

const App = () => {
  const [message, setMessage] = React.useState('');
  const [item, setItem] = React.useState(null);

  return (
    <>
      <Button text="Tablet" setMessage={setMessage} setItem={setItem} />
      <Button text="Smartphone" setMessage={setMessage} setItem={setItem} />
      <Button text="Notebook" setMessage={setMessage} setItem={setItem} />

      {message && <Message message={message} />}

      {!message && item && <Item item={item} />}
    </>
    // Se não tiver a verificacao !message acima, toda vez que a mensagem atualizar (setMessage), o componente Item vai ser renderizado também.
  );
};

export default App;
