import React from "react"
import styled from "styled-components"
import NavSection from "./NavSection"
import PurchaseButton from "../buttons/PurchaseButton"
// import bg from "../../../static/images/waves/hero-wave1.svg"
// import CardsTest from "./CardsTest"
import Card from "./Card"
import { H1, MediumText } from "../styles/TextStyles"
import WaveBackground from "../backgrounds/WaveBackground"

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <NavSection />
      <ContentWrapper>
        <TextWrapper>
          <Title>Learn much More than Imagen!</Title>
          <Description>
            Don’t skip design. Learn design and code, by building real apps with
            React and Swift. Complete courses about the best tools.
          </Description>

          <PurchaseButton
            title="Start learning"
            subtitle="120+ hours of video"
          />
        </TextWrapper>
        {/* <CardsTest /> */}
        <Card />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

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
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const Title = styled(H1)`
  color: white;
`
const Description = styled(MediumText)``
