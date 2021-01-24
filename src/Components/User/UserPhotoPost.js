import React from 'react';
import Input from '../../Components/Forms/Input';
import Button from '../../Components/Forms/Button';
import Error from '../../Helper/Error';
import styles from './UserPhotoPost.module.css';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';
import Head from '../../Helper/Head';

const UserPhotoPost = () => {
  const name = useForm();
  const weight = useForm();
  const age = useForm();
  const [img, setImg] = React.useState({});
  const navigate = useNavigate();

  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    // If !data, an error occurred when posting formData
    if (data) navigate('/account');
  }, [data, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('nome', name.value);
    formData.append('peso', weight.value);
    formData.append('idade', age.value);
    formData.append('img', img.raw);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Post your photo" />
      <form onSubmit={handleSubmit}>
        <Input label="Name" type="text" name="name" {...name} />
        <Input label="Weight" type="number" name="weight" {...weight} />
        <Input label="Age" type="number" name="age" {...age} />
        <input
          className={styles.file}
          type="file"
          id="img"
          name="img"
          onChange={handleImgChange}
        />
        {loading ? <Button disabled>Loading...</Button> : <Button>Post</Button>}
        <Error error={error} />
      </form>

      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
