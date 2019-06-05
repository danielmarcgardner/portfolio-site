import React, { useContext } from 'react';
import { StaticQuery, graphql } from "gatsby"
import DarkModeContext from '../context/darkmodecontext'
import style from '../styles/button.module.scss'

export const ResumeLink = () => { 
  const { theme } = useContext(DarkModeContext);
  return (
    <StaticQuery
      query={graphql`
        query {
          resume: allFile(filter: { extension: { eq: "pdf" } }) {
            edges {
              node {
                publicURL
                name
              }
            }
          }
        }
      `}
      render={data => {
        const resumeLink = data.resume.edges[0].node.publicURL;
        return (
          <a
            href={resumeLink}
            target="_blank"
            className={`${style.button} ${style.buttonResume}`}
            style={ {
              borderColor: theme === 'dark' ? '#fcfcfc' : '#2f4562',
              color: theme === 'dark' ? '#fcfcfc' : '#2f4562'
              }
            }
            > Download Resume </a>
        )
      }}
    />
  )
}

export default ResumeLink;
