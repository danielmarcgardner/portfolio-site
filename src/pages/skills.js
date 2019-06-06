import React, { useState } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../components/section';
import Hero from '../components/hero';
import SkillsContainer from '../components/skillscontainer';

const SkillsPage = () => {
  const frontendSkills = [
    {
      img: require('../images/icons/javascript.png'),
      name: 'JavaScript'
    },
    {
      img: require('../images/icons/react.png'),
      name: 'React'
    },
    {
      img: require('../images/icons/redux.png'),
      name: 'Redux'
    },
    {
      img: require('../images/icons/gatsby.png'),
      name: 'Gatsby'
    },
    {
      img: require('../images/icons/sass.png'),
      name: 'Sass'
    },
    {
      img: require('../images/icons/css.png'),
      name: 'CSS'
    },
    {
      img: require('../images/icons/html.png'),
      name: 'HTML'
    },
    {
      img: require('../images/icons/jest.png'),
      name: 'Jest'
    },
    {
      img: require('../images/icons/enzyme.png'),
      name: 'Enzyme'
    }
  ]

  const backendSkills = [
    {
      img: require('../images/icons/node.png'),
      name: 'Node'
    },
    {
      img: require('../images/icons/serverless.png'),
      name: 'Serverless'
    },
    {
      img: require('../images/icons/graphql.png'),
      name: 'GraphQL'
    },
    {
      img: require('../images/icons/expressjs.png'),
      name: 'Express'
    },
    {
      img: require('../images/icons/postgresql.png'),
      name: 'PostgreSQL'
    }
  ]

  const toolsSkills = [
    {
      img: require('../images/icons/npm.png'),
      name: 'NPM'
    },
    {
      img: require('../images/icons/yarn.png'),
      name: 'Yarn'
    },
    {
      img: require('../images/icons/git.png'),
      name: 'Git'
    },
    {
      img: require('../images/icons/circleci.png'),
      name: 'CircleCI'
    },
    {
      img: require('../images/icons/rollbar.png'),
      name: 'Rollbar'
    },
    {
      img: require('../images/icons/stripe.png'),
      name: 'Stripe'
    },
    {
      img: require('../images/icons/segment.png'),
      name: 'Segment'
    },
    {
      img: require('../images/icons/jira.png'),
      name: 'Jira'
    }
  ]

  const sections = [
    <SkillsContainer skills={frontendSkills} sectionTitle="Select Frontend Languages and Packages:"/>,
    <SkillsContainer skills={backendSkills} sectionTitle="Select Backend Languages and Packages:"/>,
    <SkillsContainer skills={toolsSkills} sectionTitle="Select Tools/Other:"/>,
  ]

  return (
    <Layout>
      <SEO title="Skills" />
      <Hero />
      {sections.map((section, i) => (
        <Section key={`skills-page-section-${i}`}>
          {section}
        </Section>
      ))}
    </Layout>
  )
}

export default SkillsPage;
