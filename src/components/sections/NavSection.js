import React, { useState, useContext } from "react"
import { AuthContext } from "../../context/auth"
import firebase from "gatsby-plugin-firebase"

import styled from "styled-components"
import { motion } from "framer-motion"
import { Caption, SmallText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import { Link, navigate } from "gatsby"

import logo from "../../../static/images/logos/logo.svg"
import Courses from "../../../static/images/icons/courses.svg"
import Shop from "../../../static/images/icons/discounts.svg"
import credit from "../../../static/images/icons/credit.svg"
import Menu from "../../../static/images/icons/menu.svg"
import Account from "../../../static/images/icons/account.svg"

function NavSection() {
  const { user } = useContext(AuthContext)

  var usera = firebase.auth().currentUser
  var name, email, photoUrl, uid, emailVerified, isPremium

  if (user != null) {
    name = usera.displayName
    email = usera.email
    photoUrl = usera.photoURL
    emailVerified = usera.emailVerified
    uid = usera.uid
    isPremium = usera.isPremium

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
  }

  console.log(isPremium)
  const handleLogout = async () => {
    await firebase.auth().signOut()
    navigate("/signin")
  }

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenLogin, setIsOpenLogin] = useState(false)

  const variants = {
    open: { opacity: 1, x: 0, y: 0 },
    closed: { opacity: 0, y: "-650px" },
  }

  const variants2 = {
    open: { opacity: 1, x: 0, y: 50 },
    closed: { opacity: 0, x: 200, y: 50 },
  }
  return (
    <Wrapper>
      <ContentWrapper>
        <Link to="/app">
          <Logo src={logo} />
        </Link>
        <MenuWrapper>
          <Link to="/subscribe">
            <MenuIcon>
              <Title>الأسعار</Title>
              <img src={credit} alt="" />
            </MenuIcon>
          </Link>
          <MenuIcon>
            <Title>السوق</Title>
            <img src={Shop} alt="" />
          </MenuIcon>
          <MenuIcon>
            <Title>المدربين</Title>
            <img src={Shop} alt="" />
          </MenuIcon>
          <MenuIcon>
            <Title>الدورات</Title>
            <img src={Courses} alt="" />
          </MenuIcon>
          {!user ? (
            <MenuIcon
              alt=""
              onClick={() => setIsOpenLogin(!isOpenLogin)}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={Account} alt="" />
            </MenuIcon>
          ) : (
            <>
              <MenuIcon onClick={handleLogout}>
                <Title>تسجيل الخروج</Title>
                <img src={Courses} alt="" />
              </MenuIcon>
              <MenuIcon>
                <Title>{name}</Title>
              </MenuIcon>
            </>
          )}

          {/* Login Box */}

          <DropDownLogin
            initial={{ opacity: 0 }}
            animate={isOpenLogin ? "open" : "closed"}
            variants={variants2}
            transition={{ type: "spring" }}
          ></DropDownLogin>
        </MenuWrapper>

        <MenuMobile
          src={Menu}
          alt=""
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
        />

        <DropDownMenu
          initial={{ opacity: 0 }}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          transition={{ type: "spring" }}
        >
          <MenuGrid>
            <img src={Courses} alt="" />
            <TitleMenu>Courses</TitleMenu>
          </MenuGrid>
          <MenuGrid>
            <img src={Shop} alt="" />
            <TitleMenu>Shop</TitleMenu>
          </MenuGrid>
          <MenuGrid>
            <img src={credit} alt="" />
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
  direction: ltr;
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
  grid-template-columns: 90px 90px 90px 90px 90px;
  grid-column-gap: 30px;
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
  display: flex;
  background: none;
  border: none;
  border-radius: 14px;
  align-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  background-blend-mode: overlay;
  padding: 10px 20px;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: rgba(31, 47, 71, 0.25) 0px 20px 40px,
      rgba(0, 0, 0, 0.1) 0px 1px 5px,
      rgba(255, 255, 255, 0.4) 0px 0px 0px 0.5px inset;
  }
  &:hover p {
    color: rgb(255, 255, 255);
    transform: translateY(-1px);
  }
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
  margin-right: 10px;
  transition: all 0.3s ease-in-out 0s;
`

const TitleMenu = styled(Caption)`
  cursor: pointer;

  color: #fff;
`

const DropDownMenu = styled(motion.div)`
  z-index: 999;
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
const DropDownLogin = styled(motion.div)`
  z-index: 999;
  transition: width 2s;

  /* display: ${props => (props.visibility ? "block" : "none")}; */
  /* height: 50%; */
  width: 400px;
  position: absolute;
  right: 20px;
  top: 80px;
  border-radius: 10px;
  padding: 20px;
  background: #053646a8;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset;
  backdrop-filter: blur(20px) brightness(80%) saturate(150%);
`

const WrapperLogin = styled.div`
  display: grid;
  gap: 20px;
  margin: 0px;
`

const Input = styled.input`
    margin-left: 10px;
  height: 100%;
  width: 121%;
  background: linear-gradient(
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.25) 100%
  );
  border: none;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 40px,
    rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
  box-sizing: border-box;
  padding: 10px 42px 10px 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  color: rgb(255, 255, 255);
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  
}
  &: focus {
    /* padding-left: 56px; */
    outline: none;
    /* padding-left: 42px; */
    box-shadow: rgba(47, 184, 255, 0.3) 0px 10px 40px,
      rgb(47, 184, 255) 0px 0px 0px 1px inset;
    background: linear-gradient(
      rgba(24, 32, 79, 0.4) 0%,
      rgba(24, 32, 79, 0.25) 100%
    );
  }
`
const SearchInput = styled.div`
  position: relative;
  width: 100%;
  height: 44px;
  display: flex;
`
const FormInput = styled.div``

const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`
const Button = styled.button`
  margin-bottom: 20px;
  background: linear-gradient(
    91.4deg,
    rgb(47, 184, 255) 0%,
    rgb(158, 236, 217) 100%
  );
  border: none;
  border-radius: 30px;
  box-shadow: rgba(147, 231, 221, 0.3) 0px 20px 40px;
  cursor: pointer;
  display: grid;
  text-align: center;
  padding: 12px 0px;
  width: 60%;
  position: relative;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 40px,
      rgba(0, 0, 0, 0.3) 0px 0px 0px 0.5px inset,
      rgba(0, 0, 0, 0.1) 0px 10px 40px inset;
  }
`
const Button2 = styled.button`
  background: linear-gradient(91.4deg, rgb(78 7 7) 0%, rgb(232 20 47) 100%);
  border: none;
  border-radius: 30px;
  box-shadow: rgba(147, 231, 221, 0.3) 0px 20px 40px;
  cursor: pointer;
  display: grid;
  text-align: center;
  padding: 12px 0px;
  width: 60%;
  position: relative;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 40px,
      rgba(0, 0, 0, 0.3) 0px 0px 0px 0.5px inset,
      rgba(0, 0, 0, 0.1) 0px 10px 40px inset;
  }
`

const SignIn = styled(SmallText)`
  color: rgb(255, 255, 255);
  font-style: normal;
  font-size: 17px;
  line-height: 130%;
  font-weight: 600;
  margin: 0px;
`
