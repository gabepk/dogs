import React from 'react';
import Input from '../../Components/Forms/Input';
import Button from '../../Components/Forms/Button';
import Error from '../../Helper/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api';
import { ReactComponent as SendSVG } from '../../Assets/enviar.svg';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState('');
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Wow, nice photo..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button type="submit">
        <SendSVG />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
