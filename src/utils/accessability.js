export const handleFirstTab = e => {
  if (e.keyCode === 9) {
    document.body.classList.add('user-is-tabbing');

    const handleMouseDownOnce = () => {
      document.body.classList.remove('user-is-tabbing');

      window.removeEventListener('mousedown', handleMouseDownOnce);
      window.addEventListener('keydown', handleFirstTab);
    };

    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
};
