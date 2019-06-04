import React, {useState} from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Hero from '../components/hero';
import Section from '../components/section';
import About from '../components/about';
import Contact from '../components/contact';
import Confirmation from '../components/confirmation';

const IndexPage = (props) => {
  const { data } = props;
  const [showContact, setShowContact] = useState(true)
  const SecondComponent = showContact ? <Contact setShowContact={setShowContact} /> : <Confirmation />
  const sections = [<About />, SecondComponent]
  return (
    <Layout>
      <SEO title="Home" />
      <Hero profile={data.profilePic.childImageSharp.fixed} />
      {sections.map((section, i) => (
        <Section key={`section-${i}`}>
          {section}
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
