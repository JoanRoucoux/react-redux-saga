import { useState } from 'react';

const usePopin = () => {
  const [isShowing, setIsShowing] = useState(false);

  const togglePopin = () => {
    setIsShowing(!isShowing);
  };

  return {
    isShowing,
    togglePopin,
  };
};

export default usePopin;
