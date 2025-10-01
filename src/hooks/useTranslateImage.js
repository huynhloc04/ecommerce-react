import { useState, useEffect } from 'react';
import useScrollHandling from './useScrollHandling';

const useTranslateImage = () => {
  const [translateXPosition, setTranslateXPosition] = useState(0);
  const { scrollDirection, scrollPosition } = useScrollHandling();

  const handleTranslateXPosition = () => {
    if (scrollDirection === 'down' && scrollPosition >= 1400) {
      setTranslateXPosition(
        translateXPosition <= 0 ? 0 : translateXPosition - 1
      );
    } else if (scrollDirection === 'up') {
      setTranslateXPosition(
        translateXPosition >= 100 ? 100 : translateXPosition + 1
      );
    }
  };

  useEffect(() => {
    handleTranslateXPosition();
  }, [scrollPosition]);

  return { translateXPosition };
};

export default useTranslateImage;
