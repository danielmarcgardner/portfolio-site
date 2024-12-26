import React from 'react';
// import Layout from '../components/layout';
import Seo from '../components/seo';
import Section from '../components/section';
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
      img: require('../images/icons/styled-components.png'),
      name: 'Styled'
    },
    {
      img: require('../images/icons/ionic.png'),
      name: 'Ionic'
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
      img: require('../images/icons/jest.png'),
      name: 'Jest'
    },
  ]

  const backendSkills = [
    {
      img: require('../images/icons/node.png'),
      name: 'Node'
    },
    {
      img: require('../images/icons/ruby.png'),
      name: 'Ruby'
    },
    {
      img: require('../images/icons/rails.svg'),
      name: 'Rails'
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
      img: require('../images/icons/datadog.svg'),
      name: 'Datadog'
    },
    {
      img: require('../images/icons/npm.png'),
      name: 'NPM'
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
      img: require('../images/icons/sentry.png'),
      name: 'Sentry',
    },
    {
      img: require('../images/icons/stripe.png'),
      name: 'Stripe'
    },
    {
      img: require('../images/icons/jira.png'),
      name: 'Jira'
    },
    {
      img: require('../images/icons/asana.png'),
      name: 'Asana'
    }
  ]

  const sections = [
    <SkillsContainer skills={frontendSkills} sectionTitle="Frontend Languages and Packages:"/>,
    <SkillsContainer skills={backendSkills} sectionTitle="Backend Languages and Packages:"/>,
    <SkillsContainer skills={toolsSkills} sectionTitle="Tools/Other:"/>,
  ]

  return (
    <React.Fragment>
      <Seo title="Skills" />
      {sections.map((section, i) => (
        <Section key={`skills-page-section-${i}`}>
          {section}
        </Section>
      ))}
    </React.Fragment>
  )
}

export default SkillsPage;
