import React from 'react';

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);

    // This avoids the creation of repeating events listeners on window everytime media is updated
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;
