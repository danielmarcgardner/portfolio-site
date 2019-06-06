import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <img src="https://media.giphy.com/media/ZgSvZiQc4Vd6ZCnNpV/giphy.gif" alt="Sad Bulldog"/>
  </Layout>
);

export default NotFoundPage;
