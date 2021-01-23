import React from 'react';
import Error from '../../Helper/Error';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api';
import { ReactComponent as SendSVG } from '../../Assets/enviar.svg';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState('');
  const { error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
      document.getElementById('commentButton').blur();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${single ? styles.single : ''}`}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Wow, nice photo..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button id="commentButton" type="submit" className={styles.button}>
        <SendSVG />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
