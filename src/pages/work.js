import React from 'react'
// import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../components/section';
import TimeLine from '../components/timeline';

export const WorkPage = () => {
  const work = [
    {
      title: 'Software Engineer',
      company: 'Trim',
      time: '6/2019 - Present',
      bulletPoints: [
        'Hired as a Software Engineer working on our web application. I work on both our React Client and Ruby/Rails backend. Trim is designed to help consumers take control of and automate their financial health.'
      ]
    },
    {
      title: 'Frontend Engineer',
      company: 'Revere',
      time: '3/2018 - 5/2019',
      bulletPoints: [
        'Converted to full-time role and took over full ownership of front end from Redshift As the sole front end engineer I am in charge of all front end feature development and DevOps for the Revere products. Revere is built with React and Redux on the client side and AWS Serverless Lambdas middleware written in Node.',
        'Since July 2018, I have been building out our newest product, Go, which allows users to create customized alerts on their data warehouses. Built UI that displays and manages alerts, connects to databases, and allows users to create alerts using both SQL and a Visual Alert Builder. Built Serverless Lambda functions to act as middleware to filter out bad requests and talk to AWS DynamoDB and SES. Built a serverless microservice that talks to Stripe to set up customer accounts, add subscriptions, and manage subscriptions.',
        'Took over full front end development of Essential (sunset November 1, 2018), which uses OAuth to connect to various marketing platforms and runs prebuilt alerts based on triggers from those platforms. Built out UI to view alerts and view deeper information on specific connected service accounts, architected an administrative tool that allows system admins to create and edit alerts, and built UI for Daily Pulse feature.',
      ]
    },
    {
      title: 'Frontend Developer (contract)',
      company: 'Revere',
      time: '1/2018 - 2/2018',
      bulletPoints: [
        'Hired by Revere to rebuild the front end application from JSP with some React to a fully built out React/Redux application that used Serverless Lambdas to talk to our backend APIs.',
      ]
    },
    {
      title: 'Frontend Developer (contract)',
      company: 'Revere',
      time: '10/2017 - 12/2017',
      bulletPoints: [
        'Took over as lead working with client, Noon Home, to fix bugs and stylings, extend features, and create new React components on their website and custom Shopify webstore. Additionally, I built Noon’s Holiday Promotion page to spec. Noon Home is built with React, Redux, Express, and multiple external APIs.',
        'Contributed to other ongoing projects including 2017 holiday card and participated in sprint planning and daily standups.'
      ]
    },
    {
      title: 'Full Stack Software Engineer',
      company: 'HomeSlice',
      time: '6/2017 - 11/2018',
      bulletPoints: [
        'Part-time 10+ hours a week position building out an MVP for an early stage home co-ownership startup.',
        'Built complete end to end custom components, using React, Redux, and Apollo to connect to our Node back end. Set up the GraphQL server that sits on top of Express, including defining the schema and connecting the resolvers to our PostgreSQL database.',
      ]
    },
    {
      title: 'Web Developer Resident',
      company: 'Galvanize',
      time: '7/2017 - 9/2017',
      bulletPoints: [
        'Selected by Galvanize instructors for the full-time paid Web Developer Resident (WDR) program. As a WDR, I assisted the instructors with planning, helping students debug their React/Redux and Express code, gave lectures and breakouts on React/React testing and Computer Science topics, tested out curriculum, and taught Learn To Code intro classes.',
      ]
    }
  ]
  return (
    <React.Fragment>
      <SEO title="Work History"/>
      <Section>
        <TimeLine timelineItems={work} />
      </Section>
    </React.Fragment>
  )
}

export default WorkPage;
