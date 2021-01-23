import React from 'react';
import { UserContext } from '../../UserContext';
import styles from './PhotoComments.module.css';
import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeigth;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ''}`}
      >
        {comments.length > 0
          ? comments.map((comment) => (
              <li key={comment.comment_ID} className={styles.comment}>
                <b className={styles.author}>{comment.comment_author}: </b>
                <span className={styles.content}>
                  {comment.comment_content}
                </span>
              </li>
            ))
          : login && (
              <li className={styles.noComments}>Be the first to comment!</li>
            )}
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
