import React, { useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';
import * as styles from '../styles/hero.module.scss';
import DarkModeContext from '../context/darkmodecontext';

export const Hero = () => {
  const { theme } = useContext(DarkModeContext);
  return (
    <StaticQuery
      query={graphql`
        query {
          profilePic: file(relativePath: { eq: "profile.jpg" }) {
             childImageSharp {
              gatsbyImageData(layout: FIXED, width: 200, height: 200)
            }
          }
        }
      `}
      render={data => (
        <div className={styles.hero}>
          {console.log("data",data)}
          <GatsbyImage
            className={styles['hero__img']}
            image={data.profilePic.childImageSharp.gatsbyImageData}
            style={{ borderColor: theme === 'dark' ? '#2f4562' : '#161616' }}
          />
          <h2 className={styles['hero__text']} style={{ color: '#2f4562' }}>
            Daniel Gardner
          </h2>
          <h3 className={styles['hero__text']} style={{ color: '#2f4562' }}>
            Associate Director of Engineering
          </h3>
        </div>
      )}
    />
  );
};

export default Hero;
