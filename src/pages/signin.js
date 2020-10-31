import React, { useState, useContext } from "react"
import styled from "styled-components"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import NavSection from "../components/sections/NavSection"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../context/auth"
import { Link, navigate } from "gatsby"

const SignIn = () => {
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
    setData({ ...data, error: null })
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        setUser(result)
        navigate("/")
      })

      .catch(err => {
        setData({ ...data, error: err.message })
        setError(error.message)
      })
  }
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <NavSection />
        {/* <form onSubmit={handleSubmit}>
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
          <input type="submit" value="Login" />
        </form> */}
        <Container>
          {error && <Error data-testid="error">{error}</Error>}

          <Title>تسجيل الدخول</Title>
          <Base onSubmit={handleSubmit} method="POST">
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
              تسجيل الدخول
            </Submit>
          </Base>
          <Text>
            لست مسجلًا؟ <Link to="/signup">سجل عضويتك الآن</Link>
          </Text>
          <TextSmall>
            لن نقوم بنشر معلوماتك الخاصة فجميع الحقوق محفوظة لدى مجموعة دوام
            أونلاين.
          </TextSmall>
        </Container>
      </Layout>
    </>
  )
}

export default SignIn

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
