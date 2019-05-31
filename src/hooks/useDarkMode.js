import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleDark = () => {
    if (theme === 'dark') {
      setTheme('light')
      if (localStorage) localStorage.setItem('userTheme', 'light')
    } else {
      setTheme('dark')
      if (localStorage) localStorage.setItem('userTheme', 'dark')
    }
  }

  useEffect(() => {
    const userHasSetTheme = localStorage.getItem('userTheme');
    if (userHasSetTheme) setTheme(userHasSetTheme);
  }, []);

  return { theme, toggleDark };
}

export default useDarkMode;
