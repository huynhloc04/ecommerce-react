import { useState, useRef, useEffect } from 'react';

const useScrollHandling = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const prevScrollPosition = useRef(0);

  const handleTrackDirection = () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > prevScrollPosition.current) {
      setScrollDirection('down');
    } else if (currentScrollPosition < prevScrollPosition.current) {
      setScrollDirection('up');
    }
    prevScrollPosition.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition;
    setScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleTrackDirection);
    return () => window.removeEventListener('scroll', handleTrackDirection);
  }, []);

  return { scrollDirection, scrollPosition };
};

export default useScrollHandling;
