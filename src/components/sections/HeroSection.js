import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import NavSection from "./NavSection"
import bg from "../../../static/images/waves/hero-wave1.svg"
import Cards from "./Cards"

function HeroSection() {
  return (
    <Wrapper>
      <NavSection />
      <ContentWrapper>
        <TextWrapper>
          <Title>Learn Design, Audio, Video, Music and much More!</Title>
          <Description>
            Don’t skip design. Learn design and code, by building real apps with
            React and Swift. Complete courses about the best tools.
          </Description>
        </TextWrapper>
        <Cards />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  width: 100%;
`
const ContentWrapper = styled.div`
  background-image: url("/images/waves/livestream-wave3.svg");
  background-repeat: no-repeat;
  overflow: hidden;
  max-width: 1234px;
  padding: 150px 30px;
  margin: 0 auto;
  @media (max-width: 640px) {
    padding: 10px 30px;
    height: 100vh;
  }
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  color: white;
`
const Description = styled.p`
  font-size: 17px;
  line-height: 130%;
`
