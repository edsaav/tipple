import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RecipeBrowser from "../components/recipe-browser"

export default () => {
  return (
    <Layout>
      <SEO title='Home' home={true} />
      <RecipeBrowser />
    </Layout>
  )
}
