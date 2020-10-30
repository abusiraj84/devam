import React, { useState, useEffect, FC } from "react"
import { Link, RouteComponentProps } from "@reach/router"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import WaveBackground from "../components/backgrounds/WaveBackground"
import SEO from "../components/layout/seo"
import NavSection from "../components/sections/NavSection"
import SectionDetail from "../components/sections/section/SectionDetail"
import LessonsBox from "../components/sections/section/LessonsBox"
import { Caption2, H1, H3 } from "../components/styles/TextStyles"

type Props = RouteComponentProps<{
  results: string
}>

export const Course: FC<Props> = ({ results = 1 }) => {
  useEffect(() => {
    fetchCourse()
  }, [])

  const [items, setItems] = useState([])
  const [sections, setSections] = useState([])
  const [allLessons, setAllLessons] = useState([])

  const fetchCourse = async () => {
    const data = await fetch(`http://192.168.1.116:8000/api/courses/${results}`)
    const items = await data.json()
    console.log(items.data)
    setItems(items.data)

    console.log(items.data["0"]["sections"])
    setSections(items.data["0"]["sections"])

    console.log(items.data["0"]["alllessons"])
    setAllLessons(items.data["0"]["alllessons"])
  }

  return (
    // <div>
    //   <pre>{JSON.stringify(person, null, 2)}</pre>
    // </div>

    <Layout>
      <Wrapper>
        <WaveBackground />

        <ContentWrapper>
          <NavSection />

          {items.map(item => (
            <div key={item.courses_id}>
              <SEO title={item.title} />
              <SectionDetail
                logo={item.logo}
                title={item.title}
                img={item.img}
                sections={sections.length}
                hours={item.hours}
                desc={item.description}
                name={item.roles["0"].name}
                instaimg={item.roles["0"].img}
                topics={allLessons.length}
              />
              <WrapperWidth>
                <WrapperLessons>
                  {sections.map(item => (
                    <div key={item.sections_id}>
                      <Title>{item.sections_title}</Title>

                      {item.lessons.map(item => (
                        <div key={item.lessons_id}>
                          <Link to={`/app/lesson/${item.lessons_id}`}>
                            <LessonsBox
                              lessonnum={item.num}
                              lessontitle={item.title}
                              lessontime={item.time}
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                  ))}
                </WrapperLessons>
              </WrapperWidth>
            </div>
          ))}
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  max-width: 100%;
`
const ContentWrapper = styled.div`
  overflow: hidden;
  max-width: 1234px;
  margin: 0 auto;

  @media (max-width: 640px) {
    padding: 0px 0px;
  }
`

const WrapperWidth = styled.div`
  max-width: 1234px;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: auto;
  justify-items: center;
  padding: 50px 0px 0px;
  gap: 40px;
  margin: 0px 20px;
`

const WrapperLessons = styled.div`
  width: 60%;
  background: #fff;
  margin: auto 0;
  border-radius: 20px;
  padding: 20px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(20px) brightness(80%) saturate(150%);
  margin-bottom: 50px;
  transition: all 0.9s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

  &:hover {
    /* transform: translateY(-5px); */
  }

  @media (max-width: 640px) {
    width: 95%;
  }
`

const Title = styled(Caption2)`
  color: #1c2f5f;
  margin-bottom: 40px;
  text-align: center;
  padding: 10px;
  background: #1ff5ff;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset,
    rgba(0, 0, 0, 0.2) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 1px 3px;
  backdrop-filter: blur(20px) brightness(80%) saturate(150%);
  border-radius: 20px;
`
