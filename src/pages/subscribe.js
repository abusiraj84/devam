import React, { useState, useContext } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Paypal from "../components/Paypal"
import NavSection from "../components/sections/NavSection"

const Subscribe = () => {
  const [checkout, setCheckOut] = useState(false)
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <NavSection />
        {checkout ? (
          <Paypal />
        ) : (
          <button
            onClick={() => {
              setCheckOut(true)
            }}
          >
            Checkout
          </button>
        )}
      </Layout>
    </>
  )
}

export default Subscribe
