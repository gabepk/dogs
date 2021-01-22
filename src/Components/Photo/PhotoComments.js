import React from 'react';
import { UserContext } from '../../UserContext';
import styles from './PhotoComments.module.css';
import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);

  // if (!comments)
  //   return (
  //     <section className={styles.container}>
  //       <p className={styles.noComment}>Be the first to comment!</p>
  //     </section>
  //   );

  return (
    <>
      <ul className={`${styles.comments} ${props.single ? styles.single : ''}`}>
        {comments.map((comment) => (
          <li key={comment.comment_ID} className={styles.comment}>
            <b className={styles.author}>{comment.comment_author}: </b>
            <span className={styles.content}>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          id={props.id}
          setComments={setComments}
          single={props.single}
        />
      )}
    </>
  );
};

export default PhotoComments;
