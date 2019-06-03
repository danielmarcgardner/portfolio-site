import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Hero from '../components/hero';
import Section from '../components/section';
import About from '../components/about';

const IndexPage = (props) => {
  const { data } = props;
  const sections = [<About />]
  return (
    <Layout>
      <SEO title="Home" />
      <Hero profile={data.profilePic.childImageSharp.fixed} />
      {sections.map((section, i) => (
        <Section key={`section-${i}`}>
          <About />
        </Section>
      ))}
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query query {
    profilePic: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
