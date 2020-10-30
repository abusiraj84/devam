import React, { useState, useEffect, FC } from "react"
import { Link, RouteComponentProps } from "@reach/router"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import WaveBackground from "../components/backgrounds/WaveBackground"
import SEO from "../components/layout/seo"
import NavSection from "../components/sections/NavSection"
import { motion } from "framer-motion"
import Play from "../../static/images/icons/play.svg"
import { H1, H3 } from "../components/styles/TextStyles"

type Props = RouteComponentProps<{
  results: string
}>

export const Lesson: FC<Props> = ({ results = 1 }) => {
  useEffect(() => {
    fetchLessons()
  }, [])

  const [lesson, setLesson] = useState([])

  const [isOpen, setIsOpen] = useState(false)

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-1000px" },
  }

  const fetchLessons = async () => {
    const data = await fetch(`http://192.168.1.116:8000/api/lessons/${results}`)
    const items = await data.json()
    console.log(items)
    setLesson(items)
  }

  return (
    // <div>
    //   <pre>{JSON.stringify(person, null, 2)}</pre>
    // </div>

    <Layout>
      <Wrapper>
        <WaveBackground />

        <NavSection />

        <VideoWrapper
          initial={{ opacity: 0 }}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <VideoClose onClick={() => setIsOpen(!isOpen)}>
            <VideoCloseImg
              src="https://designcode.io/images/icons/x.svg"
              alt="cancel"
            />
          </VideoClose>
          <VideoContent>
            <iframe
              src="https://player.vimeo.com/video/150580210"
              width="1200"
              height="675"
              allow="autoplay; fullscreen"
            ></iframe>
          </VideoContent>
        </VideoWrapper>
        <ContentWrapper>
          <ImgLesson img={lesson.img}></ImgLesson>
          <PlayWrapper
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <PlayIcon src={Play} alt="" onClick={() => setIsOpen(!isOpen)} />
          </PlayWrapper>

          <Title>{lesson.title}</Title>
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
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 640px) {
    padding: 0px 0px;
  }
`
const VideoWrapper = styled(motion.div)`
  position: fixed;
  width: 100%;
  top: 0px;
  background: rgb(0, 0, 0);
  backdrop-filter: blur(40px);
  z-index: 3;
  transition: all 0.3s ease-in-out 0s;
  visibility: visible;
`

const VideoContent = styled.div`
  position: relative;
  max-width: 1200px;
  margin: auto;
`

const VideoClose = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  top: 20px;
  right: 20px;
  background: linear-gradient(
    360deg,
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.5) 100%
  );
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 40px;
  backdrop-filter: blur(40px);
  border-radius: 30px;
  cursor: pointer;
  z-index: 3;
`
const VideoCloseImg = styled.img`
  margin: 8px 8px 8px;
`

const ImgLesson = styled.div`
  position: relative;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  width: 400px;
  height: 400px;
  background-size: 500px 500px;
`

const PlayWrapper = styled(motion.div)`
  position: absolute;
  top: 250px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 200px;
  margin-top: 20px;
`
const PlayIcon = styled(motion.img)`
  @media (max-width: 640px) {
    display: block;
    cursor: pointer;
    grid-column-start: none;
  }
`

const Title = styled(H3)`
  color: #fff;
  padding: 20px;
`
