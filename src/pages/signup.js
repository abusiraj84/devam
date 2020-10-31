import React, { useState, useContext } from "react"
import styled from "styled-components"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import NavSection from "../components/sections/NavSection"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../context/auth"
import { navigate } from "gatsby"
import app from "firebase/app"
import "firebase/firestore"
import { Link } from "@reach/router"

var db = firebase.firestore()
const Signup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    firstName: "",
    error: null,
  })

  const { setUser } = useContext(AuthContext)
  const [error, setError] = useState("")

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    return firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(result =>
        result.user
          .updateProfile({
            displayName: data.firstName,
            isPremium: Math.floor(Math.random() * 5) + 1,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })

          .then(() => {
            setUser(result)
            navigate("/")
          })
      )
      .catch(err => {
        setData({ ...data, error: err.message })
      })
  }
  return (
    <Layout>
      <SEO title="Home" />
      <NavSection />
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">firstName</label>
        <input
          type="firstName"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <br />
        <br />
        {data.error ? <p style={{ color: "red" }}>{data.error}</p> : null}
        <input type="submit" value="Register" />
      </form> */}
      <Container>
        {data.error && <Error>{data.error}</Error>}

        <Title>اشترك معنا</Title>
        <Base onSubmit={handleSubmit} method="POST">
          <Input
            placeholder="الإسم كاملًا"
            type="firstName"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />

          <Input
            placeholder="البريد الإلكتروني"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <Input
            autoComplete="off"
            placeholder="كلمة المرور"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <Submit type="submit" value="Login">
            سجّل الآن
          </Submit>
        </Base>
        <Text>
          هل لديك عضوية <Link to="/signin">سجل دخول الآن</Link>
        </Text>
        <TextSmall>
          لن نقوم بنشر معلوماتك الخاصة فجميع الحقوق محفوظة لدى مجموعة دوام
          أونلاين.
        </TextSmall>
      </Container>
    </Layout>
  )
}

export default Signup

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`

// export const Link = styled(ReachRouterLink)`
//   color: #fff;
//   text-decoration: none;
//   &:hover {
//     text-decoration: underline;
//   }
// `

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 30px;
  }
`

export const Submit = styled.button`
  background: #00cffd;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: #080812;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`
