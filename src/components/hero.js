import React, { useContext } from 'react';
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styles from '../styles/hero.module.scss';
import DarkModeContext from '../context/darkmodecontext'

export const Hero = () => {
  const { theme } = useContext(DarkModeContext);
  return (
    <StaticQuery
      query={graphql`
        query {
          profilePic: file(relativePath: { eq: "profile.jpg" }) {
            childImageSharp {
              fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }`
      }
      render={data => (
        <div className={styles.hero}>
          <Image
            className={styles['hero__img']}
            fixed={data.profilePic.childImageSharp.fixed}
            style={{ borderColor: theme === 'dark' ? '#2f4562' : '#161616'}}
          />
          <h2 className={styles['hero__text']} style={{ color: '#2f4562'}}>Daniel Gardner</h2>
          <h3 className={styles['hero__text']} style={{ color: '#2f4562'}}>Full Stack Engineer</h3>
        </div>
      )}
    />
  )
}

export default Hero;
