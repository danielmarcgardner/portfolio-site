import React, {useState} from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Hero from '../components/hero';
import Section from '../components/section';
import About from '../components/about';
import Contact from '../components/contact';
import Confirmation from '../components/confirmation';
import ResumeLink from '../components/resumelink';

const IndexPage = () => {
  const [showContact, setShowContact] = useState(true)
  const SecondComponent = showContact ? <Contact setShowContact={setShowContact} /> : <Confirmation />
  const sections = [<About />, SecondComponent, <ResumeLink />]
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      {sections.map((section, i) => (
        <Section key={`section-${i}`}>
          {section}
        </Section>
      ))}
    </Layout>
  )
}
export default IndexPage
