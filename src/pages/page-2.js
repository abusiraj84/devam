import React from "react"
import { Link } from "gatsby"
import SEO from "../components/layout/seo"
import NavSection from "../components/sections/NavSection"
import styled from "styled-components"
import WaveBackground from "../components/backgrounds/WaveBackground"
import Layout from "../components/layout/layout"

function SecondPage() {
  return (
    <Layout>
      <Wrapper>
        <WaveBackground />
        <SEO title="Page two" />
        <ContentWrapper>
          <NavSection />
        </ContentWrapper>

        {/* <Link to="/">Go back to the homepage</Link> */}
      </Wrapper>
    </Layout>
  )
}

export default SecondPage
const Wrapper = styled.div`
  width: 100%;
`
const ContentWrapper = styled.div`
  /* background-image: url("/images/waves/livestream-wave3.svg");
  background-repeat: no-repeat; */
  overflow: hidden;
  max-width: 1234px;
  padding: 150px 30px;
  margin: 0 auto;

  @media (max-width: 640px) {
    padding: 10px 30px;
  }
`
