import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinity, setInfinity] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinity) {
        // window.scrollY: Section of page already scrolled
        const scroll = window.scrollY;

        // document.body.offsetHeight: Height of the website content (constant before next page loads)
        // window.innerHeight: Height of the browser (constant)
        // height: content height - window height == content discovered by scrolling
        const height = document.body.offsetHeight - window.innerHeight;

        // Load next page when user reaches 75% of the content discovered by scrolling
        if (scroll > height * 0.75 && !wait) {
          console.log('load');
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }
    window.addEventListener('whell', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('whell', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinity]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          page={page}
          user={user}
          setModalPhoto={setModalPhoto}
          setInfinity={setInfinity}
        />
      ))}
      {infinity === false && <p>Done</p>}
    </div>
  );
};

export default Feed;
