import React, { createContext, useContext, useState, useEffect } from 'react';

const ScreenSizeContext = createContext();

export const useScreenSize = () => useContext(ScreenSizeContext);

export const ScreenSizeProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handleResize(); // Call on initial render to set initial size

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={windowSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
};
