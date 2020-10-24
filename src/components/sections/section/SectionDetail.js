import React from "react"
import styled from "styled-components"
import PurchaseButton from "../../buttons/PurchaseButton"
import { Caption, H2, MediumText } from "../../styles/TextStyles"

function SectionDetail(props) {
  const { logo, title, sections, hours, desc, name, instaimg } = props
  return (
    <Wrapper>
      <BoxImgWrapper>
        <BoxImg src="images/ills/example1.svg" />
      </BoxImgWrapper>
      <Logo src={logo || "images/icons/cubase.svg"} />
      <Title>{title || "Learn Epic Music"}</Title>
      <Desc1>
        {sections || "0"} SECTIONS - {hours || "2"} HOURS OF VIDEO
      </Desc1>
      <Desc2>
        {desc ||
          " In this course we will show you how to create a promo video using After Effects."}
      </Desc2>
      <InstracturWrapper>
        <InstracturImg
          src={
            instaimg ||
            "https://scontent.fsaw1-6.fna.fbcdn.net/v/t1.0-9/109947688_2536568519897212_8481853244792259908_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=8Hl_KYSqMNoAX8Xy2Mp&_nc_ht=scontent.fsaw1-6.fna&oh=d51e6ee9c25002df4182a8f11c8da66c&oe=5FB8804F"
          }
        />
        <InstracturName>TAUGHT BY {name || "Husam Nasrullah"}</InstracturName>
      </InstracturWrapper>{" "}
      <PurchaseButton />
    </Wrapper>
  )
}

export default SectionDetail

const Wrapper = styled.div`
  max-width: 1234px;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: auto;
  justify-items: center;
  padding: 50px 0px 0px;
  gap: 40px;
`

const BoxImgWrapper = styled.div`
  width: 360px;
  height: 280px;
  border-radius: 20px;
  background: linear-gradient(200.42deg, #844ffc 13.57%, #491eb8 98.35%);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 20px,
    rgba(255, 255, 255, 0.25) 0px 0px 0px 0.5px inset;
  box-sizing: border-box;
  border-radius: 20px;
  margin-bottom: 40px;
  filter: hue-rotate(-10deg);
  display: grid;
  -webkit-box-pack: center;
  place-content: center;
  grid-template-columns: auto;
  justify-items: center;
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

  &:hover {
    transform: scale(1.1);
    background: linear-gradient(200.42deg, #ff8570 13.57%, #bb302a 98.35%);
  }
  &:hover img {
    transform: scale(0.8);
  }
`

const BoxImg = styled.img`
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
`

const Logo = styled.img`
  width: 60px;
  height: 60px;
`

const Title = styled(H2)`
  color: rgb(255, 255, 255);
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.3) 0px 20px 40px;
`

const Desc1 = styled(MediumText)``

const Desc2 = styled(MediumText)`
  text-align: center;
  padding: 20px;
`

const InstracturWrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 250px;
  -webkit-box-pack: center;
  place-content: center;
  justify-items: center;
  align-items: center;
`
const InstracturImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`

const InstracturName = styled(Caption)``
