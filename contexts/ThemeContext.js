// ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Définir la fonction pour mettre à jour le thème en fonction du changement de thème système
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    // Initialiser le thème
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    // Écouter les changements du schéma de couleur préféré du système
    mediaQuery.addListener(handleChange);

    // Nettoyer le listener lors du démontage
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
