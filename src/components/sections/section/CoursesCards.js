import React, { useState, useEffect } from "react"
import Card from "../Card"
import styled from "styled-components"
import { Link } from "gatsby"

function CoursesCards() {
  useEffect(() => {
    fetchData()
  }, [])
  const [items, setItems] = useState([])

  const fetchData = async () => {
    const data = await fetch("http://192.168.1.116:8000/api/courses")
    const items = await data.json()
    console.log(items.data)
    setItems(items.data)
  }
  return (
    <CourseCardsWrapper>
      {items.map(item => (
        <div key={item.courses_id}>
          <Link to={`/app/course/${item.courses_id}`}>
            <Card
              title={item.title}
              img={item.img}
              instracturimg={item.roles["0"].img}
              instracturname={item.roles["0"].name}
            />
          </Link>
        </div>
      ))}
    </CourseCardsWrapper>
  )
}

export default CoursesCards
const CourseCardsWrapper = styled.div`
  display: flex;
`
