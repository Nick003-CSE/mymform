import { useEffect, useState } from 'react';
import { BACKGROUND_IMAGES } from '../constants/formOptions';

const Background = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((nextIndex + 1) % BACKGROUND_IMAGES.length);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [nextIndex]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {BACKGROUND_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex
              ? 'opacity-100'
              : index === nextIndex && isTransitioning
              ? 'opacity-70'
              : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    </div>
  );
};

export default Background;