import React from "react"
import { Course } from "../modules/Course"
import { Router as MyRouter } from "@reach/router"
import IndexPage from "."
import { Lesson } from "../modules/Lesson"
import Signup from "./signup"

const Router = () => {
  return (
    <MyRouter>
      <IndexPage path="/app" />
      <Signup path="/signup" />
      <Course path="/app/course/:results" />
      <Lesson path="/app/lesson/:results" />
    </MyRouter>
  )
}

export default Router
