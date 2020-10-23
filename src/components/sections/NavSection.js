import React, { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import logo from "../../../static/images/logos/logo.svg"
import { Caption } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"

function NavSection() {
  const [isOpen, setIsOpen] = useState(false)

  const variants = {
    open: { opacity: 1, x: 0, y: 0 },
    closed: { opacity: 0, y: "-30px" },
  }
  return (
    <Wrapper>
      <ContentWrapper>
        <Logo src={logo} />
        <MenuWrapper>
          <MenuIcon>
            <img src="images/icons/courses.svg" alt="" />
            <Title>Courses</Title>
          </MenuIcon>
          <MenuIcon>
            <img src="images/icons/discounts.svg" alt="" />
            <Title>Shop</Title>
          </MenuIcon>
          <MenuIcon>
            <img src="images/icons/credit.svg" alt="" />
            <Title>Pricing</Title>
          </MenuIcon>

          <img src="images/icons/settings.svg" alt="" />
        </MenuWrapper>
        <MenuMobile
          src="images/icons/menu.svg"
          alt=""
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
        />
        <DropDownMenu
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          transition={{ type: "spring" }}
        >
          <MenuGrid>
            <img src="images/icons/courses.svg" alt="" />
            <TitleMenu>Courses</TitleMenu>
          </MenuGrid>
          <MenuGrid>
            <img src="images/icons/discounts.svg" alt="" />
            <TitleMenu>Shop</TitleMenu>
          </MenuGrid>
          <MenuGrid>
            <img src="images/icons/credit.svg" alt="" />
            <TitleMenu>Pricing</TitleMenu>
          </MenuGrid>
        </DropDownMenu>
      </ContentWrapper>
    </Wrapper>
  )
}

export default NavSection

const Wrapper = styled.div`
  box-sizing: border-box;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr;
  max-width: 1234px;
  padding: 60px 30px;
  margin: 0 auto;
  @media (max-width: 640px) {
    padding: 20px 30px;
  }
`
const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 90px 90px 90px 90px;
  grid-column-gap: 50px;
  justify-items: center;
  align-content: center;
  align-items: center;
  @media (max-width: 640px) {
    display: none;
  }
`
const Logo = styled.img`
  cursor: pointer;
`

const MenuIcon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  align-items: center;
  cursor: pointer;
`
const MenuMobile = styled(motion.img)`
  display: none;
  @media (max-width: 640px) {
    display: block;
    cursor: pointer;
    grid-column-start: none;
  }
`

const Title = styled(Caption)`
  color: ${themes.dark.text1};
`

const TitleMenu = styled(Caption)`
  cursor: pointer;

  color: #fff;
`

const DropDownMenu = styled(motion.div)`
  transition: width 2s;

  /* display: ${props => (props.visibility ? "block" : "none")}; */
  height: 50%;
  width: 300px;
  position: absolute;
  right: 20px;
  top: 80px;
  border-radius: 10px;
  padding: 20px;
  background: #053646a8;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(20px) brightness(80%) saturate(150%);
`

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(255, 255, 255, 0.1);
  margin-bottom: 10px;
  justify-items: center;
  align-items: center;
  filter: brightness(0.8);
  &:hover {
    filter: brightness(1);
  }
`
