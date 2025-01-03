import React from 'react';
import * as styles from '../styles/footer.module.scss';

export const Footer = ({ theme }) => {
  const social = [
    {
      link: 'https://github.com/danielmarcgardner',
      icon: require('../images/github.png').default,
      key: 'github-social-link',
    },
    {
      link: 'https://www.linkedin.com/in/danielmarcgardner/',
      icon: require('../images/linkedin.png').default,
      key: 'linkedin-social-link',
    },
    {
      link: 'https://medium.com/@danielgardner',
      icon: require('../images/medium.png').default,
      key: 'medium-social-link',
    },
    {
      link: 'https://twitter.com/danielmgardner1',
      icon: require('../images/twitter.png').default,
      key: 'twitter-social-link',
    },
  ];
  return (
    <footer
      className={styles.footer}
      style={{
        color: theme === 'dark' ? '#fcfcfc' : '#081b33',
        background: theme === 'dark' ? '#081b33' : '#f2f2f2',
      }}
    >
      <div>&copy; Daniel Gardner 2025</div>
      <div>
        {social.map(item => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener norefferer"
            style={{ marginLeft: '1rem' }}
          >
            <img src={item.icon} alt={item.key} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
