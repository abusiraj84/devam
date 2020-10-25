import React from "react"
import Card from "../Card"
import styled from "styled-components"

function CoursesCards() {
  return (
    <CourseCardsWrapper>
      <Card title="learn anything!" />
      <Card />
      <Card />
      <Card />
    </CourseCardsWrapper>
  )
}

export default CoursesCards
const CourseCardsWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: auto auto;
`
