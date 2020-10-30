import React, { useState, useContext } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import NavSection from "../components/sections/NavSection"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../context/auth"
import { navigate } from "gatsby"
import app from "firebase/app"
import "firebase/firestore"

var db = firebase.firestore()
const Signup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    firstName: "",
    error: null,
  })

  const { setUser } = useContext(AuthContext)

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
      <form onSubmit={handleSubmit}>
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
      </form>
    </Layout>
  )
}

export default Signup
