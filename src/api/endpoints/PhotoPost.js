import React from 'react';

const PhotoPost = () => {
  const [token, setToken] = React.useState('');
  const [name, setName] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [age, setAge] = React.useState('');
  const [img, setImg] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('weight', weight);
    formData.append('age', age);
    formData.append('img', img);

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="token"
          value={token}
          onChange={({ target }) => setToken(target.value)}
        />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <input
          type="text"
          placeholder="weight"
          value={weight}
          onChange={({ target }) => setWeight(target.value)}
        />
        <input
          type="text"
          placeholder="age"
          value={age}
          onChange={({ target }) => setAge(target.value)}
        />
        <input type="file" onChange={({ target }) => setImg(target.files[0])} />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PhotoPost;
