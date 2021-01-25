import React from 'react';
import styles from './FeedPhotosItem.module.css';
import Image from '../../Helper/Image';

const FeedPhotosItem = ({ index, photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li
      onClick={handleClick}
      className={`${styles.photo} ${
        (index === 0 || index % 12 === 0) && styles.bigPhotoLeft
      } ${(index === 7 || (index - 7) % 12 === 0) && styles.bigPhotoRight}`}
    >
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.access}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
