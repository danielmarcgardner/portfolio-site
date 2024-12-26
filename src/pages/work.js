import React from 'react'
import Seo from '../components/seo';
import Section from '../components/section';
import TimeLine from '../components/timeline';

const WorkPage = () => {
  const work = [
    {
      title: 'Associate Director of Engineering',
      company: 'OneMain Financial / Trim',
      time: '7/2022 - Present',
      bulletPoints: [
        'Leading the engineering team for the Wellness (Trim) Lane, overseeing and managing a team of over 10 engineers at its peak to drive innovation and deliver impactful solutions. Built a strong engineering culture that resulted in high team morale and strong productivity.',
        'Recruited and onboarded 8 engineers, maintaining zero attrition for over three years.',
        'Navigated the team through a corporate RIF, preserving team morale and retaining all unaffected members.',
        'Maintained a remarkable record of zero natural attrition over three years.Successfully navigated the team through a challenging RIF(reductions in force), retaining all unaffected members and preserving team morale and productivity.',
        'Spearheading the integration of the Trim app into OneMain\'s digital ecosystem. Collaborating with cross functional teams to build integrations across different lanes.',
        'Introduced an open - source collaboration model, improving cross - team code sharing and development efficiency.',
        'Led technical and cybersecurity integration with OneMain, including laptop migrations, cyber tool deployment, and vulnerability management.',
        'Regularly helped engineers get unblocked and navigated them through corporate bureaucracy to accomplish their work.',
      ],
      image: require('../images/work/onemainfinancial.png'),
      type: 'job',
    },
    {
      title: 'Tech Lead / Senior Software Engineer Engineer',
      company: 'OneMain Financial / Trim',
      time: '3/2021 - 7/2022',
      bulletPoints: [
        'Managed 6 engineers, including one manager overseeing 3 engineers, fostering a collaborative and high - performing culture.',
        'Partnered with product teams to scope, manage, and deliver projects, including SSO integration, subscription redesign, and major backend upgrades.',
        'Acted as a hands - on technical leader, reviewing PRs, contributing code, and guiding engineers through complex challenges.',
      ],
      type: 'job',
    },
    {
      transition: 'Trim was acquired by OneMain Financial in April 2021.',
      type: 'transition',
    },
    {
      title: 'Software Engineer',
      company: 'Trim',
      time: '6/2019 - 3/2021',
      bulletPoints: [
        'Started primarily as a Frontend Engineer but over time learned Rails and moved into a full - stack role. ',
        'Built Trim\'s new dashboard that highlights how much Trim has saved users.',
        'Built the Trim Transaction Brain that acts as Trim\'s CTA Engine for helping guide users toward savings opportunities.',
        'Led the integration and switch of payment providers from Braintree to Stripe which included designing our frontend, building out new backend logic and tables that were payment provider agnostic, and migrated all Braintree card data to Stripe data.',
        'Built Trim\'s onboarding funnel that allowed users to sign up for all of Trim\'s premium features.',
      ],
      image: require('../images/work/trim-mobile.png'),
      type: 'job',
    },
    {
      title: 'Frontend Engineer',
      company: 'Revere.ai',
      time: '3/2018 - 5/2019',
      bulletPoints: [
        'Converted to full-time role and took over full ownership of front end from Redshift As the sole front end engineer I am in charge of all front end feature development and DevOps for the Revere products. Revere is built with React and Redux on the client side and AWS Serverless Lambdas middleware written in Node.',
        'Since July 2018, I have been building out our newest product, Go, which allows users to create customized alerts on their data warehouses. Built UI that displays and manages alerts, connects to databases, and allows users to create alerts using both SQL and a Visual Alert Builder. Built Serverless Lambda functions to act as middleware to filter out bad requests and talk to AWS DynamoDB and SES. Built a serverless microservice that talks to Stripe to set up customer accounts, add subscriptions, and manage subscriptions.',
        'Took over full front end development of Essential (sunset November 1, 2018), which uses OAuth to connect to various marketing platforms and runs prebuilt alerts based on triggers from those platforms. Built out UI to view alerts and view deeper information on specific connected service accounts, architected an administrative tool that allows system admins to create and edit alerts, and built UI for Daily Pulse feature.',
      ],
      image: require('../images/work/revere-mobile.jpg'),
      type: 'job',
    },
    {
      title: 'Frontend Developer (contract)',
      company: 'Revere.ai',
      time: '1/2018 - 2/2018',
      bulletPoints: [
        'Hired by Revere to rebuild the front end application from JSP with some React to a fully built out React/Redux application that used Serverless Lambdas to talk to our backend APIs.',
      ],
      type: 'job',
    },
    {
      title: 'Frontend Developer (contract)',
      company: 'Redshift Digital',
      time: '10/2017 - 12/2017',
      bulletPoints: [
        'Took over as lead working with client, Noon Home, to fix bugs and stylings, extend features, and create new React components on their website and custom Shopify webstore. Additionally, I built Noon’s Holiday Promotion page to spec. Noon Home is built with React, Redux, Express, and multiple external APIs.',
        'Contributed to other ongoing projects including 2017 holiday card and participated in sprint planning and daily standups.'
      ],
      image: require('../images/work/redshift.png'),
      type: 'job',
    },
    {
      title: 'Web Developer Resident',
      company: 'Galvanize',
      time: '7/2017 - 9/2017',
      bulletPoints: [
        'Selected by Galvanize instructors for the full-time paid Web Developer Resident (WDR) program. As a WDR, I assisted the instructors with planning, helping students debug their React/Redux and Express code, gave lectures and breakouts on React/React testing and Computer Science topics, tested out curriculum, and taught Learn To Code intro classes.',
      ],
      image: require('../images/work/galvanize-mobile.png'),
      type: 'job',
    }
  ]
  return (
    <React.Fragment>
      <Seo title="Work History"/>
      <Section>
        <TimeLine timelineItems={work} />
      </Section>
    </React.Fragment>
  )
}

export default WorkPage;
