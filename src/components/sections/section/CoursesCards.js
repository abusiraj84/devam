import React from "react"
import Card from "../Card"
import styled from "styled-components"

function CoursesCards() {
  return (
    <CourseCardsWrapper>
      <Card
        title="Learn Cubase"
        img="//images.ctfassets.net/ooa29xqb8tix/4Nvt4V1wKEgmbPRz56SzVm/14b6059d6d48ead660d795dcf42faad7/SwiftUI_handbook_cover.svg"
      />
      <Card
        title="Mix Music and Vocal"
        img="//images.ctfassets.net/ooa29xqb8tix/1Gs1Qgeg5w2hkiuB23MF3c/5c337a6409ea5542423c90084b10d670/flutter-cover.svg"
      />
      <Card
        title="Mastering your Music"
        img="//images.ctfassets.net/ooa29xqb8tix/4Qk5ikYQtfbix79SGcfS5G/069d3556e56552d44ef8c5476e6c0414/swiftui14-cover.svg"
      />
      <Card
        title="Compose Songs"
        img="//images.ctfassets.net/ooa29xqb8tix/RuEVygI4WQEpwCymCAGEr/7851c4a87e6e42dc1f3663c0506686d8/swiftui1-3.svg"
      />
    </CourseCardsWrapper>
  )
}

export default CoursesCards
const CourseCardsWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: auto auto;
`
