import React from "react"
import styled from "styled-components"

function Card() {
  return (
    <Box>
      <BoxImg
        src="//images.ctfassets.net/ooa29xqb8tix/7sZsITPVNFJcG5Fmu0AyBi/442a2ee3d4dc94a9795ae2ec5222f039/React_Hooks_Illustration_Cover.svg"
        alt="Build a web app with React Hooks icon"
        class="CourseCard__Illustration-za4owo-6 gwcuM illustration"
      />

      <Title>Build a web aTitlep with React Hooks</Title>
    </Box>
  )
}

export default Card
const Box = styled.div`
  margin-top: 50px;
  border-radius: 20px;
  background: linear-gradient(
    209.21deg,
    rgb(159, 127, 229) 13.57%,
    rgb(78, 153, 227) 98.38%
  );
  box-shadow: rgba(78, 153, 227, 0.3) 0px 20px 40px,
    rgba(0, 0, 0, 0.05) 0px 1px 3px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  width: 200px;
  height: 330px;
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  padding: 20px;
  transform: scale(1);

  &:hover {
    box-shadow: rgba(78, 153, 227, 0.3) 0px 20px 80px,
      rgba(0, 0, 0, 0.15) 0px 20px 40px;
    cursor: pointer;
    transform: scale(1.1);
  }
`

const BoxImg = styled.img`
  height: 150px;
  margin: 0px;
  opacity: 1;
  animation: 1s ease 0s 1 normal forwards running jBcSpD;
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  &:hover {
    transform: scale(0.9);
  }
`

const Title = styled.p`
  font-style: normal;
  font-size: 24px;
  line-height: 140%;
  font-weight: bold;
  text-align: center;
  color: rgb(255, 255, 255);
  margin: 0px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
